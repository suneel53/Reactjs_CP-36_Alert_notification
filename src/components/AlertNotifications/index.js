// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="main-cont">
    <div className="cont">
      <h1>Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle />
        <h1>Success</h1>
        <p>You can access all the files in the folder</p>
      </Notification>
      <Notification>
        <RiErrorWarningFill />
        <h1>Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </Notification>

      <Notification>
        <MdWarning />
        <h1>Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </Notification>

      <Notification>
        <MdInfo />
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
