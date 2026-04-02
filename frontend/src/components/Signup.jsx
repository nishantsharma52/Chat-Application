import React, { use, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast"


const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })
  const navigate = useNavigate();
  const handleCheckBox = (gender) => {
    setUser({ ...user, gender })

  }
  const onSubmitHandler =  async (e) => {
    e.preventDefault()
    try {
      console.log(user);
      
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
        headers :{
          "Content-Type":'application/json'
        },
        withCredentials:true
      })
      if(res.data.success) {
        navigate("/login")
        toast.success(res.data.message);
      }
      
    } catch (error) {
       toast.error(error.response.data.message)
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })

  }
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md border border-white/20'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text '>Full Name </span>
            </label>
            <input value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} className='w-full input input-borderd h-10' type="text" placeholder='Full Name' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text '>Username </span>
            </label>
            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className='w-full input input-borderd h-10' type="text" placeholder='username' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text '>Password </span>
            </label>
            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='w-full input input-borderd h-10' type="password" placeholder='password' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text '>Confirm-Password </span>
            </label>
            <input value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} className='w-full input input-borderd h-10' type="password" placeholder='confirm-password' />
          </div>
          <div className=' flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input checked={user.gender === "male"} onChange={() => handleCheckBox("male")} type="checkbox" defaultChecked className="checkbox mx-2 checkbox-neutral" />
            </div>
            <div className=' flex items-center'>
              <p>Female</p>
              <input checked={user.gender === "female"} onChange={() => handleCheckBox("female")} type="checkbox" defaultChecked className="checkbox mx-2 checkbox-neutral" />
            </div>
          </div>
          <p className=' text-center my-2 '> Already have an account?  <Link to="/login"> login</Link> </p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup