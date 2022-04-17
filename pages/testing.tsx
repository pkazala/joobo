import type { NextPage } from 'next'
import Header from '../components/header'
import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
};

axios.get('https://joobo-backend.vercel.app/users', config).then(response => {
  console.log(response);
});

const Test: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <p className="mt-10 text-center text-2xl font-light">ok</p>
    </div>
  )
}

export default Test