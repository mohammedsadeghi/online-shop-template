import React, { Component } from 'react';
import Header from '../Components/Header';
import Classes from './Mainpage.module.css';
import Product from './Product/Product';
import IMG from '../Assets/home-page-bcg.jpg'
import Footer from '../Components/Footer/Footer'

class Mainpage extends Component{



    render(){
        return(
            <div>
                <Header/>
                <div className={Classes.Home}>
                    
                    <div className={Classes.Home_image}>
                        <img className={Classes.Home_image} alt="banner" src={IMG}/>
                    </div>
                    <div className={Classes.p_row}>
                        <Product id='121314'
                        price={12}
                        title={"lorem ipsum"}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"} /> 
                        <Product id='121314'
                        price={12}
                        title={"lorem ipsum"}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"} />
                        <Product id='121314'
                        price={12}
                        title={"lorem ipsum"}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"} /> 
                        <Product id='121314'
                        price={12}
                        title={"lorem ipsum"}
                        rating={4}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"} />  
                    
                    </div>
                    <div className={Classes.p_row}>
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"} /> 
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"} />
                        
                    </div>
                    <div className={Classes.p_row}>
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"} /> 
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"} />
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"} />
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"} />
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"} />
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"} />
                        
                    </div>
                    <div className={Classes.p_row}>
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"} /> 
                        <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"} />
                         <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"} /> 
                         <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"} /> 
                         <Product id='456789'
                        price={800}
                        title={"lorem ipsum dorem"}
                        rating={2}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"} /> 
                        
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Mainpage;