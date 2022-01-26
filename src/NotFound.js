import { Link } from 'react-router-dom'

const NotFound = () => {
  return(
      <div className="not-found">
        <h2>Sorry,</h2>
        <p>Seems like the page you're looking for is missing.</p>
        <Link to="/">Go back to homepage.</Link>
      </div>
  )
}
 
export default NotFound;