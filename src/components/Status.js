import React, {useState, useEffect, useContext} from 'react'
import { AccountContext } from './Account'

function Status() {
  const [status, setStatus] = useState(false);
  const {getSession, logout} = useContext(AccountContext)

  useEffect(() => {
    getSession()
    .then(session => {
        console.log("Session: ", session)
        setStatus(true)
    })
  }, [])
  
  return <div>
    {status ? (<div style={{margin: '20px'}}>
        You are Logged!
        <button style={{marginLeft: '10px'}} onClick={logout}>Logout</button>
    </div>) : "Please login"}
  </div>
}

export default Status