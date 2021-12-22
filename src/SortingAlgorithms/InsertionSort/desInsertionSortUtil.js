import { desInsertionSortMain } from "./desInsertionSort";

export const desInsertionSortUtil=(array,SPEED,arrayContainer)=>{

    const animations=desInsertionSortMain(array);

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
            
            const [index,heightbar]=animations[i];
            
            if(i===n-1)
            {
                setTimeout(()=>{
                    
                    
                    if(isFirst)
                    {
                        arrayBar[index].style.height=`${heightbar}px`;
                    }
                    
                    arrayBar[index].style.backgroundColor=color;
    
                    
                    const buttons=document.getElementsByClassName("button");
                    buttons[0].disabled=false;
                    buttons[1].disabled=false;
                    document.getElementsByClassName("selector")[1].hidden=false;
    
                },i*SPEED);
            }
            else
            {
                setTimeout(()=>{
                
                    if(isFirst)
                    {
                        arrayBar[index].style.height=`${heightbar}px`;
                    }
                    
                    arrayBar[index].style.backgroundColor=color;
    
                },i*SPEED);
            }
            
            
            isFirst=!isFirst;
        }
    }
}