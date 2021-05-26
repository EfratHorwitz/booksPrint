import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom"

function UserScreenSoft(){
return(
    <div>
        <div>
                <label>
                    :גודל
                </label><br /><br />
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
            <div>
                <label>
                    :פורמט
                </label><br /><br />
                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
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
                        <MenuItem value={10}>רגיל</MenuItem>
                        <MenuItem value={20}>אלבומי</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <input type="number">מספר עמודים</input>
            <div>
                <label>
                    ":סוג נייר"
                </label><br /><br />
                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">:סוג נייר</InputLabel>
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
            <div>
                <label>
                    :צבע הדפסה
                </label><br /><br />
                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">:צבע הדפסה</InputLabel>
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
                        <MenuItem value={10}>שחור לבן</MenuItem>
                        <MenuItem value={20}>צבעוני</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <input type="number">כמות</input>
    </div>
)
}
export default UserScreenSoft;