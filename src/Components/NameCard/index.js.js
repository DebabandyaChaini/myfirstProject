import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import { GrFormViewHide } from 'react-icons/gr';
// import { NavLink, Link, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import OneData from './OneData';
import { BrowserRouter, Routes, Route, Switch, useParams } from "react-router-dom";

function Names() {

  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/allUsers')
      .then(response => {
        setData(response.data)
      })
  }, [])

  // const handleClick = (e)=>{
  //   // axios.get('http://localhost:3001/getUser/:id')
  //   console.log(data.find({name:e}))
  //       // .then(test=>{
  //       //   setUserData(test.data)
  //       // })
  // }

  const handleClick = (data) => {
    axios.get(data)
      .then(response => {
        console.log(response.data)
        setUserData(response.data)
      })
  }

  return (
    <div>
      <h1>This is Name Card</h1>
    </div>
  )
}

export default Names
