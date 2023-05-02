import React from "react"


export default function Form(props){

    function handleChange(event){
        props.setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function isValidDate(d) {
        return d instanceof Date && !isNaN(d);
      }


    function handleClick(){
        var now = new Date(); 
        var currentYear = now.getYear();  
        var currentMonth = now.getMonth();  
        var currentDate = now.getDate();
        if(props.getData.year < 1 || props.getData.month < 1 || props.getData.day < 1 || props.getData.year > now.getFullYear()  || props.getData.month > 12 || props.getData.day > 31){
            props.setData(prev => {
                return {
                    ...prev,
                    isDayNull: (prev.day === -1 || prev.day === "" ? true : false),
                    isMonthNull: (prev.month === -1 || prev.month === "" ? true : false),
                    isYearNull: (prev.year === -1 || prev.year === "" ? true : false),
                    isDayWrong: (prev.day > 31 || prev.day < 1 ? true : false),
                    isMonthWrong: (prev.month > 12 || prev.month < 1 ? true : false),
                    isYearWrong: (prev.year > now.getFullYear() || prev.year < 1 ? true : false)
                }
            })
            props.setAgeUser({
                year: -1,
                month: -1,
                day: -1
            })       
            return;
        }
        else{

            var dob = new Date(props.getData.year,props.getData.month,props.getData.day);

            var dobYear = dob.getYear();
            var dobMonth  = dob.getMonth();
            var dobDate  = dob.getDate();
            let checkYear = parseInt(props.getData.year);
            let checkMonth = parseInt(props.getData.month);
            let checkDay = parseInt(props.getData.day);



            if(!isValidDate(dob) || (checkDay > 30 && [4,6,9,11].includes(checkMonth)) || (checkMonth === 2 && checkDay > 29 && checkYear % 4 === 0) || (checkMonth === 2 && checkDay > 28 && checkYear % 4 !== 0)){
                props.setData(prev => {
                    return {
                        ...prev,
                        isDayWrong: true,
                    }
                })
                props.setAgeUser({
                    year: -1,
                    month: -1,
                    day: -1
                }) 
                return;
            }



            props.setData(prev => {
                return {
                    ...prev,
                    isDayNull: false,
                    isMonthNull: false,
                    isYearNull: false,
                    isDayWrong: false,
                    isMonthWrong: false,
                    isYearWrong: false
                }
            })



            

                //get the current date from the system  
             
            //extract the year, month, and date from current date  
            
            
            //declare a variable to collect the age in year, month, and days  
            var age = {};  
            
            
            //get years  
            var yearAge = currentYear - dobYear;  
            
            //get months  
            if (currentMonth >= dobMonth)  
            //get months when current month is greater  
            var monthAge = currentMonth - dobMonth;  
            else {  
            yearAge--;  
            monthAge = 12 + currentMonth - dobMonth;  
            }  
        
            //get days  
            if (currentDate >= dobDate)  
            //get days when the current date is greater  
            var dateAge = currentDate - dobDate;  
            else {  
            monthAge--;  
            dateAge = 31 + currentDate - dobDate;  
        
            if (monthAge < 0) {  
                monthAge = 11;  
                yearAge--;  
            }  
            }  
            //group the age in a single variable  
            age = {  
            year: yearAge,  
            month: monthAge,  
            day: dateAge  
            };
            props.setData(prev => {
                return {
                    ...prev,
                    isSubmit: true
                }
            })
            props.setAgeUser(age);

        }

    }


    return (
    <div>
        <form className="form">
            <div className="form-day">
                <h4 className={"formText " + (props.getData.isDayNull || props.getData.isDayWrong ? 'active' : '')} >DAY</h4>
                <input type="text" placeholder="DD" onChange={handleChange} name="day" className={"formText " + (props.getData.isDayNull || props.getData.isDayWrong ? 'active' : '')}/>
                <span className={"errorMessage " + (props.getData.isDayNull || props.getData.isDayWrong ? 'active' : '')}>{props.getData.isDayNull ? "This field is required" : "Must be a valid day"}</span>
            </div>

            <div className="form-month">
                <h4 className={"formText " + (props.getData.isMonthNull || props.getData.isMonthWrong ? 'active' : '')}>MONTH</h4>
                <input type="text" placeholder="MM" onChange={handleChange} name="month" className={"formText " + (props.getData.isMonthNull || props.getData.isMonthWrong ? 'active' : '')}/>
                <span className={"errorMessage " + (props.getData.isMonthNull || props.getData.isMonthWrong ? 'active' : '')}>{props.getData.isMonthNull ? "This field is required" : "Must be a valid month"}</span>
            </div>

            <div className="form-year">
                <h4 className={"formText " + (props.getData.isYearNull || props.getData.isYearWrong ? 'active' : '')}>YEAR</h4>
                <input type="text" placeholder="YYYY" onChange={handleChange} name="year" className={"formText " + (props.getData.isYearNull || props.getData.isYearWrong ? 'active' : '')}/>
                <span className={"errorMessage " + (props.getData.isYearNull || props.getData.isYearWrong ? 'active' : '')}>{props.getData.isYearNull ? "This field is required" : "Must be a valid year"}</span>
            </div>
            
        </form>
        <div className="form-submit">
            <hr className='line'></hr>
            <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg></button>
            
        </div>
    </div>
    )
}