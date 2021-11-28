import React from "react";

function List(props){ //props = {arr: ["","",""]}
    const {arr} = props;
    if(Array.isArray(arr) && arr.length){
        return (<ul>
            {arr.map(item => <li key={item}>{item}</li>)}
        </ul>
        )}
}
 
export default List;
