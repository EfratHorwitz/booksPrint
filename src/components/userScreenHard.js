import React from 'react';
import { connect } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles';
// import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { saveOrderDetails } from '../actions';
import BookSize from './bookSize';
import BookFormat from './bookFormat';
import NumPages from './numPages';
import PrintColor from './printColor';
import NumOfBooks from './numOfBooks';
import PaperType from './paperType';
import BindingTypeHard from './bindingTypeHard';
import printOptions from './printOptions';
import numOfBooks from './numOfBooks';

function UserScreenHard(props) {

    const history = useHistory();
    // const [order, setOrder] = useState();


    function endChoose() {
        debugger;
        if(localStorage.getItem('token') != null)
            history.push("/tmpAfterReg");
            else(
                history.push("/registration")
            );
    }

    // const setParam = (key, val) => {
    //     setOrder({ ...order, [key]: val })
    // }

    function calcCost(){
        let totalSum = 0;
        let luchotNum = 0;
        let luchot = 0;
        let print = 0;
        let paper = 0;
        let paper1 = 0;
        let dekel = 0;
        let tadbik = 0;
        let additions = 0;
        let kat = 0;
        let line = 0;
        let gilyonotNum = 0;
        var format1 = 0;
        let format2 = 0;
        let grm = 0;
        let tonCost = 0;

        debugger;
        switch(props.order.size) {
            case ('24*35' || '22*31' || '21*28' ):
                format1 = 8;
                format2 = 16;
            return ;
            case ('16.5*24.5' || '15*23' || '14*21' ):
                format1 = 16;
                format2 = 32;
            return ;
            case ('12*17' || '11*15' || '10*14' ):
                format1 = 32;
                format2 = 64;
            return ;
        }
        luchotNum = (props.order.NumPages) / format1;
        gilyonotNum = (props.order.NumPages) / format2;

        switch(props.order.size) {
            case ('24*35' || '22*31' || '21*28' ):
                luchot = 2832;
            return ;
            case ('16.5*24.5' || '15*23' || '14*21' ):
                luchot=1416;
            return ;
            case ('12*17' || '11*15' || '10*14' ):
                luchot = 708;
            return ;
        }

        if(props.order.color == 'שחור לבן'){            
            luchot = luchot * luchotNum;
        }
        else{
            luchot = luchot * luchotNum * 4;
        }
          
        switch(props.order.size) {
            case ('24*35' || '22*31' || '21*28' ):
                print = 2832;
            return ;
            case ('16.5*24.5' || '15*23' || '14*21' ):
                print=1416;
            return ;
            case ('12*17' || '11*15' || '10*14' ):
                print = 708;
            return ;
        }

        print = (props.order.NumOfBooks) * print * luchotNum;

        switch(props.order.size) {
            case ('24*35' ||  '16.5*24.5' || '12*17' ):
                paper = 7000;
            return ;
            case ('22*31' || '15*23' || '11*15' ):
                paper = 5985;
            return ;
            case ('21*28' || '14*21' || '10*14' ):
                paper = 5073;
            return ;            
        }

        switch(props.order.PaperType) {
            case ('נטול עץ לבן 70 גרם' ):
                grm = 70;
                if (paper = 7000){
                    tonCost = 306.5;
                }
                else if (paper = 5985){
                    tonCost = 262;
                }
                else{
                    tonCost = 222
                }
            return ;
            case ('נטול עץ לבן 80 גרם' ):
                grm = 80;
                if (paper = 7000){
                    tonCost = 350.2;
                }
                else if (paper = 5985){
                    tonCost = 299.4;
                }
                else{
                    tonCost = 253.8
                }
            return ;
            case ('נטול עץ לבן 90 גרם' ):
                grm = 90;
                if (paper = 7000){
                    tonCost = 394;
                }
                else if (paper = 5985){
                    tonCost = 336.8;
                }
                else{
                    tonCost = 285.5
                }
            return ; 
            case ('נטול עץ לבן 110 גרם' ):
                grm = 110;
                if (paper = 7000){
                    tonCost = 481.5;
                }
                else if (paper = 5985){
                    tonCost = 411.7;
                }
                else{
                    tonCost = 348.9
                }
            return ;
            case ('נטול עץ קרם 70 גרם' ):
                grm = 70;
                if (paper = 7000){
                    tonCost = 352.7;
                }
                else if (paper = 5985){
                    tonCost = 301.5;
                }
                else{
                    tonCost = 255.6
                }
            return ;
            case ('נטול עץ קרם 80 גרם' ):
                grm = 80;
                if (paper = 7000){
                    tonCost = 403;
                }
                else if (paper = 5985){
                    tonCost = 344.6;
                }
                else{
                    tonCost = 292.1
                }
            return ;
            case ('נטול עץ קרם 90 גרם' ):
                grm = 90;
                if (paper = 7000){
                    tonCost = 453.42;
                }
                else if (paper = 5985){
                    tonCost = 387.7;
                }
                else{
                    tonCost = 326.6
                }
            return ;
            case ('נטול עץ קרם 110 גרם' ):
                grm = 110;
                if (paper = 7000){
                    tonCost = 554.2;
                }
                else if (paper = 5985){
                    tonCost = 473.8;
                }
                else{
                    tonCost = 401.6
                }
            return ;
            case ('נטול עץ קרם 60 מיוחד' ):
                grm = 60;
                tonCost = 570;
            return ;
            case ('כרומו 64 גרם' ):
                grm = 64;
                tonCost = 550;
            return ;
            case ('כרומו 90 גרם' ):
                grm = 90;
                tonCost = 600;
            return ;
            case ('כרומו 105 גרם' ):
                grm = 105;
                tonCost = 610;
            return ;
            case ('כרומו 115 גרם' ):
                grm = 80;
                if (paper = 7000){
                    tonCost = 503.4;
                }
                else if (paper = 5985){
                    tonCost = 430.4;
                }
                else{
                    tonCost = 364.8;
                }
            return ;
            case ('כרומו 130 גרם' ):
                grm = 80;
                if (paper = 7000){
                    tonCost = 591;
                }
                else if (paper = 5985){
                    tonCost = 505.3;
                }
                else{
                    tonCost = 428.3;
                }
            return ;
            case ('בייבל לבן 60' ):
                grm = 60;
                tonCost = 530;
            return ;
            case ('בייבל לבן 50' ):
                grm = 50;
                tonCost = 540;
            return ;
            case ('בייבל קרם 60' ):
                grm = 60;
                tonCost = 550;
            return ;  
            case ('בייבל קרם 50' ):
                grm = 50;
                tonCost = 560;
            return ;          
        }

        paper1 = (paper * grm * tonCost * format2 * numOfBooks) / 100;

        if(props.order.bindingType == 'סקאי'){
            if(paper == 7000){
                switch(format1) {
                    case (8):
                        dekel = 5.5;
                    return ;
                    case (16):
                        dekel = 2.74;
                    return ;
                    case (32):
                        dekel = 1.98;
                    return ;            
                }
            }
            else if(paper == 5985){
                switch(format1) {
                    case (8):
                        dekel = 4.45;
                    return ;
                    case (16):
                        dekel = 2.65;
                    return ;
                    case (32):
                        dekel = 1.98;
                    return ;            
                }
            }
            else{
                switch(format1) {
                    case (8):
                        dekel = 4.36;
                    return ;
                    case (16):
                        dekel = 2.34;
                    return ;
                    case (32):
                        dekel = 1.9;
                    return ;            
                }
            }

        }
        else{
            if(paper == 7000){
                switch(format1) {
                    case (8):
                        dekel = 2.8;
                    return ;
                    case (16):
                        dekel = 1.4;
                    return ;
                    case (32):
                        dekel = 1.15;
                    return ;            
                }
            }
            else if(paper == 5985){
                switch(format1) {
                    case (8):
                        dekel = 2.2;
                    return ;
                    case (16):
                        dekel = 1.4;
                    return ;
                    case (32):
                        dekel = 1.15;
                    return ;            
                }
            }
            else{
                switch(format1) {
                    case (8):
                        dekel = 2.15;
                    return ;
                    case (16):
                        dekel = 1.3;
                    return ;
                    case (32):
                        dekel = 1.1;
                    return ;            
                }
            }
        }

        dekel = dekel * numOfBooks;
        
        switch(props.order.size) {
            case ('24*35' || '22*31' || '21*28'||'10*14' ):
                kat = 1330;
                line = 1400;
            return ;
            case ('16.5*24.5' || '15*23' || '14*21'||'12*17' || '11*15' ):
                format1 = 2880;
                format2 = 1850;
            return ;
        }

        //חישוב כללי

        totalSum = luchot + print + paper + dekel + kat + line;

        // let totalSum = 0;
        // let luchotNum = 0;
        // let luchot = 0;
        // let print = 0;
        // let paper = 0;
        // let paper1 = 0;
        // let dekel = 0;
        // let tadbik = 0;
        // let additions = 0;
        // let kat = 0;
        // let line = 0;
        // let gilyonotNum = 0;
        // var format1 = 0;
        // let format2 = 0;
        // let grm = 0;
        // let tonCost = 0;


    }

    return (
        <div>
            <br></br>
            <div>
                <BookSize/>
            </div><br></br>
            <div>
                <BookFormat/>
            </div><br></br>
            <div>
                <NumPages/>
            </div><br></br>
            <div>
                <PrintColor/>
            </div><br></br>
            <div>
                <NumOfBooks/>
            </div><br></br>
            <div>
                <PaperType/>
            </div><br></br>
            <div>
                <BindingTypeHard/>
            </div><br></br>

            <Button variant="contained" color="primary" size="large" onClick={endChoose} > המשך </Button>
            {/* endChoose */}

            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}
            
        </div>
    )
}

const mapStateToProps = (state) => {debugger
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