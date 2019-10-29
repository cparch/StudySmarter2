import React from 'react';
import './App.css';
import AddStudySession from './AddStudySession.js';
import AddClass from './AddClass.js';
import AddTest from './AddTest';
import Nav from './Nav.js';

import moment from 'moment';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      classes:[
        {
          classTitle: "Psychology101",
          test:[
            {
              testName: 'psychT1',
              studySession: [],
            },
            {
              testName: 'psychT2',
              studySession: [],
            }
          ]
        },
        {
          classTitle: "History101",
          test: [
            {
              testName: 'histT1',
              studySession: [],
            },
            {
              testName: 'histT2',
              studySession: [],
            },
          ],
        },
      ],
      selectedClass: 0,
      selectedTest: 0,
      startTimeValue: moment(),
      SelectedStartTimeValue: '',
      endTimeValue: moment(),
      SelectedEndTimeValue: '',
      notes: '',
      classNameToAdd: '',
      testNameToAdd: '',
    }

    this.FormHandler = this.FormHandler.bind(this);
    this.handleStudySessionStartTime = this.handleStudySessionStartTime.bind(this);
    this.handleStudySessionEndTime = this.handleStudySessionEndTime.bind(this);
    this.addStudySessionSubmitBtnHandler = this.addStudySessionSubmitBtnHandler.bind(this);
    this.AddClassSubitBtnHandler = this.AddClassSubitBtnHandler.bind(this);
    this.AddTestSubmitBtnHandler = this.AddTestSubmitBtnHandler.bind(this);
  }

  AddTestSubmitBtnHandler = (event) => {
    event.preventDefault();
    let updateClasses = this.state.classes;

    updateClasses[this.state.selectedClass].test.push({
      testName: this.state.testNameToAdd,
      studySession: [],
    })

    this.setState({
      classes: updateClasses,
      testNameToAdd: '',
    })
  };

  AddClassSubitBtnHandler = (event) => {
    event.preventDefault();
    const updateClasses = [...this.state.classes];
    updateClasses.push({
      classTitle: this.state.classNameToAdd,
      test:[],
    })

    this.setState({
      classes: updateClasses,
      classNameToAdd: ''
    })
  }

  FormHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleStudySessionStartTime = value => {
    this.setState({ 
      startTimeValue: value,
      // [value.target.name]: value,
      SelectedStartTimeValue: value && value.format('HH:mm')
    });
  }  

  handleStudySessionEndTime = value => {
    this.setState({ 
      endTimeValue: value,
      // [value.target.name]: value,
      SelectedEndTimeValue: value && value.format('HH:mm')
    });
  } 
  
  addStudySessionSubmitBtnHandler = (event) => {
    event.preventDefault();
    const updateClasses = [...this.state.classes];
    updateClasses[this.state.selectedClass].test[this.state.selectedTest].studySession.push({
      studySessionNum: updateClasses[this.state.selectedClass].test[this.state.selectedTest].studySession.length,
      startTime: this.state.SelectedStartTimeValue,
      endTime: this.state.SelectedEndTimeValue,
      notes: this.state.notes
    })

    this.setState({
      classes: updateClasses
    })
  }

  render(){
    return (

        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route 
                path='/addstudysession' 
                render={(props) => 
                  <AddStudySession 
                    {...props}
                    classes={this.state.classes}
                    tests={this.state.classes[this.state.selectedClass].test}
                    startTimeValue={this.state.startTimeValue}
                    endTimeValue={this.state.endTimeValue}
                    handleStudySessionStartTime={this.handleStudySessionStartTime}
                    handleStudySessionEndTime={this.handleStudySessionEndTime}
                    FormHandler={this.FormHandler}
                    addStudySessionSubmitBtnHandler={this.addStudySessionSubmitBtnHandler}
                  />
                }
              />

              <Route
                path='/addclass'
                render={(props) => 
                  <AddClass
                    {...props}
                    FormHandler={this.FormHandler}
                    AddClassSubitBtnHandler={this.AddClassSubitBtnHandler}
                    classNameToAdd = {this.state.classNameToAdd}
                  />
                }
              />

              <Route
                path='/addtest'
                render={(props) =>
                  <AddTest
                    {...props}
                    classes={this.state.classes}
                    testNameToAdd={this.state.testNameToAdd}
                    FormHandler={this.FormHandler}
                    AddTestSubmitBtnHandler={this.AddTestSubmitBtnHandler}
                  />
                }
              />
            </Switch>
          </div> 
        </BrowserRouter>
    );
  }
}

export default App;
