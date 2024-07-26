import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
  <div className='text-center'>

            
<div className="list-group">
<h3>Admin Panel</h3>
<NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action" aria-current="true">
    Categories
  </NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Products</NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action"> All Users</NavLink>
  

  
 
</div>
  </div>



    </>
  )
}

export default AdminMenu