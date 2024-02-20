//import React from 'react'
import productsList from './Data'
//const Products = () =>
function Products() 
{
  return (
    <div>
        <div id='contact' className='py-16'>
        <div className='w-9/12 mx-auto'>
            <h1 className='text-4xl font-medium mb-8'>Products</h1>

            
            <table style={{"width" : "100%"}} className='productlisttbl'>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Rate</th>
                                <th>Count</th>
                            </tr>
                            {productsList.map((product) =>{
                            return(
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td><img src={product.image} width={50} //style={{"height" : "30px", "width" : "30px"}}
                                /></td>
                                <td>{product.rating.rate}</td>
                                <td>{product.rating.count}</td>
                            </tr>
                       
                       
                );
            })}
             </table>
            </div>
            </div>
            </div>
  )
}

export default Products