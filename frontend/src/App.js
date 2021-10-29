import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SnackBar from './components/common/SnackBar';
import Home from './components/home/home';
import { Container } from '@material-ui/core';

function App() {
  const oSnackBar = React.createRef();
  let openSnackBar = (message)=>{
    if(oSnackBar.current){
      oSnackBar.current.openSnackBar(message)
    }
  }
  let closeSnackBar = () => {
    if(oSnackBar.current){
      oSnackBar.current.closeSnackBar();
    }
  }
  return (
    <div className="App">
      <Container>
        <Route exact path='/' render={(props)=><Home openSnackBar={openSnackBar} {...props}/> } />
      </Container>
    </div>
  );
}

export default App;