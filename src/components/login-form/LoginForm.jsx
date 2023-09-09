import React, { useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setProfileImage, clearUserInfo } from "../../store/addUserInfoSlice";
import "./loginform.scss";
import Categories from "../categories/Categories";
import placeholderProfilePic from "../../assets/images/userplaceholder.png"
import alertSwal from "../../helpers/messages";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState("");
  const [profileImage, setProfileImageLocal] = useState("");

  const store = useSelector((state) => state.addUserInfo);
  console.log(store);
  const dispatch = useDispatch();

  const handleName = (e) => {
    setUserInfo(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImageLocal(event.target.result);
      };
      reader.readAsDataURL(file);
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(userInfo === "" ){
      alertSwal("error","Error","Please enter a username");
    }

    dispatch(setUserName(userInfo));
    dispatch(setProfileImage(profileImage)); 
    setProfileImageLocal("");
    setUserInfo("");
  };

  const handleDeleteAccount = () => {
    dispatch(clearUserInfo())
  }
  

  return (
    <div className="login-form glass">
          
            <div className="login-form-top">
              <div className="profile-image-box">
                {
                  store.profileImage ? 
                  <img src={store.profileImage} alt="" /> : 
                  <img src={placeholderProfilePic} alt="" /> 
                }
              </div>
              {
                !store.profileImage && !store.userName && <input
                className="image-upload-btn"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              /> 
              }
              
                <span>Welcome<span>{store.userName ? store.userName : "user"}</span></span>
              
            </div>
            {
              store.userName && <Categories/>
            }
            
            <Form onSubmit={handleSubmit}>
              {
                !store.userName && <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={handleName}
                /> 
            }
            {
                !store.userName && <Button type="submit" className="w-50 mt-5 mx-auto">
                LOGIN
              </Button>
            }
              
              {
                store.userName && <Button type="submit" className="w-50 mt-5 mx-auto delete-button">Delete Account</Button>
              }
            </Form>
          
    </div>
  );
};

export default LoginForm;
