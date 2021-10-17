import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Mainpage from './Containers/Mainpage';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import Cheackout from './Components/Checkout/Checkout';
import { auth } from './Components/Checkout/firebase';
import { useStateValue } from './stateprovider';
import { useEffect } from 'react';



function App() {
  const [{LogedInUser},dispatch]=useStateValue();
  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((userauth)=>{
      if(userauth){
        dispatch({type:"set_logIn",
        user:userauth
          
        })
      }else{
        dispatch({type:"set_logIn",
        user:null
      })
    }
  })
  return()=>{
    unsubscribe();
  }
  },[])
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/checkout">
        <Header/>
        <Cheackout/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
        <Mainpage/>
      </Route>
    </Switch>
  </BrowserRouter>
   
  );
}

export default App ;
