import type { NextPage } from 'next'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <p className="text-center mt-10 text-2xl font-thin">Here you will find everything you need to know to find your perfect job</p>
      <p className="text-center mt-2 text-2xl font-thin">Working to improve job search for every developer</p>
      <h1 className="text-center mt-2 text-2xl">Coming soon...</h1>
    </div>
  )
}

export default Home
