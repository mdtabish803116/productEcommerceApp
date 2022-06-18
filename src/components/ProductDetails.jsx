import React from "react";
import {useParams} from "react-router-dom";

const ProductDetails = () =>{
    const {productId} = useParams();
    const [product , setProduct] = React.useState([])


    const getProduct = ()=>{
        fetch(` http://localhost:3006/allProducts/${productId}`) 
        .then((res) => res.json())
        .then((res) => setProduct(res))
        .catch((error)=> console.log(error))
    }

    React.useEffect(()=>{
           getProduct();
    }, [productId])
      return(
          <div style = {{width : "60%",
                        margin : "auto",
                        marginTop : "60px"
              }}>
                  <table>
                             <thead>
                                       <tr>
                                              
                                               <th>Product Name</th>
                                               <th>Price</th>
                                              
                                       </tr>
                             </thead>

                             <tbody> 
                                    
                                 <tr>
                                            <td>{product.name}</td>
                                             <td>{product.price}</td>
                
                                 </tr>
                            
                             </tbody>
                    </table>
          </div>
      )
}

export {ProductDetails}