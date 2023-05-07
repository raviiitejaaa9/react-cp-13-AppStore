// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appId, appName, imageUrl, category} = eachAppDetails

  return (
    <li className="app-display">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="app-name"> {appName} </p>
    </li>
  )
}

export default AppItem
