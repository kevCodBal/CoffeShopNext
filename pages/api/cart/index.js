import {database} from "../../../database"
import {doc, setDoc} from "firebase/firestore"

export default async function saveCart({body, method}, res){
        console.log("----desde save cart")
        console.log(body.data)
    if(method==="POST"){
        const snapshot = await setDoc(
            doc(
                database,
                "cart",
                body.username
            ),
            body.data
        )

        console.log(snapshot)
        res.json({success:true})
    }

}