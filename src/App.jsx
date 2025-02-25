import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1/Card1'
import Home from './components/Home/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
let query = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <QueryClientProvider client={query}>
 <Home/>
 </QueryClientProvider>

    
    </>
  )
}

export default App
