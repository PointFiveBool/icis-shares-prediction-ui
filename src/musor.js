//import axios from "axios";
import React, {useState, /*useCallback*/} from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker, /*Input*/ } from 'antd';
export default function SharesForms() {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("--");
    // const onSubmit = (data) => setResult(JSON.stringify(data));
    // const options = {
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/todos/1',
    //   };
      
    //   axios.request(options).then(function (response) {
    //       console.log(response.data);
    //   }).catch(function (error) {
    //       console.error(error);
    //   });
    // const sendRequest = useCallback(()=>{
    //     axios({
    //         method: 'get',
    //         url: 'https://yfapi.net/v6/finance/recommendationsbysymbol/AAPL',
    //     })
    //         .then(function (response) {
    //           console.log(response.data)
    //         });
    // },[])
function onSubmit(data){
        return setResult(()=> {
            JSON.stringify(data);
            console.log({data});
        });
}
  return (
    <div>
        {/* <button onClick={sendRequest}>Press me</button> */}
        <form onSubmit={handleSubmit(onSubmit)} id='centered'>
            <Controller
                render={({Field}) => <DatePicker{...Field}/>}
            />
            <select {...register("company")}>
                <option value="" disabled selected hidden>Выбор компании</option>
                <option value="A">nrekto</option>
                <option value="B">NEGOGL</option>
            </select>
            <select {...register("itterations")}>  
                <option value="" disabled selected hidden>Итерации обучения</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
            </select>
            <input type="submit"/>
        </form>
    </div>
  );
}

