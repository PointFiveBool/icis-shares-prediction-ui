import React from "react";
import { Switch } from 'antd';


function blyaaaaNahuya () {
    for ( var i = 1; i < 25; i++){
        var itm = document.getElementsByClassName("sw").lastChild;
        var cln = itm.cloneNode(true);
        document.getElementsByClassName("daaaa").appendChild(cln);
        console.log('well')
    }
}
function Da () {
    return (
        <div class="daaaa">
            <Switch className='sw' defaultChecked />
        </div>
    )

}

export default Da;
