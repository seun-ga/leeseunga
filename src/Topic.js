import React,{Component} from 'react';

class Topic extends Component{
  render(){
    
    return(
      <header>
      <h1>
      <a href="/" onClick={
        function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)

      }>
        {this.props.title}   

      </a>
      </h1>
       </header>

    );

  }
}

export default Topic;