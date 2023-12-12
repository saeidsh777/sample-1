import { useRoutes } from 'react-router-dom'
import { route } from './routes/route'

import AOS from "./utils/aos"

import './App.css'

function App() {
  const router = useRoutes(route)

  return (
    <>
    {router}
    </>
  )
}

export default App
