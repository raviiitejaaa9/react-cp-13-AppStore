// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, changeTab, isTrue} = props
  const {tabId, displayText} = eachTabDetails

  const onClickChangeTab = () => {
    console.log('tabItemTriggered')
    changeTab(tabId)
  }

  const decorationEl = isTrue ? 'decoration' : ''

  return (
    <li className={`list-item ${decorationEl}`} onClick={onClickChangeTab}>
      <button className=" button ">{displayText}</button>
    </li>
  )
}

export default TabItem
