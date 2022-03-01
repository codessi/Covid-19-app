import React, {useState, useEffect} from "react"
import moment from "moment"

const url = "https://api.covid19api.com/summary"

const FetchData = () => {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

 const fetchAPI = async() => {
  const res = await fetch(url)
  const result = await res.json()
//  console.log(result.Countries)
 setData(result.Countries)
 setLoading(false)
 console.log(data)
 }

 useEffect(() => {
   fetchAPI()
 }, [])

 if(loading){
   return (
     <h3>Loading...</h3>
   )
 }


  return(
    <>
    
    <div className="container">
      {data.map(el => {
        const {ID,Country, CountryCode, NewConfirmed, TotalConfrimed, NewDeaths, TotalDeaths,TotalRecovered, NewRecovered, Date} = el
        return(
          <div key={ID} className="card">
            <h1>{Country}, {CountryCode}</h1>
            <ul>
              <li><span>New Confirmed:</span>{NewConfirmed}</li>
              <li><span>Total Confirmed:</span>{TotalConfrimed}</li>
              <li><span>New Deaths:</span>{NewDeaths}</li>
              <li><span>Total Deaths:</span>{TotalDeaths}</li>
              <li><span>New Recovered:</span>{NewRecovered}</li>
              <li><span>Total Recovered:</span>{TotalRecovered}</li>
              <li><span>Date:</span> {moment(Date).format('MMMM Do YYYY,   h:mm:ss a')
}</li>
            </ul>
          </div>)
      })}
    </div>

    
    
    </>

  )
}

export default FetchData