import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";

const cart = () => {
  
    const {cart:{items}} = useSelector((state )=>state)
    console.log(items)
    return (
        <div className={styles.container}>
          <div className={styles.left}>
            <table className={styles.table}>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Nombre</th>
                <th>Tipo Lacteo</th>
                <th>Precio</th>
                <th>Unidades</th>
                <th>Total</th>
              </tr>
              {items?.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.name}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    
                      <span >{product.chosemilk}, </span>
                  
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    Q{product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
            </table>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>Q79.60
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>Q0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>Q79.60
              </div>
              <button className={styles.button}>CHECKOUT NOW!</button>
            </div>
          </div>
        </div>
      );
}

export default cart