import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"
let initialState = {
    cartItems: cartItems,
    amount: 5,
    total: 0,
    isLoading: true
}

let cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) =>{
            state.cartItems = []
        },

        removeitem: (state, action)=>{
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item)=> item.id !== itemId)
        },
        increaseItem: (state, {payload})=> {
            const cartItem = state.cartItems.find((item)=> item.id === payload.id )
            cartItem.amount = cartItem.amount + 1
        },
        decreaseItem: (state, action)=> {
            const cartItem = state.cartItems.find((item)=> item.id === action.payload.id )
               
                    cartItem.amount = cartItem.amount - 1            
        },
        calculateTotal: (state)=>{
           let total = 0;
           let amount = 0;
           state.cartItems.forEach((item)=>{
            amount += item.amount;
            total += item.amount * item.price
           })
           state.amount = amount;
           state.total = total

        }
    }
   
})
//  
export default cartSlice.reducer
export const {clearCart, removeitem, increaseItem,decreaseItem,calculateTotal} = cartSlice.actions