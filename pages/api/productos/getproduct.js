import {doc, getDoc} from "firebase/firestore"
import {database} from "../../../database"

export default async function getProduct({body}, res){
    const snapshot = await getDoc(doc(database, "productos", body.idproduct))

    return res.json(snapshot.data())
    console.log(snapshot)
}