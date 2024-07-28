import React, { Component } from 'react'
import Navbar from './components/Navbar';

import News from './components/News';
import {BrowserRouter as Router,
   Routes,
    Route } from "react-router-dom";
    import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const  App=()=> {
 const pagesize = 20;
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress , setProgress]=  useState(0)
 



    return (
      <div>


<Router>
    <Navbar/>

    <LoadingBar
        color='#f11946'
        progress={progress}
        height={2}
        shadow={true}
      />

    <Routes>
      <Route  path="/"element={<News setProgress={setProgress}apikey={apikey}  key="general" pagesize={pagesize} country="in" category = "general"/>}></Route>
      <Route  path="/business"element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={pagesize} country="in" category = "business"/>}></Route>
      <Route  path="/entertainment"element={<News setProgress={setProgress}apikey={apikey}  key="entertainment" pagesize={pagesize} country="in" category = "entertainment"/>}></Route>
      <Route  path="/general"element={<News setProgress={setProgress}apikey={apikey}  key="general" pagesize={pagesize} country="in" category = "general"/>}></Route>
      <Route  path="/health"element={<News setProgress={setProgress} apikey={apikey} key="health" pagesize={pagesize} country="in" category = "health"/>}></Route>
      <Route  path="/science"element={<News setProgress={setProgress}apikey={apikey}  key="science" pagesize={pagesize} country="in" category = "science"/>}></Route>
      <Route  path="/sports"element={<News setProgress={setProgress} apikey={apikey} key="sports" pagesize={pagesize} country="in" category = "sports"/>}></Route>
      <Route  path="/technology"element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={pagesize} country="in" category = "technology"/>}></Route>


    </Routes>
    </Router>  
      </div>
    )
  }


  export default App;
