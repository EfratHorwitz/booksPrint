import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import { connect } from 'react-redux';

function SelectGeneric(props){

    return (
        <div>
            <label>
                :צבע הדפסה
            </label><br /><br />
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">:צבע הדפסה</InputLabel>
                < Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({ "color": e.target.value })}
                    label="Age"
                >
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem> */}
                    
                    {printColorOptions?.map(pc => {return <MenuItem value={pc.name}>{pc.name}</MenuItem>})}
                    {/* <MenuItem value={10}>שחור לבן</MenuItem>
                    <MenuItem value={20}>צבעוני</MenuItem> */}
                </Select>
            </FormControl>
        </div>
    )



}