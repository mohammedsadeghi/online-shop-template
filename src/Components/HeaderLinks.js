import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Classes from './HeaderLinks.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';



class HeaderLinks extends Component{
    
     state={
         location:''
     }
    
        
    
   
    
    render()
    {    
        // const e=fetch("https://ipinfo.io/json?token=34436699c55a7d").then(
        //     (response) => response.json()
        //   ).then(
        //     (jsonResponse) => {this.setState({location:jsonResponse.country})}
        //   )
        
        
        return(
            <div className={Classes.HeaderLinks}>
                <div className={Classes.HeaderLinks_outer}>
                    <div className={Classes.HeaderLinks_locatin}>
                        
                        <Link>
                            {/* {this.state.location} */}
                            <LocationOnIcon/>

                        </Link>
                        
                    </div>
                    <div className={Classes.HeaderLinks_links}>
                        <Link>
                        Links
                        </Link>
                        <Link>
                        Links
                        </Link>
                        <Link>
                        Links
                        </Link>
                        <Link>
                        Links
                        </Link>
                        <Link>
                        Links
                        </Link>
                    </div>
                    <div className={Classes.HeaderLinks_company}>
                        <Link>
                        company name
                        </Link>
                </div>
                </div>
            </div>
        )}
}

export default HeaderLinks;