
import 'rc-time-picker/assets/index.css';

import React from 'react';
import TimePicker from 'rc-time-picker';

 const TimeSelector = (props) => {
  return (
    <div>
      <TimePicker
        value = {props.TimeValue}
        onChange={props.timeHandler}
        showSecond={false}
        use12Hours
      />
    </div>
  );
}

export default TimeSelector;