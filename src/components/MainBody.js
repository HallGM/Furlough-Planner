import React from 'react';
import '../App.css';
import Header from './Header.js';
import Room from './Room.js';

function MainBody(props) {

  const [currentRoom, setRoom] = React.useState('none');

  function activityRequest(name) {
    props.activityRequest(name);
  }

  function changeRoomRequest(roomName) {
    setRoom(roomName);
  }

  return (
    <div className='main-body'>
      <Header changeRoomRequest={changeRoomRequest} />
      <Room roomName={currentRoom} activityRequest={activityRequest} />
    </div>
  )
}

export default MainBody;