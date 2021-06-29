import React, { Component, useEffect,useState } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
function Feature(){
    useEffect(()=> {
        featchItem();
        
    },[]);
    const [feature,setFeature] = useState(true);
  
    const [items, setItems] = useState([])
        const featchItem = async () => {
            const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
            const items = await data.json();  
            console.log(items.data);          
            setItems(items.data)
        };
      
        return (
            <div className="row">    
                <div className="btn btn-sm btn-primary mb-4" onClick={() => setFeature( prevCheck => !prevCheck )}>
                     {feature ? "is Feature" : "not feature"} 
                </div>           
                {items.filter(item => item.store.isFeatured === feature).map(item =>(
                
                    <div className="card col-3 mb-3" key={item.itemId}>
                        <img className="card-img-top" src={item.item.images.icon} alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">{item.item.name}</h5>
                          <p className="card-text">{item.item.description}</p>
                          <p>Ratings:</p>
                          <div className="progress">                            
                             <div className="progress-bar" role="progressbar" 
                             style={{width: `${100 * item.item.ratings.avgStars / 5}%`}} 
                             aria-valuenow={ 100 * item.item.ratings.avgStars / 5} 
                             aria-valuemin="0" 
                             aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{
                                moment.unix(item.lastUpdate).utc().startOf('hour').fromNow()
                            }</small>
                        </div>
                        <Link to={`/feature/${item.itemId}`} className="btn btn-primary btn-sm">Go somewhere</Link>
                      </div>
                )) }
            </div>
        )
}
export default Feature