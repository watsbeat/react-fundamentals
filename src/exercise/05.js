// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({className = '', size, style, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box
    size="small"
    style={{backgroundColor: 'lightblue'}}
    children="small lightblue box"
  />
)
const mediumBox = (
  <Box
    size="medium"
    style={{backgroundColor: 'pink'}}
    children="medium pink box"
  />
)
const largeBox = (
  <Box
    size="large"
    style={{backgroundColor: 'orange'}}
    children="large orange box"
  />
)
const sizelessBox = <Box children="sizeless colourless box" />

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizelessBox}
    </div>
  )
}

export default App
