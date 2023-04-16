import axios from 'axios'
import React, {useState,useEffect} from 'react'

function App() {
  const [news,setNews]= useState([])
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles)
    })
  },[])
  return (
    <>
    
    <div className="container my-5">
      <div className="row text-center">
       {
        news.map((val)=>{
          return (
            <div className="col my-3">
            <div className="card" style={{width: "18rem"}}>
      <img src={val.urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{val.title}</h5>
        <p className="card-text">{val.description}</p>
        <button className="btn btn-primary"><a href={val.url}><font color="white">Click for more</font></a>
        </button> 
        
      </div>
    </div>
            </div>
          )
        })
       }

      </div>
    </div>
    </>
  )
}

export default App