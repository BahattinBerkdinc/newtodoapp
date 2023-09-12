import React, { useEffect, useState } from 'react'
import "./pagecategories.scss"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PageCategories = () => {



  const storePersonal = useSelector((state) => state.personalTodos);
  const storeBussiness = useSelector((state) => state.bussinessTodos);

  const store = useSelector((state) => state.addUserInfo);






  return (
    <div className='page-categories'>
      <Link to={"/personal-todos"}>
        <div className="page-personel-category">
          <span>{storePersonal.todos.length} Tasks</span>
          <div>
            <img src={require("../../assets/images/personaltodos.png")} alt="" />
            <span>personal TODO's</span>
          </div>
        </div>
      </Link>
      <div className="profile-image-box">
        {
          <img src={store.profileImage} alt="" />
        }
      
      </div>
      <Link to={"/bussiness-todos"}>
        <div className="page-bussiness-category">
          <span>{storeBussiness.todos.length} Tasks</span>
          <div>
            <img src={require("../../assets/images/bussinesstodo.png")} alt="" />
            <span>bussiness TODO's</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PageCategories
