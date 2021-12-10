import React from "react";
import "../index.css";
import "antd/dist/antd.css";
function Loader (props) {
    const {show} = props;
    return (
        <div className="father">
            {show && <div className='bb'></div> }
        </div>
   )
}

export default Loader;
