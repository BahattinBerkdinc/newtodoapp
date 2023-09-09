import React from 'react'
import "./pagecategories.scss"
import { Link } from 'react-router-dom'
const PageCategories = () => {
  return (
    <div className='page-categories'>
     <Link to={"/personal-todos"}>
     <div className="page-personel-category">
        <span>12 Tasks</span>
        <div>
        <img src={require("../../assets/images/personaltodos.png")} alt="" />
        <span>personal TODO's</span>
        </div>
      </div>
     </Link>
     <Link to={"/bussiness-todos"}>
     <div className="page-bussiness-category">
      <span>12 Tasks</span>
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
