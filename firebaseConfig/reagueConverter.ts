import { DocumentData, FirestoreDataConverter, 
    QueryDocumentSnapshot, SnapshotOptions, serverTimestamp } from "@firebase/firestore";
import { Reague } from "../domain/Reague";

const reagueConverter: FirestoreDataConverter<Reague> = {
    toFirestore(reague: Reague) {
        return {
            member1: reague.member1,
            member2: reague.member2,
            member3: reague.member3,
            member4: reague.member4,
            reague_id: reague.reagueId,
            reague_team_id: reague.reagueTeamId,
            team_name: reague.teamName,
        };
    },

    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Reague {
        const data = snapshot.data(options);

        // Book オブジェクトの id プロパティには Firestore ドキュメントの id を入れる。
        return {
            member1: data.member1,
            member2: data.member2,
            member3: data.member3,
            member4: data.member4,
            reagueId: data.reague_id,
            reagueTeamId: data.reague_team_id,
            teamName: data.team_name,
        };
    }
}

export default reagueConverter;