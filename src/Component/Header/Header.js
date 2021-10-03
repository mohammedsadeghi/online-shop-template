import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../Assets/images/index.jpeg';
import Classes from "./Header.module.css";
import Scart from '@material-ui/icons/ShoppingBasket';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Header =(props)=>{

    return(
        
            
        
        
<nav style={{justifyContent:"space-between",display:"flex",width:"100%"}} className="navbar navbar-expand-md navbar-light bg-secondary">

  <a className="navbar-brand" href="#!" style={{marginRight:"5%"}}>
    <img src={Logo} height="30" alt="mdb logo"/>
  </a>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav11">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <ul  style={{marginRight:"5%",display:"flex",justifyContent:"space-between",width:"20rem",alignItems:"stretch",listStyleType: "none"}}>
    <li 
     style={{border:"1px solid white",borderRadius:"15%",paddingLeft:"1%",paddingRight:"2%",backgroundColor:"#ccc"}}>
         <a className={Classes.link} href="#!">Home</a></li>
    <li 
     style={{border:"1px solid white",borderRadius:"15%",paddingLeft:"1%",paddingRight:"2%",backgroundColor:"#ccc"}}>
         <a className="waves-effect" href="#!">about us</a></li>
    
  </ul>
  

  <div className="collapse navbar-collapse" >

    <ul className="navbar-nav ml-auto" style={{display:"flex",justifyContent:"flex-end",width:"100%",marginRight:"1em"}}>
      <li className="nav-item"style={{marginRight:"5%"}}>
        <a href="#!" className="nav-link navbar-link-2 waves-effect">
          <span className="badge badge-pill red">{props.number}</span>
          <Scart></Scart>
        </a>
      </li>
      <li className="nav-item dropdown"style={{marginRight:"5%"}}>
        <a className="nav-link dropdown-toggle waves-effect" href="#!"id="navbarDropdownMenuLink3" data-toggle="dropdown"
           aria-expanded="true">
          <BookmarkIcon></BookmarkIcon>
        </a>
        
      </li>
      <li className="nav-item">
        <a href="#!" className="nav-link waves-effect">
          Shop
        </a>
      </li>
      <li className="nav-item">
        <a href="#!" className="nav-link waves-effect">
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a href="#!" className="nav-link waves-effect btn-md btn-rounded btn-navbar">
          Sign in
        </a>
      </li>
      <li className="nav-item pl-2 mb-2 mb-md-0">
        <a href="#!" type="button"
          className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-green">Sign up</a>
      </li>
    </ul>

  </div>
  

</nav>

       
                    
                    
                
            
        
    )
}
export default Header;