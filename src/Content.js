import React,{Component} from 'react';
import NextButton from './next_icon.png';
import PreviousButton from './previous_icon.png';


class Content extends Component{
  
  render(){
    var title=this.props.title;
    if(this.props.inHome){
    
      return(
        <div>
        <div className="title-up">
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        </div>
        
      <div className="wrapper">
       
        <div className="main-image">
        <img src={this.props.main_photo} />
        </div>
      
        <div className="contents-wrapper">
        <div className="sub-image">
        <img src={this.props.sub_photo} />
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

        <div className="title-down">
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        <div>
        <span> {title} </span> {title} <span> {title} </span>
        </div>
        </div>

        </div>);
    }else{
        return(<div></div>);
      }
  }
}


export default Content;