import { useRoutes } from 'react-router-dom'
import { route } from './routes/route'

import AOS from "./utils/aos"

import './App.css'
import ScrollToTop from './utils/ScrollToTop'

function App() {
  const router = useRoutes(route)

  return (
    <>
      <ScrollToTop />
      {router}
    </>
  );
}

export default App
