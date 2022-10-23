import {ChevronUp,ChevronDown} from '../icons'
import {removeitem, increaseItem, decreaseItem} from "../features/cart/cartSlice"
import { useDispatch } from 'react-redux';
function CartItem({id, img,title,price,amount}) {
    const dispatch = useDispatch()

    return ( 
       <article className='cart-item'>
        <img src={img} alt={title}/>
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            <button className="remove-btn" onClick={()=> dispatch(removeitem(id))}>remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick={()=> dispatch(increaseItem({id}))}>
                <ChevronUp />
            </button>
            <button className="amount">
                {amount}
            </button>
            <button className="amount-btn" onClick={()=> {
                if(amount <= 1){
                    dispatch(removeitem(id))
                } else {
                 dispatch(decreaseItem({id}))
                }
            }
                
               }>
                <ChevronDown/>
            </button>
        </div>
       </article>
     );
}

export default CartItem;