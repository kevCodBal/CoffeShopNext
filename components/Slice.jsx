import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Slice.module.css'

const Slice = () => {

    const [index, setIndex] = useState(0)
    const images = [
        'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        'https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        
    ]

    const direcction = (direc)=>{
        if(direc === "1"){
            setIndex(index !== 0? index-1:2)
        }

        if(direc=='r'){
            setIndex(index !== 2 ? index+1:0)
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={()=>direcction("r")}> 
            <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
        </div>
        

        <div className={styles.wrapper} style={{transform:`translatex(${-100*index}vw)`}}>
            {images.map((img, i) =>(
                <div className={styles.imgContainer} key={i}>
                    <Image  src={img} alt="" layout="fill" objecFit="contain"/>
                </div>
            ))}
        </div>

        <div className={styles.arrowContainer} style={{right:0}} onClick={()=>direcction("r")}>
            <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
        </div>

    </div>
  )
}

export default Slice