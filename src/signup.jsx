import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  let history = useHistory();

  const handleInputChange  = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name] : value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user })
    })

    if (res.status === 200) {
      const data = await res.json();
      history.push('/welcome');
    }
  }
  return (
    <div>
      <h3>SIGNUP</h3>
      <form>
        <div>
          <input onChange ={handleInputChange} type="text" name="name" id="" value ={user.name} placeholder="Name" />
        </div>
        <div>
          <input onChange ={handleInputChange} type="email" name="email" value={user.email} placeholder="Email"/>
        </div>
        <div>
          <input onChange ={handleInputChange} type="password" name="password"value={user.password} placeholder="Password" />
        </div>
        <div>
          <input onChange ={handleInputChange} type="password" name="confirm_password"value={user.password} placeholder="Confirm Password" />
        </div>
        <div>
          <button onClick={handleSubmit}>Create user</button>
          <NavLink to="/login">
            <span className="pad small">Login</span>
          </NavLink>
        </div>
      </form>
    </div>
  )
}

export default Signup
