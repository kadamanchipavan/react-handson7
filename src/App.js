import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Student from './Components/Student'
import EditStudent from './Components/EditStudent'
import AddStudent from './Components/AddStudent'
import store from './Components/store';


import './App.css'
import { Provider } from 'react-redux'

const App = () => {
  
  const navigate = useNavigate();
  const home = () => {
navigate('/')
  }
  const student = () => {
    navigate('/student')
      }
      const contact = () => {
        navigate('/contact')
          }
  return (
    
    <div>
<div className='navbar'>
  <span onClick={home}>Home</span>
  <span onClick={student}>Student</span>
  <span onClick={contact}>Contact Us</span>

</div>
<div className='route-div'>
<Provider store={store}>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/student' element={<Student />}/>
  <Route path='/addstudent' element={<AddStudent />}/>
  <Route path='/contact' element={<Contact />}/>
 
  <Route path='/editstudent' element={<EditStudent />}/>
  


</Routes>
    </Provider>
</div>



    </div>
  )
}

export default App