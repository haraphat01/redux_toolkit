import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { openModal } from "../features/modal/modalSlice";
function CartContainer() {
    let {amount, total, cartItems} = useSelector((store) => store.cart)
    let  dispatch = useDispatch()

    if(amount < 1){
        return <section className="cart">
            <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart">
                        is currently empty
                    </h4>
            </header>
            
        </section>
    } 
    return( <section className="cart">
            <header>Your bag</header>
            <div>
            {cartItems.map((item)=>{
                return <CartItem key={item.id} {...item}/>        
            } )}  
            </div>
            <footer>
            <hr/>
                <div className="cart-total">
                    <h4>
                    total <span>${total.toFixed(1)}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={()=>dispatch(openModal())}>clear cart</button>
            </footer>
         </section>)
}

export default CartContainer;


// return ( <div className="cart">
// <header>Your bag</header>
// <div>
//  {cartItems.map((item)=>{
//      return <CartItems key={item.id} {...item}/>
//  })}
// </div>

// </div> );