import React from "react";
import "../index.css";
import "antd/dist/antd.css";
function Loader (props) {
    const {show} = props;
    return (
        <div className="father">
            {show && <img className ="loader"src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"></img>}
        </div>
   )
}

export default Loader;
