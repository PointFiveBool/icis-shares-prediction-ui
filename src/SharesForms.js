//import axios from "axios";
import React, {useState, /*useCallback*/} from "react";
import { Controller, useForm, FormProvider  } from "react-hook-form";
import { DatePicker, Button  } from 'antd';
import Select from "react-select";
const { RangePicker } = DatePicker;
const { Option } = Select

export default function SharesForms() {
    const { handleSubmit, control, errors } = useForm();
    const [data, setResult] = useState("--");
    function onSubmit(data){
            return setResult(()=> {
                JSON.stringify(data);
                console.log({data});
                document.getElementsByClassName('gif')[0].style= "display: inline-block";
            });
            
        }
  return (
    <div class="detdom" >
                {/* <button onClick={sendRequest}>Press me</button> */}
                <form onSubmit={handleSubmit(onSubmit)} >
                <div class="sirota" >
                    <Controller 
                        render={({ field }) => <RangePicker  {...field} />}
                        name="RangePicker"
                        control={control}
                        defaultValue=""
                    />
                </div>
                <div class="sirota">
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
                />
                </div>
                <div class="sirota">
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
                />
                </div>
                {/* <Controller
                    render={({ Button }) => (
                        <Button type="submit">
                            qq
                        </Button>
                    )}
                /> */}
                <input type="submit"/>
                </form>
                <img class="gif"src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"/>
    </div>
  );
}

