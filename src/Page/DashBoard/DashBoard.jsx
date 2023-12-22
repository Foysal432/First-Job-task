import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import useAuth from "../../Hook/useAuth";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DashBoard = () => {
   const { user,logout } = useAuth()
   const navigate =useNavigate()
   const handlelogout =()=>{
     logout()
     .then(result=>{
      console.log(result.user);
      toast.success('Logout  success')
      navigate('/')
  })
     .catch()
   }
   const [startDate, setStartDate] = useState(new Date());
   const { register, handleSubmit } = useForm({
      // defaultValues:{
      //    date: null as Dayjs | null
      // }
   })
   const onSubmit = async (data) => {


      const request = {
         title: data.title,
         description: data.description,
         priority: data.priority,
         date: startDate,
         email:user?.email
      }
      console.log(request);
      // send data to the server
      fetch('http://localhost:5000/addtask', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(request)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            toast.success('Success Your Submission')
          }
        })
   }
   return (
      <div className="flex">
         {/* dashboard side bar */}
         <div className="w-60 h-screen bg-white">
            <ul className="menu p-4">
               {
                  // User dashbord
                  <>
                     <h1 className="p-5 text-2xl font-bold">DashBoard</h1>
                     <img className="rounded-2xl" src={user?.photoURL} alt="" />
                     <h1 className="text-gray-800 font-semibold text-xl mt-5">User Name:{user?.displayName}</h1>
                     <button onClick={handlelogout} className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">Log Out</button>
                  </>
               }
            </ul>
         </div>
         {/* dashboard content */}
         <div className="flex-1 bg-gradient-to-r from-violet-300 to-fuchsia-300">

            <div>
               <div className="flex justify-between w-3/5 mx-auto my-5">
                  <h1 className="text-2xl font-bold text-white">Task Management</h1>
                  {/* <div>
                     {/* You can open the modal using document.getElementById('ID').showModal() method */}

                  <button className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500" onClick={() => document.getElementById('my_modal_2').showModal()}>Add Task</button>
                  <dialog id="my_modal_2" className="modal">
                     <div className="modal-box">
                        <h3 className="font-bold text-lg">Create Your New Task</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           {/* if there is a button in form, it will close the modal */}
                           {/* 1st input */}
                           <div className="relative z-0 w-full mb-5 group mt-2">
                              <input {...register('title')} type="text" name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                           </div>
                           <div>
                              <label className="form-control">
                                 <div className="label">
                                    <span className="label-text">description</span>
                                 </div>
                                 <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                              </label>
                           </div>
                           <div className="relative z-0 w-full mb-5 group mt-4">
                              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">deadlines</label>
                              <ReactDatePicker className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" selected={startDate} onChange={(date) => setStartDate(date)} />
                           </div>
                           {/* prority */}
                           <div>
                              <label className="form-control w-full">
                                 <div className="label">
                                    <span className="label-text">Priority</span>
                                 </div>
                                 <select {...register('priority')} name="priority" className="select select-bordered">
                                    <option disabled selected>Priority</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                 </select>
                              </label>
                              <div className="float-end">
                                 {/* <input className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500" type="submit" value="Add" /> */}
                                 <button className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">Add</button>
                              </div>
                           </div>
                        </form>
                     </div>
                     <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                     </form>
                  </dialog>
               </div>
               <ul className="menu p-4 flex flex-row ">
                  <div>
                     <li> See Previous Task</li>
                     <p>this is previous task management</p>
                  </div>
                  <li> <NavLink to={'/dashboard/profile'}> To Do  Task</NavLink></li>
                  <li> <NavLink to={'/dashboard/profile'}> Ongoing Task</NavLink></li>
                  <li> <NavLink to={'/dashboard/profile'}> Completed Task</NavLink></li>
               </ul>
               <div>
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
      </div>
   )
}
export default DashBoard;