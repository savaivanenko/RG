import React from 'react'; 
import Header from './components/header/Header';
import Main from './components/main/Main';


import './style.scss'

export default class App extends React.Component {
 
  render(){
 
    return (
      <div>
       <Header/>
       <Main/>
      </div>
    )
  }  
}
