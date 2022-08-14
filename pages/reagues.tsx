import Head from "next/head";
import React from "react";
import Dashboard from '../components/Dashboard'
import ReagueTable from "../components/ReagueTable";

const Reagues = ():JSX.Element => {
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