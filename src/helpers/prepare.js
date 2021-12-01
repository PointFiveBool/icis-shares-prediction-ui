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
export default prepareJSON;