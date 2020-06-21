import React from 'react';
import '../App.css';

const roomList = ['Living Room', 'Kitchen', 'Office', 'Outside'];

function Header(props) {

  function changeRoomRequest(roomName) {
    props.changeRoomRequest(roomName);
  }

  return (
    <div id='header'>
      <h1>Furlough Planner</h1>
      <div id="navbar">
        {roomList.map((room) => <MenuButton key={room} roomName={room} changeRoomRequest={changeRoomRequest} />)}
      </div>
    </div>
  )
}

function MenuButton(props) {

  function onClick() {
    props.changeRoomRequest(props.roomName);
  }

  return (<button onClick={onClick} className="menu-item">{props.roomName}</button>)
}

export default Header;