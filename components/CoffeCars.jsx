import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/CoffeCard.module.css"

const CoffeCars = ({coffe}) => {
  console.log(coffe)
  return (

    <div className={styles.container}>
        <Link href={`product/${coffe.id}`} passHref>
            <Image src={coffe.img} alt="" width="500" height="500" />
        </Link>
        <h1 className={styles.title}>{coffe.name}</h1>
        <span className={styles.price}>Q{coffe.price[0]}</span>
        <p className={styles.desc}>{coffe.desc}</p>
    
    </div>
  )
}

export default CoffeCars