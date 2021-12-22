import React, {useState, Fragment } from 'react'
import {Grid} from "@mui/material";
import NavBar from "./components/NavBar"
import Sortingvisualizer from './components/Sortingvisualizer';
import "./App.css"
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';

function App() {

  const [width, setWidth] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [resize,setResize]=useState(false);
  const [whichSort, setWhichSort] = useState(0);
  const [isSortDone,setIsSortDone]=useState(true);
  const [order,setOrder]=useState(false);
  const [delay, setDelay] = useState(true)

  const resizeArray=()=>{
    setResize(!resize);
  }

  const getWidth=(value)=>{
      setWidth(value);
  }

  const getSpeed=(value)=>{
    setSpeed(value);
  }

  const makeItSort=(value,order)=>{
    setWhichSort(value);
    setOrder(order);
    setIsSortDone(!isSortDone);
  }
  const makeDelay=(value)=>{
    setDelay(value);
  }
  

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar getWidth={getWidth} getSpeed={getSpeed} resizeArray={resizeArray} makeItSort={makeItSort} delay={delay} />
        </Grid>
        <Grid item xs={2} >
        </Grid>
        <Grid item xs={8}>
            <Sortingvisualizer width={width} resize={resize} sortType={whichSort} isSortDone={isSortDone} speed={speed} order={order} makeDelay={makeDelay}/>
        </Grid>
        <Grid item xs={2} >
        </Grid>
      </Grid>
          <div className="copyright">
            <CopyrightRoundedIcon /> &nbsp;
             2021 Piyush Gupta, All rights reserved.
          </div>
    </Fragment>
  )
}

export default App;