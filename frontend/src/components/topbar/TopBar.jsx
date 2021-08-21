import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import SearchBar from "../search_bar/SearchBar";
import "./topbar.css";

export default function TopBar(props) {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  console.log(user);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const location = useLocation();
  console.log(location.pathname); 

  console.log(props.loca);
  return (
    <>
   {
     user?
   ( <div className="top">
      
      <div className="topLeft">
      <h2>
      Mi Blog
      </h2>
        </div>
        <div className="topCenter">
        <SearchBar/>
        </div>
        <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/">
              My Blogs
            </Link>
          </li>
         
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
     
        </div>
        

        
      {/* <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div> */}
    </div>
    ):
    (<div className="top">      
      <div className="topLeft">
      <h2>
      Mi Blog
      </h2>
      </div>
      <div className="topRight">
      <button className="loginRegisterButton">
      {
        location.pathname=="/login"?(
          <Link className="link" to="/register">
          Register
        </Link>
        ):(
          <Link className="link" to="/login">
          Login
        </Link>
        )
      }
        
      </button> 
      
      </div>
</div>
        )
   }
    </>

  );
}
