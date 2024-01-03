import './App.css'
import CustomRoutes from './routes/customRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='outer-user-profile'>
        <Link to="/">  <h1 className="user-profile">Github Profile UserName Search</h1> </Link>
      <CustomRoutes />
    </div>
  )
}

export default App
