import {CartIcon} from "../icons"
import { useSelector } from "react-redux"
function Navbar() {
   
    let {amount} = useSelector((store) => store.cart)
    console.log(amount)
    return ( <nav>
        <div className="nav-center">
            <h3>Redux</h3>
            <div className="nav-container">
                <CartIcon/>
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                    
                </div>
            </div>
        </div>
    </nav> );
}

export default Navbar;