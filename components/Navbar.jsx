import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from "react-redux";

const Navbar = () => {
    

    const {items:cart} = useSelector((state)=> state.cart)
    const quantity= cart.length
  return (
    <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt='Contant' width="32" height="32"  />
                </div>

                <div className={styles.texts}>
                    <div className={styles.text}>Ornedar Ahora</div>
                    <div className={styles.text}>58 62 5 8544</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <Link href="/product">
                        <li className={styles.listItem}>Productos</li>
                    </Link>
                        
                        <li className={styles.listItem}>Menu</li>
                        <Image  src="/img/coffee.png" width="100px" height="85px"/>
        
                        <li className={styles.listItem}>Contant</li>
                    <Link href="/auth" passHref>
                        <li className={styles.listItem}>Login</li>
                    </Link>
                </ul>
            </div>

            <Link  href='/cart' passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt='' width="30px" height="30px"/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
    </div>
  )
}

export default Navbar