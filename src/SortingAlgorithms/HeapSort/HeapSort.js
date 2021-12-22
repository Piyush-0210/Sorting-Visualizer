export const HeapSortMain=(array)=>{
    const animations=[];

    HeapSort(array,animations);

    return animations;
}

const HeapSort=(array,animations)=>{

    let n=array.length;

    for(let i=Math.floor(n/2)-1;i>=0;i--)
    {
        heapify(array,n,i,animations);
    }
    
    
    for(let i=n-1;i>0;i--)
    {
        animations.push([0,i,array[0],array[i]]);
        animations.push([0,i,array[0],array[i]]);

        let temp=array[0];
        array[0]=array[i];
        array[i]=temp;

        heapify(array,i,0,animations);
    }

}

const heapify=(array,n,i,animations)=>{
    
    let largest=i;
    let left=(2*i)+1;
    let right=(2*i)+2;

    
    if(left<n && array[largest]<array[left])
    largest=left;
    if(right<n && array[largest]<array[right])
    largest=right;


    if(left>=n) left=-1;
    if(right>=n) right=-1;
    if(i>=n) i=-1;

    animations.push([i,left,right]);
    animations.push([i,left,right]);
    
    if(largest!==i)
    {
        animations.push([i,largest,array[i],array[largest]]);
        animations.push([i,largest,array[i],array[largest]]);

        let temp=array[i];
        array[i]=array[largest];
        array[largest]=temp;

        heapify(array,n,largest,animations);
    }

}