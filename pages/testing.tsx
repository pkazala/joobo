import type { NextPage } from 'next'
import Header from '../components/header'
import axios from 'axios';
import { useState } from 'react';

const Test: NextPage = () => {

  const [test, setTest] = useState("try")

  axios.get('https://joobo-backend.vercel.app/api/users').then(response => {
    console.log(response);
    setTest(JSON.stringify(response.data))
  });

  return (
    <div className="min-h-screen">
      <Header></Header>
      <p className="mt-10 text-center text-2xl font-light">{test}</p>
    </div>
  )
}

export default Test