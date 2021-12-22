export const desQuickSortMain=(array)=>{
    const animations=[];

    if (array.length <= 1) return array;
    
    QuickSort(array, 0, array.length - 1, animations);
    
    return animations;
}

const QuickSort=(array,start,end,animations)=>{

    if(start<end)
    {
        var pivot=Partition(array,start,end,animations);
    
        QuickSort(array,start,pivot-1,animations);
        QuickSort(array,pivot+1,end,animations);
    }

}

const Partition=(array,start,end,animations)=>{
    
    var pivot=array[end];

    let i=start-1;

    for(let j=start;j<end;j++)
    {
        animations.push([j,end]);
        animations.push([j,end]);
        if(array[j]>=pivot)
        {
            i++;

            animations.push([j,i,array[j],array[i]]);
            animations.push([j,i,array[j],array[i]]);
            
            let temp=array[j];
            array[j]=array[i];
            array[i]=temp;

        }
    }
    
    animations.push([end,i+1,array[end],array[i+1]]);
    animations.push([end,i+1,array[end],array[i+1]]);
    

    array[end]=array[i+1];
    array[i+1]=pivot;
    
    
    return i+1;
}