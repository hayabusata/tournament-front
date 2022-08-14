import React from 'react'
import Button from '@material-ui/core/Button'
import Dashboard from '../components/Dashboard'
import Head from 'next/head'

export default function Home() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Dashboard title="title">
          <Button variant="contained">Success!</Button>
        </Dashboard>
      </div>
      
  )
}