import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export function News() {
    const navigate = useNavigate();

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=4f9f84129c964ac9a6c6687006a2cc22")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            {<button className='btn btn-primary' onClick={fetchNews}>Click here to Fetch the News</button>}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((value,index) => {
              return (
                
                      <div class="row g-0">
        <div class=" col-md-4 d-flex justify-content-center">
            <img src={value.urlToImage} class="img-fluid rounded-start " alt="dada" width="300px" height="300px"/>
        </div>
        <div class=" col-md-6 row g-4">
            <div class="card-body">
                <h5 class="d-flex flex-row " type="text" name="Nam" id="name">{value.title}</h5>
                <p class="text-start">{value.description}</p>
                
                
                
       
            </div>
        </div>
        <p><br/><br/></p>
        </div>
                  
                
                
              );
            })
          }
        </div>
        <div>
        
        </div>
       
      </div>
    </>
  )
}
