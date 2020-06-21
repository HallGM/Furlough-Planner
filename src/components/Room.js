import React from 'react';
import '../App.css';
import kitchenBackground from '../images/kitchen.jpg';
import livingRoomBackground from '../images/living-room.jpg';
import officeBackground from '../images/office.jpg';
import outsideBackground from '../images/outside.jpg';

// define an array containing room objects (Hard-coded)
const ROOMS = [
  {
    room: 'Living Room',
    buttons: ['Nap on Couch', 'Play Video Games', 'Read Book', 'Watch TV', 'Dance', 'Yoga'],
    background: livingRoomBackground
  },
  {
    room: 'Kitchen',
    buttons: ['Make Meal', 'Clean', 'Bake a Cake', 'Make Tea'],
    background: kitchenBackground
  },
  {
    room: 'Office',
    buttons: ['Browse Facebook', 'Play Computer Games', 'Workout', 'Read News'],
    background: officeBackground
  },
  {
    room: 'Outside',
    buttons: ['Go for a Walk', 'Go for a Run', 'Go for a Cycle', 'Sunbathe', 'Gardening'],
    background: outsideBackground
  },
  {
    room: 'none',
    buttons: []
  }
]



function Room(props) {

  let roomObject = (ROOMS.filter(object => object.room === props.roomName))[0];

  function activityRequest(name) {
    props.activityRequest(name);
  }

  if (props.roomName === "none") {
    return (
      <p>Please Select a room</p>
    )
  }

  return (
    <div className='room' style={{ backgroundImage: `url(${roomObject.background})` }}>
      <div className="room-container">
        <h2>{props.roomName}</h2>
        {roomObject.buttons.map((thisButton) => <div key={thisButton}><ActivityButton activityRequest={activityRequest} name={thisButton} /></div>)}
      </div>
    </div>
  )
}

function ActivityButton({ name, activityRequest }) {

  function onClick() {
    activityRequest(name);
  }

  return (
    <button className="activity-button" onClick={onClick}>{name}</button>
  )
}

export default Room;