

import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Root from './layouts/Root'
import Generate from './pages/Generate'

function App() {


  return (
    <>
      <Routes>

        <Route path='/' element={<Root></Root>} >
          <Route index element={<Home />}></Route>
          <Route path='generate' element={<Generate />}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
