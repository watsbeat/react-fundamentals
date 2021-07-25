// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const value = usernameInputRef.current.value
    value ? onSubmitUsername(value) : alert('No username provided.')
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          ref={usernameInputRef}
          type="text"
          onChange={handleChange}
        />
        {error ? (
          <div role="alert" style={{color: 'red'}}>
            {error}
          </div>
        ) : null}
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
