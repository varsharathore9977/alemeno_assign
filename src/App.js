import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CourseListing from './components/CourseListing'
import Courses from './components/Courses'
import Enrolled from "./components/Enrolled"
export default function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<CourseListing/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/enrolled' element={<Enrolled/>}/>

      </Routes>
      </Router> 
    </>
  )
}
