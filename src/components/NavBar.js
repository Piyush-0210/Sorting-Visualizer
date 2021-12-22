import { AppBar,Button,Slider,Toolbar,FormControl,Select,InputLabel,MenuItem, Switch} from '@mui/material';
import { Box} from '@mui/system';
import React, { useState } from 'react'
import "./navbar.css";

function NavBar(props) {

    const [sort, setSort] = useState(0);
    const [order,setOrder]=useState(false);

    const resetArray=()=>{
        props.resizeArray();
    }

    const widthChangeHandler=(e)=>{
        e.preventDefault()
        props.getWidth(e.target.value);
    }

    const speedChangeHandler=(e)=>{
        e.preventDefault();
        props.getSpeed(e.target.value);
    }

    const whichSort=(e)=>{
        e.preventDefault();
        setSort(e.target.value);
    }

    const sortTheArray=()=>{
        if(sort>=1 && sort<=6)
        {
            props.makeItSort(sort,order);
            const button=document.getElementsByClassName("button");
            button[0].disabled=true;
            button[1].disabled=true;

            document.getElementsByClassName("selector")[1].hidden=true
        }

    }
    
    const switchModeChange=(e)=>{
        setOrder(e.target.checked);
    }

    return (
        <AppBar position="static" style={{backgroundColor:"#153758",opacity:"1",color:"white",paddingTop:"15px",paddingBottom:"15px"}} >
            <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
                    <Button variant="outlined" color="inherit"  className="button" onClick={resetArray} >Randomize</Button>


                    <Box >
                        Change Sorting Speed                    
                        <Slider 
                            defaultValue={50} valueLabelDisplay="auto" 
                            onChange={speedChangeHandler}
                            className="selector"
                        />
                    </Box>

                    <Box className="selector">
                        Change Size Of Array                    
                        <Slider 
                            defaultValue={50} valueLabelDisplay="auto" 
                            onChange={widthChangeHandler}
                            
                        />
                    </Box>

                    <FormControl className="formcontrol"  >
                        <InputLabel id="demo-simple-select-label" style={{color:"white"}}
                        className="inputlabel">Sorting</InputLabel>
                        <Select
                            style={{color:"white"}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className="selector"
                            label="sorting"
                            variant="outlined"
                            onChange={whichSort}
                        >
                            <MenuItem value={1}>Merge Sort</MenuItem>
                            <MenuItem value={2}>Bubble Sort</MenuItem>
                            <MenuItem value={3}>Quick Sort</MenuItem>
                            <MenuItem value={4}>Selection Sort</MenuItem>
                            <MenuItem value={5}>Insertion Sort</MenuItem>
                            <MenuItem value={6}>Heap Sort</MenuItem>
                        </Select>
                    </FormControl>

                    <Box width="55px" style={{"textAlign":"center"}}>
                        Order
                        <Switch onChange={switchModeChange} className="selector" />
                    </Box>


                    <Button variant="outlined" color="inherit" className="button" onClick={sortTheArray} >Sort</Button>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;