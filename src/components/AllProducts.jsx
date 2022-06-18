import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledDiv = styled.div`
     width : 60%;
     margin : auto;
     margin-top : 60px;
     text-align : center;
`


const AllProducts = () => {
  const [allProducts , setAllProducts] = React.useState([]);

const getAllProducts = () => {
      fetch(` http://localhost:3006/allProducts`) 
      .then((res) => res.json())
      .then((res) => setAllProducts(res))
      .catch((error)=> console.log(error))
    
}


React.useEffect(()=>{
          getAllProducts();
} , [])
    return(
           <StyledDiv>
                    <table>
                             <thead>
                                       <tr>
                                               <th>Serial No.</th>
                                               <th>Product Name</th>
                                               <th>Price</th>
                                               <th>More Details</th>
                                       </tr>
                             </thead>

                             <tbody> 
                                 { 
                                     allProducts.map((product , index)=>(
                                            <tr key = {product.id}>
                                                  <td>{index+1}</td>
                                                  <td>{product.name}</td>
                                                  <td>{product.price}</td>
                                                  <td>
                                                       <Link to={`/allProducts/${product.id}`}>More...</Link>
                                                  </td>
                                            </tr>
                                     ))
                                 }
                                       
                             </tbody>
                    </table>
           </StyledDiv>
    )
}

export {AllProducts}