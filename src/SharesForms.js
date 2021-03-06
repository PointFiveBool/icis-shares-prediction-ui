//import axios from "axios";
import React, {useState, /*useCallback*/} from "react";
import { Controller, useForm, FormProvider  } from "react-hook-form";
import { DatePicker, Button  } from 'antd';
import Select from "react-select";
import Loader from "./components/Loader";
import { Switch } from 'antd';
import delay from "./helpers/await";

const { RangePicker } = DatePicker;
const { Option } = Select

export default function SharesForms() {
    const { handleSubmit, control, errors } = useForm();
    const [data, setResult] = useState({});
    const [wereSent, sendData] = useState(false);
    function onSubmit(data){
            return setResult(()=> {
                if (Object.keys(data).length)
                sendData(true);
                console.log({data});
                return data;
            });
        }

    // async function blyaaaaNahuya () {
    //     document.querySelector(".porvi").className = "porvi-hidden";
    //     document.querySelector(".hidden").className = "pqwq";
    //     document.getElementsByClassName('sn')[0].className = "sn-hidden";
    //     for ( var i = 1; i < 20; i++){
    //         document.querySelector('.daaaa').appendChild(document.querySelector('.pqwq').cloneNode(true));
    //         await delay(50)
    //     }
    // }
    var co = 0;
    function changeT () {
        if ( document.getElementsByClassName("back-1").length == 1 ) {
            document.querySelector(".back-1").className = "back-2";
        }   else {
            document.querySelector(".back-2").className = "back-1";
        }
        // co++;
        // if ( co > 2 && document.getElementsByClassName('porvi-hidden').length == 1){
        //     document.getElementsByClassName('porvi-hidden')[0].className = "porvi";
        // }
    }
    function show () {
        document.querySelector(".detdom-hidden").className = "detdom";
        document.querySelector(".screen").className="screen-hidden";
    }
    function getimg () {
        document.querySelector('.bb').className="bb-img";
    }
  return (
    <div className="moscow">
        <button className='zero' onClick={getimg}>meow</button>
        <div className='screen' >
            <p id='head1' class='header'>?????????????? ??????????</p>
                <p id='head2' class='header'>????????????</p>
                <p id='head3' class='header'>??????????</p>
                <p id='head4' class='header'>??????????????</p>
                <p id='head5' class='header'>??????????????</p>
                <p id='head6' class='header'>??????????????????????</p>
                <p id='head7' class='header'>?????????? ????????????????</p>
                <p id='head8' class='header'>???????? ???????????</p>
                <p id='head9' class='header'>???????????? ????????????????))</p>
                <p id='head10' class='header1'>+8 916 416-28-44</p>
                <button onClick={show} >Let's go!!</button>
                <div class='light x1'></div>
                <div class='light x2'></div>
                <div class='light x3'></div>
                <div class='light x4'></div>
                <div class='light x5'></div>
                <div class='light x6'></div>
                <div class='light x7'></div>
                <div class='light x8'></div>
                <div class='light x9'></div>
        </div>
        {/* <button  className='porvi-hidden' onClick={() => blyaaaaNahuya()}></button> */}
    <div className="detdom-hidden" >
        <h1 >Shares predictor AI</h1>
            <div className="daaaa">
                    {/* <Switch className='sn ' onClick={changeT} /> */}
                <div className='hidden'>
                    <Switch className='s1' />
                </div>
            </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div class="sirota1" >
                        <Controller 
                            render={({ field }) => <RangePicker  className="DatePicker" {...field} />}
                            name="RangePicker"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                        />
                    </div>
                    <div className="sirota">
                    <Controller
                        name="CompanyName"
                        render={({ field }) => (
                        <Select placeholder="Company name"
                            {...field}
                            options={[
                            { value: "GOGL", label: "GOGL" },
                            { value: "NTFL", label: "NTFL" },
                            { value: "AMZN", label: "AMZN" }
                            ]}
                        />
                        )}
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                    </div>
                    <div className="sirota">
                    <Controller
                        name="CountOfItterations"
                        render={({ field }) => (
                        <Select placeholder="Count of itterations"
                            {...field}
                            options={[
                            { value: "25", label: "25" },
                            { value: "50", label: "50" },
                            { value: "75", label: "75" }
                            ]}
                        />
                        )}
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                    />
                    </div>
                    <input type="submit"/>
                </form>
            <Loader show={wereSent} />
        </div>
    </div>
  );
}
