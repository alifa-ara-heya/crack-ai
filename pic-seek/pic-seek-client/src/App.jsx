

import { Route, Routes } from 'react-router'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<h2>This is my default route</h2>} />
      </Routes>

    </>
  )
}

export default App
