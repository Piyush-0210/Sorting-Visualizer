export const InsertionSortMain=(array)=>{
    const animations=[];

    InsertionSort(array,animations);


    return animations;
}

const InsertionSort=(array,animations)=>{
    
    let n=array.length;

    for(let i=1;i<n;i++)
    {
        let current=array[i];
        let j=i-1;

        
        if(j>=0 && array[j]>current)
        {
            while(j>=0 && array[j]>current)
            {
                animations.push([i,j]);
                animations.push([i,j]);
                
                animations.push([j+1,array[j],0]);
                animations.push([j+1,array[j],0]);
                
                array[j+1]=array[j];
                j--;
            }
        }
        else
        {
            animations.push([i,j]);
            animations.push([i,j]);

        }
        
        
        animations.push([j+1,current,0]);
        animations.push([j+1,current,0]);

        array[j+1]=current;
    }
}