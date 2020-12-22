import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

const Avatar = (props) => {
  return( <div>
            <h1>Welcome in React tutorial</h1>
            <Avatarlist id="1" Name="Chandan gupta" Work="Senior Engineer"/>
            <Avatarlist id="1" Name="Rohit gupta" Work="Software Engineer"/>
            <Avatarlist id="1" Name="Komal gupta" Work="Software Engineer"/>
            <Avatarlist id="1" Name="Isha Gupta" Work="Software Engineer"/>
            <button> Subscribe </button>
          </div>
  )
}
export default Avatar;