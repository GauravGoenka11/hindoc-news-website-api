import React, { useEffect, useState } from 'react';
import Navbar from'./Components/Navbar.jsx';
import Header from './Components/Header.jsx';
import Feature from './Components/Feature.jsx';
import Offer from './Components/Offer.jsx';

function App() {

  

      const[postId,setPostId]=useState(null);

      useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(JSON.stringify(data)));
    
    }, []);
  

  return (
    <div className="App">
      <Navbar/>
      <Header datas={postId}/> 
       <Feature datas={postId}/>
       <Offer datas={postId}/>
    </div>
  );
}

export default App;
