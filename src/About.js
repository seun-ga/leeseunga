import React,{Component} from 'react';


class About extends Component{
  
  render(){
   
    if(this.props.inHome){
    
      return(

      <div className="wrapper">

      <div className="text-wrapper">
        <div className="desc-title">
          {this.props.title}    
        </div>
        <div className="desc-detail">
          {this.props.desc}    
        </div>
      </div>

      </div>
      
    
      );
    }else{
        return(<div></div>);
      }
  }
}


export default About;