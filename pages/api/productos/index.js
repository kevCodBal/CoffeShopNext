import { database } from '../../../database';
import {collection, query, getDoc, getDocs} from 'firebase/firestore'

export default async function productos(req, res){

    //consulta informacion
    const consulta = query(collection(database, "productos"))
    const snapshot = await getDocs(consulta)

    if(snapshot.empty){
        return res.status(404).json({mensage:"No se encontraron documentos"})
    }

    const productos = []

    snapshot.forEach(doc=>{
        productos.push({id:doc.exists,...doc.data()})
    })

    return res.status(200).json(productos)
}