import Login from '../../components/login'
import Signup from '../../components/signup'

const Auth = () => {
  return (
    <div>
        {/* signup form */}
        <h1>Auth</h1>
        <Signup />
        {/* login form */}
        <Login />
    </div>
  )
}

export default Auth