import {database} from '../../../database'

import { collection, getDocs, query, where } from 'firebase/firestore'

export default async function filtrar(req, res){
    
    const {popular} = req.query
    console.log(popular)
    //consulta informacion 

    const col = collection(database, "productos")
    let snapshot

    if(popular){
        console.log("entro a peticion")
        const consulta = query(col, where('popular', '==', true))
        snapshot = await getDocs(consulta)
    }else{
        const consulta = query(col)
        snapshot = await getDocs(consulta)
        console.log("no entro a la peticion")
    }



    if(snapshot.empty){
        return res.status(404).json({message:"No se encontraron documentos"})
    }

    const productos = []

    snapshot.forEach(doc=>{
        productos.push({id:doc.id, ...doc.data()})
    })

    return res.status(200).json(productos)
}