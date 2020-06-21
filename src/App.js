import React from 'react';
import './App.css';
import MainBody from './components/MainBody.js';

import SidePage from './components/SidePage.js';

function App() {

  // states
  const [activityList, setActivity] = React.useState([]);
  const [activityCounter, setCounter] = React.useState(9);
  const [activityTime, setTime] = React.useState('9.00am');

  //after a button is pressed, add an activity to the schedule
  function activityRequest(name) {

    if (activityCounter > 23) {
      return;
    }
    setActivity([...activityList, { activity: name, time: activityTime }]);
    if (activityCounter === 23) {
      setActivity([...activityList, { activity: name, time: activityTime }, { activity: 'Go to Bed', time: '12.00am' }]);
    }
    setCounter(activityCounter + 1);
    setTime(() => {
      let time = activityCounter + 1;
      let extension = 'am'
      if (time >= 12) {
        extension = "pm";
      }
      if (time > 12) {
        time -= 12;
      }

      return (`${time}.00${extension}`)
    })
  }

  function restartRequest() {
    setActivity([]);
    setCounter(9);
    setTime('9.00am');
  }

  return (
    <div className="App">
      <MainBody activityRequest={activityRequest} />
      <SidePage restartRequest={restartRequest} activities={activityList} />
    </div>
  );
}

export default App;
