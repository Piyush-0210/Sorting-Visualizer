export const desBubbleSortMain=(array)=>{
    const animations=[];

    BubbleSort(array,animations);

    return animations;
}

const BubbleSort=(array,animations)=>{
    
    let n=array.length;

    for(let i=0;i<n;i++)
    {
        var flag=false;
        for(let j=0;j<n-1-i;j++)
        {
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if(array[j]<array[j+1])
            {
                animations.push([j,j+1,array[j],array[j+1]]);
                animations.push([j,j+1,array[j],array[j+1]]);

                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;

                flag=true;
            }
        }

        if(!flag) break;
    }
}