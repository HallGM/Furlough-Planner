import React from 'react';
import '../App.css';
import paperBackground from '../images/paper.jpg';

function SidePage(props) {

  function restartRequest() {
    props.restartRequest();
  }

  return (
    <div className="side-page" style={{ backgroundImage: `url(${paperBackground})` }}>
      <h2> Today's Schedule... </h2>
      <div><strong>8.00am:</strong> Wake Up</div>
      {props.activities.map((activity) =>
        <div key={activity.time}> <strong>{activity.time}:
        </strong> {activity.activity}</div>
      )}
      <StartAgainButton restartRequest={restartRequest} activities={props.activities} />
    </div>
  )
}

function StartAgainButton(props) {

  function onClick() {
    props.restartRequest();
  }

  if (props.activities[props.activities.length - 1]) {
    if ((props.activities[props.activities.length - 1].time) === "12.00am") {
      return (
        <button onClick={onClick}>Start Again?</button>
      )
    } else { return null }
  } else { return null }
}


export default SidePage;