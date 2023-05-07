// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails} = props
  const {tabId, displayText} = eachTabDetails

  return <li className="list-item">{displayText}</li>
}

export default TabItem
