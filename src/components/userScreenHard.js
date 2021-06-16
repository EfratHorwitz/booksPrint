import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import saveOrderDetails from '../actions/saveOrderDetails';

function UserScreenHard() {

    const history = useHistory();
    const[order, setOrder] = useState();


    function endChoose() {
        props.
        history.push("/registration");
    }

    const setParam = (key,val) => {
        setOrder({...order, [key]: val})
        }

    return (
        <div>
            <div>
                <label>
                    :גודל
                </label><br /><br />
                <FormControl variant="outlined" onChange={(e) => setParam("size", e.target.value)}>
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
                <FormControl variant="outlined" onChange={(e) => setParam("format", e.target.value)}>
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
            <label>מספר עמודים</label>
            <input type="number" onChange={(e) => setParam("pagesNum", e.target.value)}/>
            <div>
                <label>
                    ":סוג נייר"
                </label><br /><br />
                <FormControl variant="outlined" onChange={(e) => setParam("paperType", e.target.value)}>
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
                <FormControl variant="outlined" onChange={(e) => setParam("color", e.target.value)}>
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
            <div>
                <label>:כמות</label>
                <input type="number" onChange={(e) => setParam("quantity", e.target.value)}/>
            </div>
            <Button variant="contained" color="primary" size="large" onClick={endChoose}>המשך</Button>

        </div>


    )
}

const mapStateToProps = (state) => {
    return {
        order: state.order
    };
};

export default connect(mapStateToProps, { saveOrderDetails })(UserScreenHard);

// export default UserScreenHard;

// 1. גודל (כאן תבוא רשימה נגללת עם כל אפשרויות הגדלים המצויים)
// 2. פורמט (רגיל/אלבומי)
// 3. מס עמודים (נוסחה שתעגל את המספר למס העמודים המתאים לספר הקרוב ביותר)
// 4. סוג הנייר (רשימה)
// 5. הדפסה: ש/ל או צבעוני
// 6. סוג הכריכה (בכריכה קשה סקאי או למינציה, בכריכה רכה- צבעוני או ש/ל ואיזה למינציה מט/מבריק)
// 7. מה יש על הכריכה: בסקאי כמה ואיזה הטבעות (רשימה), בלמינציה האם כמה ואיזה השבחות
// 8. תוספות (חלונות לסימון וי פורזצ מודפס, סמניה (1 או 2), צבע (1 או 2) קופסה, אריזה
// 9. כמות
// 10. זמן נדרש (אם הלקוח רוצה זמן קצר במיוחד זה משפיע על המחיר)