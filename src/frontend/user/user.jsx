import React, {PropTypes} from "react"
import { connect } from "react-redux"

const User = ((props) =>
    (<div className="user">
    {props.params.id}
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

export default connect(state => (state.user))(User)
