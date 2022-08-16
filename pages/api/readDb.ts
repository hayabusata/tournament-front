import {collection, getDocs, getFirestore, query, QuerySnapshot} from "firebase/firestore/lite";
import firebase from 'firebase/compat/app';
import firebaseApp from "../../firebaseConfig/firebase"
import { Reague } from "../../domain/Reague";
import reagueConverter from "../../firebaseConfig/reagueConverter";

// export async function getReagues(): Reague[] {
//     const db = getFirestore();
//     const collRef = collection(db, "/reague").withConverter(reagueConverter);
//     const snapshot = await getDocs(collRef);
//     return snapshot.docs.map((doc) => doc.data());
// }

const getReagues = async (): Promise<Reague[]> => {
    // const snapshot = firebase.firestore()
    //                 .collection("reague/team1")
    //                 .withConverter(reagueConverter)
    //                 .doc().get();
    // const post: Reague = snapshot.data();
    // return post;
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "reague")).withConverter(reagueConverter);
    const snapshot = await getDocs(q);
    const ret: Reague[] = [];
    snapshot.forEach(element => {
        ret.push(element.data() as Reague);
    });
    return ret;
}

export default getReagues;
