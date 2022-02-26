import React from 'react'
import axios from 'axios'
import CoffeList from '../../components/CoffeeList'

export async function getServerSideProps({req}){
        console.log(req.headers.host)
    const {data:products} = await axios.get(`http://${req.headers.host}/api/productos`)

    return{
        props:{
            products:products
        }
    }


}

const index = ({products}) => {
    console.log("qui en products")
    console.log(products)
  return (
    <div>
        <CoffeList coffeeList={products}/>
    </div>
    
  )
}

export default index