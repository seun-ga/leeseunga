import React,{Component} from 'react';
import NextButton from './next_icon.jpg';
import PreviousButton from './previous_icon.jpg';


class Content extends Component{
  
  render(){
    var title=this.props.title;
    if(this.props.inHome){
    
      return(
        <div>
        <header className="title-up">
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        </header>
        
      <div className="wrapper">
     
        <div className="main-image">
      
        <img src={this.props.main_photo}/>

        </div>
      
        <div className="contents-wrapper">

        <div className="desc-title">
          {this.props.title}    
        </div>
        <div className="desc-detail">
          {this.props.desc}    
        </div>
        </div>
      </div>
     
        <div className="nextButton">
        <a onClick={function(e){
                    e.preventDefault();
                    this.props.nextPage();
                  }.bind(this)}>
                  🔜
                  </a>
        </div>


        <div className="previousButton">           
        <a onClick={function(e){
          e.preventDefault();
          this.props.previousPage();
        }.bind(this)}>
       🔙
        </a>
        </div>

        <footer className="title-down">
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        </footer>

        </div>);
    }else{
        return(<div></div>);
      }
  }
}


export default Content;