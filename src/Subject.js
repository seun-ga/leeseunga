import React,{Component} from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
      <h1>
          {this.props.title}
         </h1>

        {this.props.sub}

         <ul>
           <li>
              <a href="1.html"> HTML </a> 
              <a href="2.html"> CSS </a> 
              <a href="2.html"> JAVA </a>           
         </li>
         </ul>
  </header> 
  

    );

  }
}

export default Subject;