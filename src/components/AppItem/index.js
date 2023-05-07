// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appId, appName, imageUrl, category} = eachAppDetails

  return (
    <div className="app-display">
      <img className="image" src={imageUrl} alt={appName} />
      <h1 className="app-name"> {appName} </h1>
    </div>
  )
}

export default AppItem
