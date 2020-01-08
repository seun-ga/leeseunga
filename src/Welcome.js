import React,{Component} from 'react';




class Welcome extends Component{
  render(){ 
      
    if(!this.props.inHome){
        return(
         
      <div>
               
        <a onClick={function(e){
          e.preventDefault();
          this.props.goHome();
        }.bind(this)}> 
        <div className="project">
         </div> </a>   

        <div className="email-web">✉️ soph2218@gmail.com</div>
        <div className="about-web">
        <div className="name"> Lee Seung-A</div>
        
          <div className="resume">
          <br></br>
            <p>Work</p>
            <p>2019–Present, Tissueoffice, product design for various clients  </p>
            <p> 2019, Nolgong, Game Design, Seoul</p>
            <p>2016, Smartlab, UI design, Daejeon </p>
            <br></br>
            <p>Academy</p>
            <p>2016~ KAIST Industrial design</p>
            <p>2017.03~06 Seoul National University, Sculpture, Exchange program</p>
            <p>2018.07~11 Royal Melbourne institute of technology, Industrial design, Exchange program</p>
            </div>
            
        </div>
        
        <div className="email-mobile"> ✉️ soph2218@gmail.com</div>
        <div className="about-mobile">
        <div className="name"> Lee Seung-A</div>
        <div className="resume">
          <br></br>
          <p>Work</p>
          <p>2019–Present <br></br> Tissueoffice, product design for various clients  </p>
          <p> 2019<br></br>  Nolgong, Game Design, Seoul</p>
          <p>2016<br></br>  Smartlab, UI design, Daejeon </p>
          <br></br>
          <p>Academy</p>
          <p>2016~ <br></br>KAIST Industrial design</p>
          <p>2017.03~06<br></br>Seoul National University, Sculpture, Exchange program</p>
          <p>2018.07~11<br></br>Royal Melbourne institute of technology, Industrial design, Exchange program</p>
          </div>
   
      </div>
        

</div>
       
        );
    }else{
      return(<div></div>);

    }
     
       
      }
 }
/*

kebab-case
camelCase
snake_case
PascalCase

*/

export default Welcome;