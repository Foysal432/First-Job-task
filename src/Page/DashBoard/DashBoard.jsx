import { NavLink, Outlet } from "react-router-dom";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";

const DashBoard = () => {
   return (
      <div className="flex">
         {/* dashboard side bar */}
         <div className="w-60 h-screen bg-white">
            <ul className="menu p-4">
               {
                  // User dashbord
                  <>
                     <h1 className="p-5 text-2xl font-bold">DashBoard</h1>
                     <li> <NavLink to={'/dashboard/enrollClass'}> <BiPurchaseTag /> My enroll class</NavLink> </li>
                     <li> <NavLink to={'/dashboard/profile'}> <GiPlagueDoctorProfile /> Profile</NavLink></li>
                  </>
               }
            </ul>
         </div>
         {/* dashboard content */}
         <div className="flex-1 bg-gradient-to-r from-violet-300 to-fuchsia-300">

            <div>
               <div className="flex justify-between w-3/5 mx-auto my-5">
                  <h1 className="text-2xl font-bold text-white">Task Management</h1>
                  <div>
                     {/* You can open the modal using document.getElementById('ID').showModal() method */}
                     <button className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Task</button>
                     <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                           <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                           </form>
                           <h3 className="font-bold text-lg">Create Your New Task</h3>
                           {/* 1st input */}
                           <div className="relative z-0 w-full mb-5 group mt-2">
                              <input type="text" name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                           </div>
                           <div>
                              <label className="form-control">
                                 <div className="label">
                                    <span className="label-text">description</span>
                                 </div>
                                 <textarea className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                              </label>
                           </div>
                           <div className="relative z-0 w-full mb-5 group mt-4">
                              <input type="date" name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">deadlines</label>
                           </div>
                           {/* prority */}
                           <div>
                              <label className="form-control w-full">
                                 <div className="label">
                                    <span className="label-text">Priority</span>
                                    
                                 </div>
                                 <select className="select select-bordered">
                                    <option disabled selected>Priority</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                 </select>
                              </label>
                           </div>
                        </div>
                     </dialog>
                  </div>
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