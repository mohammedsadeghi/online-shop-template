export const initialState ={
    basket:[],
    LogedInUser:null
}

const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'Add_To_Basket':
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
        case 'set_logIn':
            return {
                ...state,LogedInUser:action.user
            }
        case 'remove_from_cart':
            
                let newcard =[...state.basket];
                const index = state.basket.findIndex((basketItem)=>
                    basketItem.id===action.id
                )
                if(index>=0){
                    newcard.splice(index,1)
                }else{console.log('here')}
                return{...state,basket:newcard}
            
    }
}
export default reducer;