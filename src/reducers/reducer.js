import Item1 from '../components/images/item1.jpg'
import Item2 from '../components/images/item2.jpg'
import Item3 from '../components/images/item3.jpg'
import Item4 from '../components/images/item4.jpg'
import Item5 from '../components/images/item5.jpg'
import Item6 from '../components/images/item6.jpg'
import Item7 from '../components/images/item7.jpg'
import Item8 from '../components/images/item8.jpg'
import Item9 from '../components/images/item9.jpg'
import Item10 from '../components/images/item10.jpg'
import { ADD_TO_CART,REMOVE_ITEM } from '../actions/action-types'



const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6},
        {id:7,title:'heels', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:80,img: Item7},
        {id:8,title:'black sports', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:55,img: Item8},
        {id:9,title:'red canvas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:69,img: Item9},
        {id:10,title:'blue easy', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:97,img: Item10}
    ],
    addedItems:[],
    total: 0

}
const reducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
  else{
    return state
    }
}

export default reducer
