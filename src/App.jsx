import { useRoutes } from 'react-router-dom'
import { route } from './routes/route'
import Header from './Components/Header/Header'

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
