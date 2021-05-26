import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom"

function UserScreenHard() {


    return (
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
export default UserScreenHard;

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