// This page only contains code but it wont be working as it is not a react app

// Usememo Example
import {useMemo} from 'react';

data=[1,2,3,4,5,6,7,8,9,10,11]


function memo({data}) {
    const res=useMemo(() => {
       let sum=0;
       for (let i = 0; i < data.length; i++) {
        sum+= data[i];
        
       } 
        return sum
        
    
    }, [data]);
}
return <div>{res}</div>