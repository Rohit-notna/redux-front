import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { remove } from '../Store/CreateSlice';

export default function Cart() {

  const dispatch=useDispatch();

const products = useSelector((state)=>state.cart);

const handleRemove=(productId)=>{
dispatch(remove(productId))
}

  return (
    <div>
      <div className='grid grid-cols-3 pt-16 pb-96 bg-slate-950'>
        {products.map((product) => (
  <Card sx={{ maxWidth: 345 }} key={product.id} className='mb-4 mx-auto'>
    <CardActionArea>
      <CardMedia  className='h-40'
        component="img" 
      
        image={product.image} 
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" className='px-3 py-2 bg-black text-white mx-auto text-center'>
          {product.price}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className='text-center mx-auto'>
      <Button size="small" onClick={()=>{handleRemove(product.id)}} className='mx-auto text-center bg-black text-white  border'>
        Remove
      </Button>
    </CardActions>
  </Card>
))}
</div>
    </div>
  )
}
