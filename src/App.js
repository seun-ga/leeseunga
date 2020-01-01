
import React,{Component} from 'react';
import './App.css';
import Welcome from "./Welcome";
import Content from "./Content";

import MissionOffice from './img/mars.png';
import MissionOffice_sub from './MissionOffice.png';
import Gudpan from './img/gudpan_main.png';
import Gudpan_sub from './img/gudpan_sub.png';
import Overthinking from './img/overthinking_main.jpg';
import Overthinking_sub from './img/stack.jpg';




class App extends Component{
  constructor(props){
    super(props);
  }

  state={
    mode : 'welcome',
    selected_content_id: 1,
  
    welcome : {comment : 'Welcome'},
    home : {title : 'Welcome' },
    about :{title :'About' , desc :'Education'},
    
    category :[
      {
      id:1  ,
      title : 'Mission!office, Openworld Game, 2019', 
      desc :'Mission!office is 3D openworldGame which is developed to introduce "tissueoffice". You cand find various product, building and books made by tissue office', 
     main_photo:MissionOffice,
     sub_photo : MissionOffice_sub
          },

      {
        id:2,
        title : 'Gudpan, Interactive Game, 2017',
        desc :'Gudpan is an interactive game for people whose lives are not going well. Shake bells and fans, kill evil spirits and spread out their fortunes.',
        main_photo:Gudpan,
        sub_photo:Gudpan_sub
      },
      {
        id:3,
        title : 'Overthinking, 3D illustration & Design, 2019',
         desc :'Participated in the album and essay book Overthinking of Cocopelli as a 3D illustration. Through the concept of protein isomer in biochemistry, overthinking was newly interpreted by tissueoffice.',
         main_photo:Overthinking,
         sub_photo:Overthinking_sub
        }
    ]
    

  }
  
  render(){
    //new CircleType(document.getElementById('circle_text'));
    var _descDetail,_descTitle,_sub_photo,_main_photo = null;
    var _data=[];
    var _inHome=false;
    var _logo=this.state.home.title;
    var _about=this.state.about.title;
    
    if(this.state.mode=='welcome'){
      
    }else if (this.state.mode=='home'){
      var i=0;
      _inHome=true;
      _data=this.state.category;
      
      while(i<this.state.category.length){

      var selectedData=this.state.category[i];

      if(selectedData.id==this.state.selected_content_id){
      _descTitle=selectedData.title;
      _descDetail=selectedData.desc;
      _main_photo=selectedData.main_photo;
      _sub_photo=selectedData.sub_photo;
      break;
    }

    i=i+1;
    }
  }
    
    return(

      <div className="APP">
     
      <Content
        inHome={_inHome} 
        title={_descTitle}
        desc={_descDetail}
        sub_photo={_sub_photo} 
        main_photo={_main_photo}
        nextPage={
          function(){
            if(this.state.selected_content_id<this.state.category.length){
            this.setState({
              selected_content_id: this.state.selected_content_id+1
            })}else{this.setState({selected_content_id:1})
            }       
          }.bind(this)}
          previousPage={
            function(){
              if(this.state.selected_content_id>1){
              this.setState({
                selected_content_id: this.state.selected_content_id-1
              })}else{this.setState({selected_content_id:this.state.category.length})
              }       
            }.bind(this)}
          
            
            >
        >
      </Content>
      
      <Welcome inHome={_inHome} 
      logo={_logo}
        goHome={
          function(){
            this.setState({
              mode: 'home' ,
            selected_content_id:1         })
          }.bind(this)}
        goWelcome={
          function(){
            this.setState({
              mode: 'welcome' ,
            selected_content_id:1         })
          }.bind(this)}>
      </Welcome> 
      
      </div>

     );

  }
}

export default App;