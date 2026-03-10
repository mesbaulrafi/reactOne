
import './App.css'
import RootLayouts from './Components/Layouts/RootLayouts';
import { Routes, Route } from "react-router-dom";

import Error from './Components/Pages/Error';
import Home from './Components/Pages/Home';
function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={< Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
