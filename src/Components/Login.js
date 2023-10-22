import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/Register');
    }

    const storage = {
        email: '',
        password: '',
    };
    const [user, setUser] = useState(storage);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        try {
            axios.post("http://localhost:9000/login", user)
                .then(response => {
                    alert(response.data.message);
                    navigate("/")
                })
                .catch(error => {
                    console.log("error", error);
                });
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <div className='pt-20 pb-40 bg-slate-950'>
            <div className='border w-3/12 mx-auto rounded-lg'>
                <div className='text-center'>
                    <h1 className='text-4xl pt-2 font-bold text-white'>Log in</h1>
                </div>
                <div className='text-center mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange} // Use onChange instead of onClick
                            className='pl-2 mx-auto w-11/12 mt-10 border py-2 rounded-lg'
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange} // Use onChange instead of onClick
                            className='pl-2 mx-auto w-11/12 mt-4 border py-2 rounded-lg'
                            placeholder="Password"
                        />
                        <input
                            className='pl-2 mx-auto w-11/12 mt-4 border py-2 rounded-lg bg-lime-700 mb-2'
                            type="submit"
                        />
                    </form>
                </div>
                <div className='text-center pt-2 pb-2 border'>
                    <span className='text-white'>New member </span>
                    <span className='text-blue-900 font-bold underline' onClick={handleNavigate}>
                        Sign up
                    </span>
                </div>
            </div>
        </div>
    );
}
