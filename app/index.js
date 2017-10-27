import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types' 
// jala la libreria
// tambien ver default Props
import './styles/base.css'

const App = ({nombre, edad, hobbies}) => (
  <div className="title">
    {nombre} {edad} {hobbies}
  </div>
)
App.prototype = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  hobbies: PropTypes.array
}
render(
  <App 
    nombre = "Kenneth"
    edad = {20}
  />,
  document.getElementById('root')
)
