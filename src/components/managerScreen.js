import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function ManagerScreen() {

    return (

        <div>
            <label>
                בחר סטטוס ההזמנות הרצויות
            </label>
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">גודל הספר</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={() => { }}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
           
        </div>

    )

}

export default ManagerScreen;