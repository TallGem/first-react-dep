import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {id} = useParams()
  return (
    <div>WELCOME TO SQI {id}</div>
  )
}

export default About