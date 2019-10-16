import React from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';

const AddStudySession = (props) => {
  const format = 'h:mm a';
  const now = moment().hour(0).minute(0);

  return(
    <div>
      <p>Add Study Session</p>
      <form>
        <label>
          Class Name:
          <select name="testName">
            {/* <option value="Psychology101">Psychology 101</option>
            <option value="History101">History101</option> */}
            {props.classes.map(classes => (
              <option key={classes.classTitle} value={classes.classTitle}>
                {classes.classTitle}
              </option>
            ))}
          </select>
        </label>
        <br></br>
        <br></br>

        <label>
          Test Name:
          <select name="testName">
            <option value="test1">test1</option>
            <option value="test2">test2</option>
          </select>
        </label>
        <br></br>
        <br></br>

        <label>
          Start:
          <TimePicker 
            showSecond={false}
            defaultValue={now}
            className="xxx"
            // onChange={onChange}
            format={format}
            use12Hours
            inputReadOnly
          />
        </label>

        <br></br>
        <br></br>

        <label>
          End:
          <TimePicker 
            showSecond={false}
            defaultValue={now}
            className="xxx"
            // onChange={onChange}
            format={format}
            use12Hours
            inputReadOnly
          />
        </label>

        <br></br>
        <br></br>
        <label>
          Notes:
          <input
            name="notes"
            type="text" 
          />
        </label>
      </form>
    </div>
  )
}

export default AddStudySession;