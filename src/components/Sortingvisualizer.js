import React,{useState, useEffect,useRef} from 'react'
import "./Sorting.css";
import {MergeSortUtil} from "../SortingAlgorithms/MergeSort/MergeSortUtil"
import { QuickSortUtil } from '../SortingAlgorithms/QuickSort/QuickSortUtil';
import { BubbleSortUtil } from '../SortingAlgorithms/BubbleSort/BubbleSortUtil';
import { SelectionSortUtil } from '../SortingAlgorithms/SelectionSort/SelectionSortUtil';
import { InsertionSortUtil } from '../SortingAlgorithms/InsertionSort/InsertionSortUtil';
import { desMergeSortUtil } from '../SortingAlgorithms/MergeSort/desMergeSortUtil';
import { desBubbleSortUtil } from '../SortingAlgorithms/BubbleSort/desBubbleSortUtil';
import { desInsertionSortUtil } from '../SortingAlgorithms/InsertionSort/desInsertionSortUtil';
import { desQuickSortUtil } from '../SortingAlgorithms/QuickSort/desQuickSortUtil';
import { desSelectionSortUtil } from '../SortingAlgorithms/SelectionSort/desSelectionSortUtil';
import { HeapSortUtil } from '../SortingAlgorithms/HeapSort/HeapSortUtil';
import { desHeapSortUtil } from '../SortingAlgorithms/HeapSort/desHeapSortUtil';

function Sortingvisualizer(props) {
    
    var {width,resize,sortType,isSortDone,speed,order}=props;
    
    const [array,setArray]=useState([]);
    
    const arrayContainer = useRef("");

    var SIZE=50;
    var SPEED=speed*2;
    if(speed<5)
    SPEED=10;


    useEffect(()=>{

        
        if(sortType===1)
        {
            if(order) desMergeSortUtil(array,SPEED,arrayContainer);
            else MergeSortUtil(array,SPEED,arrayContainer);    
        }
        if(sortType===2)
        {
            if(order) desBubbleSortUtil(array,SPEED,arrayContainer);
            else BubbleSortUtil(array,SPEED,arrayContainer);
        }
        if(sortType===3)
        {
            if(order) desQuickSortUtil(array,SPEED,arrayContainer);
            else QuickSortUtil(array,SPEED,arrayContainer);
        }
        if(sortType===4)
        {
            if(order) desSelectionSortUtil(array,SPEED,arrayContainer);
            else SelectionSortUtil(array,SPEED,arrayContainer);
        }
        if(sortType===5)
        {
            if(order) desInsertionSortUtil(array,SPEED,arrayContainer);
            else InsertionSortUtil(array,SPEED,arrayContainer);
        }
        if(sortType===6)
        {
            if(order) desHeapSortUtil(array,SPEED,arrayContainer);
            else HeapSortUtil(array,SPEED,arrayContainer);
        }


    },[isSortDone]);


    
    const resetArray=()=> {
        if(width<9) SIZE=9;
        else SIZE=width*2;

        const newArray=[];

        for(var i=0;i<SIZE;i++)
        {
            newArray.push(randomSize(50,600));
        }

        setArray(newArray);
    }
    
    useEffect(()=>{
        resetArray();
    },[resize,width]);
    
    const randomSize=(a,b)=>{
        return Math.floor((Math.random()*(b-a+1))+a);
    }

    return (
        <div className="array-container" ref={arrayContainer}>
                {
                    array.map( (value,idx) => {
                        return (
                            <div className="array-bar" key={idx} 
                            style={{height:`${value}px`}}
                            >
                            </div>
                        )
                    })
                }
                <div className="tempdiv"></div>
        </div>
    )
}

export default Sortingvisualizer;