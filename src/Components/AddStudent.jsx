import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addData } from './slice'

import './AddStudent.css'

const AddStudent = () => {
const navigate = useNavigate()
const dispatch = useDispatch();
const goback = () => {
navigate('/student')
}

const obj = {
  name : '',
  age:'',
  course:'',
  batch:''
}
const addchange = (e) => {
obj[e.target.name] = e.target.value
}

const submitstu = (e) => {
  e.preventDefault();
  
  dispatch(addData(obj))
  navigate('/student')
}

  return (
    <>
    <div className='studentaddclass'>
<form >
            <label >Name :</label>
            <br />
            <input type="text" onChange={addchange}  name="name" ></input>
            <br />
            <label>Age :</label>
            <br />
            <input type="text" onChange={addchange}  name="age" ></input>
            <br />
            <label>Course :</label>
            <br />
            <input type="text" onChange={addchange}  name="course" ></input>
            <br />
            <label>Batch :</label>
            <br />
            <input type="number" onChange={addchange}  name="batch" ></input>
            <br />
            <button onClick={goback} className='button-cancel' >Cancel</button>
            <button onClick={submitstu} className='button-submit' >Submit</button>
          </form>
          </div>
    </>
  )
}

export default AddStudent