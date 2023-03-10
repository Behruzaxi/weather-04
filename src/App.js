import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./styl.css"
const weather = require("../src/img/icon.png")

export default function App() {
  
  const [data, setData] = useState()
  const [value, setValue] = useState()
  
  const getDataWeather = () => {
      let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${key}`)
      .then((res) => {
        setData(res?.data)
        setValue("")
      })
    }

        console.log(data);
        console.log(value);

  return (
    <Container>

      <Row className='justify-content-center mt-5'>
        <Col xs={10} lg={4}>
          <div className='srchbox'>
            <input type="text" placeholder='search location' value={value}  onChange={(e) => setValue(e.target.value)}/>
            <button className='btn-search' onClick={getDataWeather}>Search</button>
          </div>
        </Col>
      </Row>

      <Row className='justify-content-center mt-2'>
        <Col xs={10} lg={4}>
          <div className='card'>
            <h1>{data?.name}</h1>
            <h3>clouds</h3>
            <img className='img' src={weather} alt="none" />
            <h2 className='degre'>{Math.round(data?.main?.temp)+"°"}</h2>
            <ul className='box'>
              <li className='list-box'>Max: {Math.round(data?.main?.temp_max)+"°"}</li>
              <li className='yoki'></li>
              <li className='list-box'>Min: {Math.round(data?.main?.temp_min)+"°"}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
