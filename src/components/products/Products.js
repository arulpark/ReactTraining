//import React from 'react'
import productsList from './Data'
//const Products = () =>
function Products() 
{
  return (
    <div>
        <div id='Products' className='py-16'>
        <div className='w-9/12 mx-auto'>
            <h1 className='text-4xl font-medium mb-8'>Products</h1>

            
            <div className='grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-11 mx-auto align-baseline'>
{productsList.map((product) =>{
return(
    <div className='shadow p-4 border'>
        
        <h1 className='font-semibold text-2xl text-center'>{product.title.slice(0, 50)} ...</h1> 
        <img src={product.image} style={{width:'100%', height:'250px'}} />
        <div className='grid grid-cols-2 md:grid-cols-2 bg-slate-200 my-3 p-2'>
            <div className='md:border-r border-gray-300'>Rating: {product.rating.rate}</div>
            <div className='text-end'>Count: {product.rating.count}</div>
        </div>

        <div className='my-5 text-center'>
            <div className='bg-red-800 text-white py-2 px-10 font-semibold inline-block'>Price: Rs {product.price}
            </div>
        </div>

        <div>{product.description.slice(0, 150)} ...</div>
        </div>

);
})}
    </div>

            </div>
            </div>
            </div>
  )
}

export default Products