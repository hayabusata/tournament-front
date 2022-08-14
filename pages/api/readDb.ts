import {collection, getDocs, getFirestore, query} from "firebase/firestore";
import db from "../../firebase/firebase"

type Reague = {
    member1: string;
    member2: string;
    member3: string;
    member4: string;
    reagueId: number;
    reagueTeamId: number;
    teamName: string;
}

export default async function() {
    try {
        const q = query(collection(db, "reague"));
        console.log(q);
        const querySnapshot = await getDocs(q);
    } catch (error) {
        
    }
}