import React from 'react'
import "./categories.scss"
import { Link } from 'react-router-dom'
const Categories = () => {

  

  return (
    <div className='categories'>
      <Link to={"/bussiness-todos"}>
      <div className="bussiness">
        <img src={require("../../assets/images/bussinesstodo.png")} alt="" />
      <span>Bussiness TODO's</span>
      </div>
      </Link>
      
      <div className="line"></div>
     <Link to={"/personal-todos"}>
     <div className="personal">
        <img src={require("../../assets/images/personaltodos.png")} alt="" />
      <span>personal TODO's</span>
      </div>
     </Link>
    </div>
  )
}

export default Categories
