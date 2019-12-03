

import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
//import Subject from "./Subject";
import Topic from "./Topic";
import Project from "./Project";

import { directive } from '@babel/types';


class App extends Component{
  // constructor(props){
  //   super(props);
    
  //   this.state={
  //     mode : 'welcome',
  //     topic : {title : 'WELCOME', ongoing : 'Follow the lead' },
  //     contents :[
  //       {id:1 , title : 'HTML', desc :'html is for information'},
  //       {id:2 , title : 'CSS', desc :'html is for information'},
  //       {id:3 , title : 'JS', desc :'html is for interactive'}
  //     ]

  //   }

  // }

  render(){
    // var _title = null;
    // if(this.state.mode=='welcome'){
    //   _title=this.state.topic.title;
    // }else if (this.state.mode=='ongoing'){
    //   _title=this.state.topic.ongoing;
    // } 
    
    return(
      <Router>
      <div className ="APP">
        <Route path="/"component={Home}/>

      </div>
      </Router>

    );

  }
}

export default App;

