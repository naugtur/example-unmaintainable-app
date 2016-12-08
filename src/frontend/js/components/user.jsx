import React, {PropTypes} from "react"


const User = ((props) =>
    (<div className="user">
      <ul>
        <li className="name">{props.username}</li>
        <li>name: {props.displayName}</li>
        <li>twitter: {props.twitter}</li>
        <li>memberFor: {props.memberFor}</li>
      </ul>
    </div>))

User.propTypes = {
  username: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  memberFor: PropTypes.string.isRequired,
}

export default User
