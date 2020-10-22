
import React,{Component} from 'react';
import './App.css';
import Welcome from "./Welcome";
import Content from "./Content";

import MissionOffice from './img/mars.jpg';
import Gudpan from './img/gudpan_main.jpg';
import Overthinking from './img/overthinking_main.jpg';
import Louis from './img/louis.jpg';
import SighConverter from './img/sighconverter.jpg';
import Stuck from './img/stuck.jpg';



class App extends Component{
  constructor(props){
    super(props);
  }

  state={
    mode : 'welcome',
    selected_content_id: 1,
    selected_photo_id: 1,
    welcome : {comment : 'Welcome'},
    home : {title : 'Welcome' },
    
    category :[
      {
      id:1  ,
      title : 'Mission!office, Openworld Game, 2019', 
      desc :'Mission!office is 3D openworldGame which is developed to introduce "tissueoffice". You cand find various product, building and books made by tissue office', 
     main_photo:MissionOffice
      },

      {
        id:2,
        title : 'Gudpan, Interactive Game, 2017',
        desc :'Gudpan is an interactive game for people whose lives are not going well. Shake bells and fans, kill evil spirits and spread out their fortunes.',
        main_photo:Gudpan
       
      },
      {
        id:3,
        title : 'Overthinking, 3D illustration & Design, 2019',
         desc :'Participated in the album and essay book Overthinking of Cocopelli as a 3D illustration. Through the concept of protein isomer in biochemistry, overthinking was newly interpreted by tissueoffice.',
         main_photo:Overthinking
        },
      {
        id:4,
        title : 'Stuck, Openworld Game, 2018',
         desc :'This Game is about hard life in university. Main character have to face lots of assignment, lecture, quiz to survive in the game. Situation get harder and harder. Actually lots of students in South Korea live like this, because there are too many competitions and surrounding pressure. They get stressed a lot from study, but they have to get through all obstacles to get success. We wanted to make player stressful from experiencing this life, but in more enjoyable way.',
         main_photo:Stuck

        },
      
      {
        id:5,
        title : 'Sigh converter, speculative product, 2017',
          desc :'  This device is for person in hard mental condition. When user sigh, the fan operates and fill the mask with selected scent. User can inhale the scent and relax.',
          main_photo:SighConverter
        }
    ]
    

  }
  
  render(){
    //new CircleType(document.getElementById('circle_text'));
    // {
    //   id:5,
    //   title : 'LOUIS, speculative product, 2017',
    //     desc :'Louis produced the personalized chips based on the questionnaire received from customer Y, and added them to "The Memory" Each time a button is pressed, the chips turn on the rotating and touch the wrist with a smooth feeling or pain.',
    //     main_photo:Louis

    //   },
    var _descDetail,_descTitle,_main_photo= null;
    var _data=[];
    var _inHome=false;
    var _logo=this.state.home.title;
   
    
    if(this.state.mode=='welcome'){
      
    }else if (this.state.mode=='home'){
      var i=0;
      _inHome=true;
      _data=this.state.category;
      //_deskTitle과 _deskDetail에 정보를 채워넣음
      while(i<this.state.category.length){
       var selectedData=this.state.category[i];
     // var selectedphotoId=this.state.selected_photo_id;
      if(selectedData.id==this.state.selected_content_id){
      _descTitle=selectedData.title;
      _descDetail=selectedData.desc;
      _main_photo=selectedData.main_photo;
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
        main_photo={_main_photo}
        
        nextPage={
          function(){
            if(this.state.selected_content_id<this.state.category.length){
            this.setState({
              selected_content_id: this.state.selected_content_id+1
            })}else{this.setState({selected_content_id:1})
            }       
          }.bind(this)
        }

          previousPage={
            function(){
              if(this.state.selected_content_id>1){
              this.setState({
                selected_content_id: this.state.selected_content_id-1
              })}else{this.setState({selected_content_id:this.state.category.length})
              }       
            }.bind(this)
          }
          goWelcome={
            function(){
              this.setState({
                mode: 'welcome' ,
              selected_content_id:1 })
            }.bind(this)}          
        >
      </Content>
      
      <Welcome inHome={_inHome} 
      logo={_logo}
        goHome={
          function(){
            this.setState({
              mode: 'home' ,
            selected_content_id:1})
          }.bind(this)}
        >
      </Welcome> 
      
      </div>

     );

  }
}

export default App;