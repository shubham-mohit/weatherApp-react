import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import '../App.css'
import axios from 'axios'

const Weather = () => {
    const [data, setData] = useState({
        celcius : 22,
        name : 'Pune',
        humidity : '40%',
        wind : 3
    })
    const[name,setName] = useState()

    useEffect(()=>{
        // const Url = `https://api.openweathermap.org/data/2.5/weather?q=${name} &appid=e386892f78dfaaddde871d60edea17f3`
        // axios.get(Url)
        // .then((res)=> {
        //     setData = ({...data, celcious:res.data.main.temp , name:res.data.name , Humidity:res.data.main.humidity , wind: res.data.wind.speed})
        //     // console.log(res)
        // })
        // .catch((err)=>console.log(err))
    },[])
    const handleClick = (()=>{
        if(name !== ""){
            const Url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e386892f78dfaaddde871d60edea17f3&units=metric`
            axios.get(Url)
            .then((res)=> {
                setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity:
                    res.data.main.humidity, wind: res.data.wind.speed})
                // console.log(res)
            })
            .catch((err)=>console.log(err))
        }
    })

  return (
    <div className='box'>
        <div className='container'>
            <div className='Input'>
                <input type='text' placeholder= 'Enter city name'  onChange={(e => setName(e.target.value))}/>
                <button> <AiOutlineSearch className="search-icon" onClick={handleClick}/></button>
            </div>
            <div className='city-info'>
                <div className='image'>
                    <img src='/img/Weather-PNG-Picture.png' alt='img' />
                </div>
                <h3> {data.name}   {data.celcius}°c</h3>
                {/* <h4> 22 °c </h4> */}
            </div>
            <div className='other'>
                <div className='c1'>
                    <img src='/img/pngwing.com (1).png' alt='img'/>
                    <p> Humidity: {data.humidity}% </p>
                </div>
                <div className='c1'> 
                    <img src='/img/pngwing.com (2).png' alt='img'/>
                    <p > wind: {data.wind}km/hr</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather