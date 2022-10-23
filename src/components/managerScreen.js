import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function ManagerScreen() {

    return (

        <div>
            <label>
                בחר סטטוס ההזמנות הרצויות
            </label>
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">סטטוס הזמנה</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={() => { }}
                    label="Age"
                >
                    <MenuItem value={10}>חדש</MenuItem>
                    <MenuItem value={20}>בהדפסה</MenuItem>
                    <MenuItem value={30}>מוכן</MenuItem>
                </Select>
            </FormControl>
           
        </div>

    )

}

export default ManagerScreen;