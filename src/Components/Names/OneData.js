import React from 'react'
import {
    useParams,
  } from "react-router-dom";
  import axios from 'axios'
  import { useState, useEffect } from "react";


function OneData(props) {
    console.log(props.useData)
  return (
    <div>
      {props.useData.map(item => <div>
        <ul>
          <li className='names'>
            {item.email}
          </li>
        </ul>
      </div>)}

    </div>
  )
}

export default OneData

// axios.get('http://localhost:3001/getUser/:id', async (req, res) => {
//           setData(findById(req.params.id))
//           }