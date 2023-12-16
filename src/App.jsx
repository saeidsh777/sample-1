import { useRoutes } from 'react-router-dom'
import { route } from './routes/route'

import ScrollToTop from './utils/ScrollToTop'

import AOS from "./utils/aos"

import './App.css'

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
