import React from 'react';
import Logo from '../Assets/unnamed.png';
import Classes from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import  Searchicon  from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import  ShoppingBasket  from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../stateprovider';
import HeaderLinks from './HeaderLinks';
import auth from 'firebase';

const Header =(props)=>{



    

   
        const[{basket,LogedInUser},dispatch]=useStateValue();
        console.log('my basket',basket?.length)
        const LogOutUser=()=>{
            if(LogedInUser){auth.signOut().then(()=>{
                console.log("signOut")
            })}
        }
        return(
            <div>
                <nav className={Classes.header}>
                    <img src={Logo} className={Classes.header__logo} alt="Logo"/>
                    <div className={Classes.header__search}>
                        <input type='search' className={Classes.header__searchInput}/>
                        <Searchicon className={Classes.header__searchIcon}/>
                    </div>
                    {/*first link sign or log in */}
                    <div className={Classes.header__nav}>
                        <Link to={!LogedInUser && "/login"} className={Classes.header__link}>
                            <div onClick={()=>LogOutUser()} className={Classes.header__option}>
                                <span className={Classes.header__optionline1}>HI,{LogedInUser?.email}</span>
                                <span className={Classes.header__optionline2}>{LogedInUser?"Sign Out":"SIGN IN OR LOG IN"}</span>

                            </div>
                        </Link>
                        <Link to="/" className={Classes.header__link}>
                            <div className={Classes.header__option}>
                                <span className={Classes.header__optionline1}>returns</span>
                                <span className={Classes.header__optionline2}>orders</span>

                            </div>
                        </Link>
                        
                    </div>
                    <Link className={Classes.header__link} to="/checkout">
                        <div className={Classes.header__optionBasket}>
                            <ShoppingBasket/>
                            <span className={Classes.header__optionline2 , Classes.header__Productcount}>{basket?.length}</span>
                        </div>
                    </Link>
                    
                </nav>
                <HeaderLinks/>
            </div>

        )
    }



export default Header;