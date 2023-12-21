import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";

const DashBoard = () => {
    return(
        <div className="flex">
        {/* dashboard side bar */}
         <div className="w-60 h-screen bg-green-500">
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
         <div className="flex-1">
          
            <div>
            <ul className="menu p-4 flex flex-row bg-yellow-300">
          <li> <NavLink to={'/dashboard/enrollClass'}>Create Task</NavLink> </li>
          <li> <NavLink to={'/dashboard/profile'}>See Previous Task</NavLink></li>
          <li> <NavLink to={'/dashboard/profile'}> To Do  Task</NavLink></li>
          <li> <NavLink to={'/dashboard/profile'}> Ongoing Task</NavLink></li>
          <li> <NavLink to={'/dashboard/profile'}> Completed Task</NavLink></li>
          
          </ul>
            </div>
         </div>
    </div>
    )}
export default DashBoard;