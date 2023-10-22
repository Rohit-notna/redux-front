import axios from 'axios';
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/CreateSlice';
import { fetchProducts } from '../Store/ProductStore';

export default function Products() {
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); 

  // Handler to add a product to the cart
  const handleAdd = (product) => {
    dispatch(add(product));
  }

  return (
    <div>
      <div className='grid grid-cols-3 pt-4 bg-slate-950'>
        {data.map((product) => (
          <Card sx={{ maxWidth: 345 }} key={product.id} className='mb-4 mx-auto'>
            <CardActionArea>
              <CardMedia className='h-40' component="img" image={product.image} alt={product.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" className='px-3 py-2 bg-black text-white'>
                  {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='text-center mx-auto'>
              <Button size="small" onClick={() => { handleAdd(product) }}  className='mx-auto text-center bg-black text-white border '>
                Add to cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
