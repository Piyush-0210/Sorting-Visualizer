import { desHeapSortMain } from "./desHeapSort";


export const desHeapSortUtil=(array,SPEED,arrayContainer)=>{
    const animations=desHeapSortMain(array);

    let n=animations.length;

    var isFirst=true;
    for(let i=0;i<n;i++)
    {
        const arrayBar=arrayContainer.current.children;

        const whichColor=(animations[i].length===3)?true:false;

        if(whichColor){
            const [largest,left,right]=animations[i];

            const color=(isFirst)?"#ff0000":"cyan";

            if(i===n-1)
            {
                setTimeout(()=>{
                    if(largest!==-1)
                    arrayBar[largest].style.backgroundColor=color;
                    if(left!==-1)
                        arrayBar[left].style.backgroundColor=color;
                    if(right!==-1)
                        arrayBar[right].style.backgroundColor=color;
    
    
                    
                    const buttons=document.getElementsByClassName("button");
                    buttons[0].disabled=false;
                    buttons[1].disabled=false;
                    document.getElementsByClassName("selector")[1].hidden=false;
                },i*SPEED);
            }
            else
            {
                setTimeout(()=>{
                    if(largest!==-1)
                    arrayBar[largest].style.backgroundColor=color;
                    if(left!==-1)
                        arrayBar[left].style.backgroundColor=color;
                    if(right!==-1)
                        arrayBar[right].style.backgroundColor=color;
                    
                },i*SPEED);
            }

            isFirst=!isFirst;
        }
        else
        {
            const color=(isFirst)?"#3044ff":"cyan";

            const[firstindex,lastindex,firstHeight,lastHeight]=animations[i];

            if(i===n-1)
            {
                setTimeout(()=>{
                    arrayBar[firstindex].style.backgroundColor=color;
                    arrayBar[firstindex].style.height=`${lastHeight}px`;
                    arrayBar[lastindex].style.backgroundColor=color;
                    arrayBar[lastindex].style.height=`${firstHeight}px`;
    
                    
                    const buttons=document.getElementsByClassName("button");
                    buttons[0].disabled=false;
                    buttons[1].disabled=false;
                    document.getElementsByClassName("selector")[1].hidden=false;
                },i*SPEED);

            }
            else
            {

                setTimeout(()=>{
                    arrayBar[firstindex].style.backgroundColor=color;
                    arrayBar[firstindex].style.height=`${lastHeight}px`;
                    arrayBar[lastindex].style.backgroundColor=color;
                    arrayBar[lastindex].style.height=`${firstHeight}px`;

                },i*SPEED);
            }

            isFirst=!isFirst;
        }
    }
}