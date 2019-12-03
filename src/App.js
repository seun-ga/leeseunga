import React,{Component} from 'react';
import './App.css';
//import Subject from "./Subject";
import Topic from "./Topic";
import Project from "./Project";

//import { directive } from '@babel/types';


class App extends Component{
  constructor(props){
    super(props);
    
    this.state={
      mode : 'welcome',
      topic : {title : 'WELCOME', ongoing : 'Follow the lead' },
      contents :[
        {id:1 , title : 'HTML', desc :'html is for information'},
        {id:2 , title : 'CSS', desc :'html is for information'},
        {id:3 , title : 'JS', desc :'html is for interactive'}
      ]

    }

  }

  render(){
    var _title = null;
    if(this.state.mode=='welcome'){
      _title=this.state.topic.title;
    }else if (this.state.mode=='ongoing'){
      _title=this.state.topic.ongoing;
    } 
    
    return(
      <div className ="APP">
       
        <Topic title = {_title}   
        onChangePage={function(){
        this.setState({mode:'ongoing'});
        }.bind(this)}> 

        </Topic>  
        <Project data={this.state.contents}>
        </Project>

      </div>
    );

  }
}

export default App;
