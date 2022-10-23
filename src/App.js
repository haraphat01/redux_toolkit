import Navbar from "./components/Navbar";
import CartContainer from './components/cartContainer'
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const {cartItems} = useSelector((store)=> store.cart);
  const {isOpen} = useSelector((store)=> store.modal);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal());
  },[cartItems]);
  return <main>
    {isOpen && <Modal/>}
    
    <Navbar/>
    <CartContainer/>
    
  </main>;
 
}
export default App;