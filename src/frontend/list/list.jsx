import React, {PropTypes} from "react"
import { connect } from "react-redux"

function listItems(items){
  return items.map(item =>
    <div key={item.id} className="user">
    <span className="main">
    {item.displayName}
    </span>
    <a href={"#/"+item.id}>details</a>
    </div>)
}

const List = ((props) => {
  return (<div className="list x">
      {listItems(props.items)}
    </div>)
  })

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default connect(state => (state.list))(List)
export { List as ListNotConnected }
