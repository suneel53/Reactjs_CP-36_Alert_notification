// Write your code here
import {GrFormClose} from 'react-icons/gr'
import {Component} from 'react'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props
    return (
      <div className="not-cont">
        {children[0]}
        <div>
          {children[1]}
          {children[2]}
        </div>
        <GrFormClose />
      </div>
    )
  }
}

export default Notification
