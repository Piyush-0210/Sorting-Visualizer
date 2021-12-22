import { BubbleSortMain } from "./BubbleSort"

export const BubbleSortUtil=(array,SPEED,arrayContainer)=>{
    const animations=BubbleSortMain(array);

    const n=animations.length;

    var isFirst=true;
    for(let i=0;i<n;i++){
        const arrayBar=arrayContainer.current.children;

        const whichColor=(animations[i].length===2)?true:false;

        if(whichColor){
            const[firstindex,secondindex]=animations[i];

            const firstindexStyle=arrayBar[firstindex].style;
            const secondindexStyle=arrayBar[secondindex].style;

            const color=(isFirst)?"#ff0000":"cyan";

            
            if(i===n-1)
            {
                setTimeout(()=>{
                    firstindexStyle.backgroundColor=color;
                    secondindexStyle.backgroundColor=color;
    
                    
                    const buttons=document.getElementsByClassName("button");
                    buttons[0].disabled=false;
                    buttons[1].disabled=false;

                    
                    document.getElementsByClassName("selector")[1].hidden=false;
    
                },i*SPEED);
            }
            else
            {
                
                setTimeout(()=>{
                    firstindexStyle.backgroundColor=color;
                    secondindexStyle.backgroundColor=color;

                },i*SPEED);
            }


            isFirst=!isFirst;
        }
        else{
            const color=(isFirst)?"#3044ff":"cyan";
            
            if(i===n-1)
            {    
                setTimeout(()=>{
                    
                    const [firstindex,secondindex,firstheight,secondheight]=animations[i];
                    
                    if(isFirst)
                    {
                        arrayBar[firstindex].style.height=`${secondheight}px`;
                        arrayBar[secondindex].style.height=`${firstheight}px`;
                    }
                    
                    arrayBar[firstindex].style.backgroundColor=color;
                    arrayBar[secondindex].style.backgroundColor=color;


                    
                    const buttons=document.getElementsByClassName("button");
                    buttons[0].disabled=false;
                    buttons[1].disabled=false;
                    
                    document.getElementsByClassName("selector")[1].hidden=false;

                },i*SPEED);
            }    
            else
            {
                setTimeout(()=>{
                
                    const [firstindex,secondindex,firstheight,secondheight]=animations[i];
                    
                    if(isFirst)
                    {
                        arrayBar[firstindex].style.height=`${secondheight}px`;
                        arrayBar[secondindex].style.height=`${firstheight}px`;
                    }
                    
                    arrayBar[firstindex].style.backgroundColor=color;
                    arrayBar[secondindex].style.backgroundColor=color;
    
                },i*SPEED);
            }
            
            isFirst=!isFirst;
        }
    }
}