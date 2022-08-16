import Head from "next/head";
import React from "react";
import Dashboard from '../components/Dashboard'
import ReagueTable from "../components/ReagueTable";
import getReagues from "./api/readDb";
import { Reague } from "../domain/Reague";

const Reagues = ():JSX.Element => {
    const reagues: Promise<Reague[]> = getReagues();
    reagues.then(
        (value: Reague[]) => {
            console.log(value);
        }
    )

    return (
        <div>
            <Head>
                <title>Reagues</title>
            </Head>
            <Dashboard  title="title">
                <ReagueTable />
            </Dashboard>
        </div>
        
    );
}

export default Reagues;