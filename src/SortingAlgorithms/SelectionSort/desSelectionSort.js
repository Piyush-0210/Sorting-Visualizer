export const desSelectionSortMain=(array)=>{
    const animations=[];

    SelectionSort(array,animations);

    return animations;
}

const SelectionSort=(array,animations)=>{
    
    let n=array.length;

    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            animations.push([i,j]);
            animations.push([i,j]);

            if(array[i]<array[j])
            {
                animations.push([i,j,array[i],array[j]]);
                animations.push([i,j,array[i],array[j]]);

                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
}