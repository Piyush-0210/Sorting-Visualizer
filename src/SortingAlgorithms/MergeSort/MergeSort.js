export const getMergeSort=(array)=>{

    const animations=[];

    if (array.length <= 1) return array;
    
    mergeSort(array, 0, array.length - 1, animations);
    
    return animations;
}

const mergeSort=(mainArray, start, end, animations)=>{
    if(start===end) return;

    let mid=Math.floor((start + end) / 2);

    mergeSort(mainArray,start,mid,animations);
    mergeSort(mainArray,mid+1,end,animations);

    Merge(mainArray,start,mid,end,animations);
}

const Merge=(mainArray,start,mid,end,animations)=>{
    let i=start;
    let j=mid+1;
    let k=start;

    const tempArray=mainArray.slice();

    while(i<=mid && j<=end)
    {

        animations.push([i,j]);
        animations.push([i,j]);

        if(tempArray[i]<=tempArray[j])
        {
            animations.push([k,tempArray[i]])
            animations.push([k,tempArray[i]])
            mainArray[k++]=tempArray[i++];
        }
        else
        {
            animations.push([k,tempArray[j]])
            animations.push([k,tempArray[j]])
            mainArray[k++]=tempArray[j++];
        }
    }

    while(i<=mid)
    {
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,tempArray[i]])
        animations.push([k,tempArray[i]])

        mainArray[k++]=tempArray[i++];
    }

    while(j<=end){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,tempArray[j]])
        animations.push([k,tempArray[j]])

        mainArray[k++]=tempArray[j++];
    }
}