import './App.scss';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Pages */

import Info from './pages/Info'

/* Components */
import SideBar from './internalComponents/SideBar';
import Buttons from './pages/atoms/buttons/Buttons';
import Badges from './pages/atoms/badges/Badges';
import TextEditor from './components/Template/TextEditor';

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
    {loading === false ?
    (
    <div>
      <BrowserRouter basename='/'>
      <SideBar /> 
      <div className="flex">
          <div className="flex-1 lg:w-5/6 w-full lg:ml-64 px-10 py-14 overflow-auto">      
            <Routes>
              <Route path='*' element={<Navigate to="/" replace />} />
              <Route path="/">
                <Route index element={<Info />} />
                <Route path="atoms">       
                  <Route path="badges" element={<Badges />} />
                  <Route path="buttons" element={<Buttons />} />
                </Route>
                <Route path="molecules">
                </Route>
                <Route path="organisms">
                </Route>
                <Route path="templates">
                  <Route path="texteditor" element={<TextEditor />} />
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
