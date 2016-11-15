import React, {PropTypes} from "react"

function listItems(items){
  return items.map(item =>
    <div key={item.id} className="user">
    <span className="main">
    {item.displayName}
    </span>
    <em> {item.memberFor}</em>
    <em> {item.twitter}</em>

    </div>)
}

const List = ((props) =>
    (<div className="list">
      {listItems(props.items)}
    </div>))

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List
