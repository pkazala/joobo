import type { NextPage } from 'next'
import Header from '../components/header'
import Body from '../components/body'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Body></Body>
      <h1 className="text-center text-3xl pb-10">🚀 <br /> To the moon!</h1>
    </div>
  )
}

export default Home
