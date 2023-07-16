import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import { useMoralis } from 'react-moralis'
import Messages from '../components/Messages'

export default function Home() {
  const { isAuthenticated} = useMoralis()

  if(!isAuthenticated) return <Login />

  return (
    <div className='w-full h-screen overflow-y-scroll overflow-hidden bg-gradient-to-b from-black to-fuchsia-900' >
      <Head>
        <title>Metaverse build</title>
        <meta name="description" content="This is a chat dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mx-auto max-w-screen-xl'>
        <Header />
        <Messages />
      </div>
    </div>
  )
}
