import {BrowserRouter,Routes,Route}from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";


function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path ="/"element={<Home/>}/>
  <Route path ="/AboutUs"element={<AboutUs/>}/>
  <Route path ="/Services"element={<Services/>}/>
  <Route path ="/Products"element={<Products/>}/>
   <Route path ="/Contact"element={<Contact/>}/>


</Routes>
</BrowserRouter>


    </>
  )
}
export default App
