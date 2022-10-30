import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';
import Orders from './orders';
import moment from 'moment/moment';


// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import TextField from '@mui/material/TextField';

function ManagerScreen() {

    const [statusRequired, setStatusRequired] = useState("");
    const [fromDateRequired, setFromDateRequired] = useState("");
    const [toDateRequired, setToDateRequired] = useState("");
    const [filteredOrders, setFilteredOrders] = useState([]);
    // const []

    useEffect(() => {
        getOrders();
    }, [])

    function getOrders() {
        ;
        // let curUId = localStorage.getItem("userid");
        let queryString = "";
        if (statusRequired) {
            queryString += `status=${statusRequired}&`
        }
        if (fromDateRequired) {
            queryString += `fromDate=${fromDateRequired}&`
        }
        if (toDateRequired) {
            queryString += `toDate=${toDateRequired}`
        }

        // axios.get("http://localhost:4000/book")
        axios.get(`http://localhost:4000/order?${queryString}`)
            // .then(res => {bindingTypes = res.data}) 
            .then(res => { setFilteredOrders(res.data) })
            // .then(()=>{console.log("conslog", myOrders)})
            .catch(err => { console.log("error:", err) })
    }

    return (

        <div>
            {/* <label>
                בחר סטטוס רצוי:
            </label> */}
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">סטטוס:</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={statusRequired}
                    onChange={(e) => setStatusRequired(e.target.value)}
                    label="Age"
                >
                    <MenuItem value={"real!!!!"} >חדש</MenuItem>
                    <MenuItem value={"print"} >בהדפסה</MenuItem>
                    <MenuItem value={"ready"} >מוכן</MenuItem>
                </Select>
            </FormControl>
            <input type='date' onChange={(e) => setFromDateRequired(e.target.value)} />
            <input type='date' onChange={(e) => setToDateRequired(e.target.value)} />
            <button type='button' onClick={getOrders} >לסינון</button>

            {filteredOrders.length > 0 ?
                <Orders showUser={true} orders={filteredOrders.map(o => {
                    if (o.orderDate) {
                        let d = new Date(o.orderDate);
                        o.orderDateInString = moment(d).format('DD/MM/YYYY');
                    }
                    return o;
                })
                }></Orders> :
                <p>אין נתונים להצגה</p>
            }
        </div >


    )

}

export default ManagerScreen;