
import { useState, useEffect } from 'react';

const Welcome = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user)
  }, [])

  return (
    <div>
      { user && (
        <div>
          <h1>Welcome {user.name}</h1>
          <h3>Email: {user.email}</h3>
        </div>
      ) }
    </div>
  )
}

export default Welcome
