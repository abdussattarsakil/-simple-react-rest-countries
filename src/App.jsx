import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const fetchCountries = async () => {
  const res = await (fetch('https://openapi.programming-hero.com/api/all'))
  return res.json();
}

function App() {

  const countriesPromise = fetchCountries();

  return (
    <>
      <h1 >LEARN <span className='text-h1'>REACT REST COUNTRIES</span> </h1>

      <Suspense fallback={<h1>Data is loading...</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    </>
  )
}

export default App
