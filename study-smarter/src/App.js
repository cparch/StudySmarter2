import React from 'react';
import './App.css';
import AddStudySession from './AddStudySession.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={classes:[
      {
        classTitle: "Psychology101",
        tests: [
          {tests: [
            {"psych week 1"},
        ]

      },
      {classTitle: "History101"},
      {classTitle: "test1"},
      {classTitle: "test2"},
      {classTitle: "test3"},
      ],
    }
  }
  render(){
    return (
      <div>
        <AddStudySession classes={this.state.classes}/>
      </div>
    );
  }
}

export default App;
