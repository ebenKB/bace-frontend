import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })

    if(res.status === 200) {
      const data = await res.json()
      localStorage.setItem('user', JSON.stringify(data.user))
      history.push('/welcome');
    }
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  };

  return (
    <div>
      <h3>Login</h3>
      <form>
        <div>
            <input onChange ={handleInputChange} type="email" name="email" value={user.email} placeholder="Email"/>
          </div>
          <div>
            <input onChange ={handleInputChange} type="password" name="password"value={user.password} placeholder="Password" />
          </div>
          <button onClick={handleLogin}>Login</button>
          <NavLink to="/">
            <span className="pad small">Create Account</span>
          </NavLink>
      </form>
    </div>
  )
}

export default Login
