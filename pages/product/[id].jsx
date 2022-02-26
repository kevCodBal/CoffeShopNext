import React, { useState } from 'react'
import Image from 'next/image';
import styles from '../../styles/Product.module.css'
import axios from "axios";
import {useDispatch} from "react-redux"
import {addToCart, saveCart} from '../../features/cart/index'

export   async function getServerSideProps({params}){
  const {id} = params
  
  const  result = await fetch("http://localhost:3000/api/productos/getproduct",{
    method:"POST",
    body:JSON.stringify({idproduct:id}),
    headers:{
      "Content-Type":"application/json"
    }
  })

  const coffe = await result.json()
  return{
    props:{
      coffe: coffe,
      id:id
    }
  }
}

const Producto = ({coffe, id}) => {

  console.log(id)
    
    const [price, setPrice] = useState(coffe.price[0])
    const [size, setSize] =useState(0);
    const [quantity, setquantity] = useState(1)
    const [chosemilk, setChose]= useState('')

    const dispath = useDispatch()

    const changePrice = (number)=>{
      setPrice(price+number)
    }
    
    const choseSize = (sizeIndex)=>{
      const difference = coffe.price[sizeIndex] -coffe.price[size]
      setSize(sizeIndex)
      changePrice(difference)
    }

    const choseOpcion = (e, option)=>{
      const chose = e.target.checked;
      console.log(chose)
      console.log(option)
      if(chose){
        setChose(option)
      }else{
        setChose('Entera')
      }
    }

    const addcart =()=>{
      const coffeOrder=({idorder:id,img:coffe.img, descripcion:coffe.descripcion, name:coffe.name, price, quantity, chosemilk})
      console.log("aqui quiero el dispathc")
      console.log(coffeOrder)
       dispath(addToCart(coffeOrder))
       dispath(saveCart())
    }

    

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={coffe.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{coffe.name}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{coffe.descripcion}</p>
        <h3 className={styles.choose}>Tamanos</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => choseSize(0)}>
            <Image src="/img/cup.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => choseSize(1)}>
            <Image src="/img/cup.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => choseSize(2)}>
            <Image src="/img/cup.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Tipo de lacteo</h3>
        <div className={styles.ingredients}>
          {coffe.choseMilk.map((option)=>(
              <div className={styles.option} >
              <input
                type="checkbox"
                id={option}
                name={option}
                className={styles.checkbox}
                onChange={(e) => choseOpcion(e, option)}
              />
              <label htmlFor="double">{option}</label>
            </div>
          ))}          
        </div>
        <div className={styles.add}>
            <input  
              onChange={(e)=> setquantity(e.target.value)}
            type="number"
             defaultValue={1} 
            className={styles.quantity}
            />
            <button className={styles.button} onClick={addcart}>
              Anadir al Carro
            </button>
        </div>
      </div>
    </div>
  )
}





export default Producto