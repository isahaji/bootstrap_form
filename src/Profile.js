import React from 'react'
import PropTypes from "prop-types";



//File

const Profile = (props) => {

    return (
        <div>
            <img src={props.children} alt="this is the name" />
            <h1>{props.fullName}</h1>
            <h1>{props.bio} </h1>
            <h1>{props.profession} </h1>
            <button onClick={(e) => handleName(e,props.fullName)} > Click me {props.fullName} </button>
        </div>
    )
}

function handleName(e , parameter) {
    alert(`hi there ${parameter}`)
}

Profile.defaultProps = {
    fullName:'isa Haji',
    bio: 'dev',
    profession:'dev',
    children: 'logo'
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession:PropTypes.string,
    children: PropTypes.any

}

export default Profile
