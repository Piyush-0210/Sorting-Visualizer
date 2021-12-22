import { getMergeSort } from './MergeSort';


export const MergeSortUtil=(array,SPEED,arrayContainer)=>{
    
    const animations=getMergeSort(array);

    let n=animations.length;
    
    for(let i=0;i<n;i++)
    {
        const arrayBar=arrayContainer.current.children;
        
        const isColorChange= (i%4 === 0)||(i%4 === 1);

        if(isColorChange){
            const [firstBarIndex,secondBarIndex]=animations[i];

            const firstBarStyle=arrayBar[firstBarIndex].style;
            const secondBarStyle=arrayBar[secondBarIndex].style;

                const color=(i%4 === 0)?"#ff0000":"cyan";


                if(i===n-1)
                {
                    setTimeout(()=>{
                        firstBarStyle.backgroundColor=color;
                        secondBarStyle.backgroundColor=color;

                        const buttons=document.getElementsByClassName("button");
                        buttons[0].disabled=false;
                        buttons[1].disabled=false;
                        document.getElementsByClassName("selector")[1].hidden=false;

                    },i*SPEED)
                }
                else
                {
                    setTimeout(()=>{
                        firstBarStyle.backgroundColor=color;
                        secondBarStyle.backgroundColor=color;
                    },i*SPEED)
                }

        }
        else
        {
            const color=(i%4 === 2)?"#3044ff":"cyan";

            if(i===n-1)
            {
                setTimeout(()=>{

                    const [barIndex,barNewHeight]=animations[i];
                    const barStyle = arrayBar[barIndex].style;
                        
                    if(i%4 === 2)
                    {
                        barStyle.height=`${barNewHeight}px`;
                    }
    
                    barStyle.backgroundColor=color;

                    const buttons=document.getElementsByClassName("button");
                    buttons[0].disabled=false;
                    buttons[1].disabled=false;
                    document.getElementsByClassName("selector")[1].hidden=false;

                },i*SPEED);
            }
            else{
                setTimeout(()=>{
    
                    const [barIndex,barNewHeight]=animations[i];
                    const barStyle = arrayBar[barIndex].style;
                        
                    if(i%4 === 2)
                    {
                        barStyle.height=`${barNewHeight}px`;
                    }
    
                    barStyle.backgroundColor=color;
                },i*SPEED);
    
            }

        }
    }
}