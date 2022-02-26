import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import Slice from '../components/Slice'
import styles from '../styles/Home.module.css'
import coffeeList from '../data'
import CoffeeList from '../components/CoffeeList'
import axios from 'axios'

export async function getServerSideProps({req}){
  const {data:products} = await axios.get(`http://${req.headers.host}/api/productos/filtrar?popular=true`)

  return {
    props:{
      coffeeList: products
    }
  }
}


export default function Home({coffeeList}) {
  

  return (
      <div>
        <Head>
          <title></title>
          <meta />
        </Head>
        <Slice/>
       
        <CoffeeList coffeeList={coffeeList} />
      </div>
  )
}
