import './App.scss';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Pages */

import Info from './pages/Info'

/* Components */
import SideBar from './pages/components/SideBar';
import Buttons from './pages/atoms/buttons/Buttons';

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
    {loading === false ?
    (
    <div>
      <BrowserRouter>
      <SideBar /> 
      <div className="flex">
          <div className="flex-1 lg:w-5/6 w-full lg:ml-64 px-10 py-14 overflow-auto">      
            <Routes>
              <Route path='*' element={<Navigate to="/" replace />} />
              <Route path="/">
                <Route index element={<Info />} />
                <Route path="atoms">       
                  <Route path="buttons" element={<Buttons />} />
                </Route>
                <Route path="molecules">
                </Route>
                <Route path="organisms">
                </Route>
              </Route>
            </Routes>            
          </div>        
      </div>
      </BrowserRouter>
    </div>
    )
    : 
    (
      <div>Loading...</div>
    )     
  }
  </>
  );
}
