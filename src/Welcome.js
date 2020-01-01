import React,{Component} from 'react';




class Welcome extends Component{
  render(){ 
    

      if(this.props.inHome){
        return(
          <div className="logo">
      
          <a onClick={function(e){
            e.preventDefault();
            this.props.goWelcome();
          }.bind(this)}>🏠</a>
          
          </div>
        );
      }else{
        return(
      <div>
       
       
       <a onClick={function(e){
         e.preventDefault();
         this.props.goHome();
       }.bind(this)}> <div className="project"></div></a>
     


      
       <div className="about">
       <div className="name"> Lee Seung-A</div>
       <div className="email"> soph2218@gmail.com</div>
       
       
       <br></br>
        <p>Academy</p>
        <p>2016~ KAIST Industrial design</p>
        <p>2017.03~06 Seoul National University, Sculpture, Exchange program</p>
        <p>2018.07~11 Royal Melbourne institute of technology, Industrial design, Exchange program</p>
        <br></br>

        <p>Work</p>
        <p>2019–Present, Tissueoffice, product design for various clients  </p>
        <p> 2019, Nolgong, Game Design, Seoul</p>
        <p>2016, Smartlab, UI design, Daejeon </p>
       
  

       </div>
      
       </div>

        );}
     
       
      }
 }
/*

kebab-case
camelCase
snake_case
PascalCase

*/

export default Welcome;