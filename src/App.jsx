import {Routes , Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {AllProducts} from "./components/AllProducts";
import {Home} from "./components/Home"
import {ProductDetails} from "./components/ProductDetails";
import {NotFound} from "./components/NotFound";

function App() {
  return (
    <div>
         <Navbar />
         <Routes>
               <Route path= "/" element = {<Home/>}></Route>
               <Route path= "/allProducts" element = {<AllProducts/>}></Route>
              <Route path= "/allProducts/:productId" element = {<ProductDetails/>}></Route>
              <Route path="*" element={<NotFound />}></Route>
         </Routes>
          
    </div>
  );
}

export default App;
