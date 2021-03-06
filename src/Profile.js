// import React from 'react'
// import PropTypes from "prop-types";



// //File

// const Profile = (props) => {

//     return (
//         <div>
//             <img src={props.children} alt="this is the name" />
//             <h1>{props.fullName}</h1>
//             <h1>{props.bio} </h1>
//             <h1>{props.profession} </h1>
//             <button onClick={(e) => handleName(e,props.fullName)} > Click me {props.fullName} </button>
//         </div>
//     )
// }

// function handleName(e , parameter) {
//     alert(`hi there ${parameter}`)
// }

// Profile.defaultProps = {
//     fullName:'isa Haji',
//     bio: 'dev',
//     profession:'dev',
//     children: 'logo'
// }

// Profile.propTypes = {
//     fullName: PropTypes.string,
//     bio: PropTypes.string,
//     profession:PropTypes.string,
//     children: PropTypes.any

// }

// export default Profile

import React from 'react';
import logo from './logo.svg';


function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div>
            <img src={logo} alt="this is the name" />
            <h1>Isa</h1>
            <h1>React </h1>
            <h1>DEV </h1>
        </div>
  );
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}


export default Profile


// Added Clock Function on Clock.js