import axios from "axios";
import React, {useState, /*useCallback*/} from "react";
import { Controller, useForm, FormProvider  } from "react-hook-form";
import  useQuery from "react-query";
import { DatePicker, Button  } from 'antd';
import Select from "react-select";
import Loader from "./components/Loader";


 // host/api/shares?shortName=AMZN&iterations=20&startTime=01112021&endTime=29112021

const { RangePicker } = DatePicker;
const { Option } = Select

export default function SharesForms() {
    const { handleSubmit, control, errors } = useForm();
    // const {data, status, isFetching, isError} = useQuery();
    const [formData, setResult] = useState({});
    const [wereSent, sendData] = useState(false);
    const prepareJSON = (formData) => {
        const keys = Object.keys(formData);
        return keys.reduce((acc, key) =>{
            if (formData[key].value){
                if(key === "CompanyName"){
                    return {
                        ...acc,
                        shortName: formData[key].value
                    }
                }
                if (key === "CountOfItterations"){
                    return {
                        ...acc,
                        iterations: formData[key].value
                    }
                }
            }
            if (key === "RangePicker"){
               const [startDate, endDate] =  formData[key].map(x => x.format('DD-MM-YYYY'))
               return {
                   ...acc,
                   startDate,
                   endDate
               }
            }
        }, {})
    }
    async function onSubmit(data){
           const preparedData = prepareJSON(data) 
           console.log({ preparedData })
           const response = await axios.post("/shares", data)
            return setResult(()=> {
                if (Object.keys(data).length)
                sendData(true);
                console.log({data});
                return preparedData;
            });
        }
  return (
    <div className="moscow">
        <div className="detdom" >
                    {/* <button onClick={sendRequest}>Press me</button> */}
                    <form onSubmit={handleSubmit(onSubmit)} >
                    <div class="sirota" >
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
                    {/* <Controller
                        render={({ Button }) => (
                            <Button type="submit">
                                qq
                            </Button>
                        )}
                        htmlType="submit"
                        type="primary"
                    /> */}
                    <input type="submit"/>
                    </form>
                    <Loader show={wereSent} />
        </div>
    </div>
  );
}
