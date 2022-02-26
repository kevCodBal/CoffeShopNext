import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveCart = createAsyncThunk( "cart/saveCart" , async ( cart, {getState})=>{
    const {cart:{items}, auth:{id}} = getState()
   //const id='kevin12345'
  // const {cart:{items}} = getState()
   console.log("estoy en el save cart para base de datos")
    console.log(items)

    const result = await fetch("http://localhost:3000/api/cart",{
        method:"POST",
        body:JSON.stringify({username:id, data:{items}}),
        headers:{
            "Content-Type":"application/json"
            
        }
    })

    const data = await result.json()
    console.log(data)

    return data
})

export const getCart = createAsyncThunk( "cart/getCart" , async (payload, {getState})=>{
    const { auth:{id}} = getState()
    //const id='kevin12345'

    const result = await fetch("http://localhost:3000/api/cart/getcart",{
        method:"POST",
        body:JSON.stringify({username:id}),
        headers:{
            "Content-Type":"application/json"
            
        }
    })

    const data = await result.json()
    console.log(data)

    return data
})

const carSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        error:false,
        loading:false
    },

    reducers:{
        addToCart:(state, action)=>{
            const index = state.items.findIndex(item=> item.idorder ===action.payload.order)
            console.log("addcart")
            console.log("itemmm----*")
                console.log(state.items)
             console.log("itemmm----*")
             console.log("paload----*")
                console.log(action.payload.id)
            console.log("index----*")
                console.log(index)
            console.log("itemmm----*")
            if(index!==-1){
                state.items[index].cantidad +=1
            }else{
                const newObject ={...action.payload}
                console.log("entro quio a new object")
                console.log(newObject)
                newObject.cantidad = 1
                state.items.push(newObject)
            }
        },
        
        removeFromCart:(state, {payload})=>{
            state.items = state.items.filter(product => product.id!== payload.id)
        },
        reduceFromCart:(state, {payload})=>{
            const index = state.items.findIndex(item => item.id === payload.id )
            

            if(index!==-1){
                const item = state.items[index]
                item.cantidad -=1 

                if(item.cantidad===0){
                    state.items.splice(index, 1)
                }
            }
        },
        emptyCart:(state, action)=>{
            state.items=[]
        }
    },
    extraReducers(builder){
        builder.addCase(saveCart.pending,(state,action)=>{
            state.loading = true
        }).addCase(saveCart.fulfilled, (state, action)=>{
            state.loading = false
            state.error=false
            console.log(action.payload)
        }).addCase(saveCart.rejected, (state, action)=>{
            state.loading= false
            state.error = true
        }).addCase(getCart.pending,(state, action)=>{
                state.loading= true
        }).addCase(getCart.fulfilled, (state, action)=>{
            state.loading = false
            state.error=false
            state.items = action.payload.items
            console.log(action.payload.items)
        }).addCase(getCart.rejected, (state, action)=>{
            state.loading= false
            state.error = true
        })
    }
})

const cartReducer = carSlice.reducer
export default cartReducer
export const {addToCart, removeFromCart, reduceFromCart, emptyCart } = carSlice.actions