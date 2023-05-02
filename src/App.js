import React from 'react';
import './App.css';
import Form from "./components/Form"
import Main from "./components/Main"

function App() {

  const [dataFromUser, setDataFromUser] = React.useState({
    year: -1,
    month: -1,
    day: -1,
    isSubmit: false,
    isYearWrong: false,
    isMonthWrong: false,
    isDayWrong: false,
    isYearNull: false,
    isMonthNull: false,
    isDayNull: false
  })

  const [ageUser, setAgeUser] = React.useState({
    year: -1,
    month: -1,
    day: -1
  })

  

  return (
    <div className='container'>
      <Form 
        setData= {setDataFromUser}
        getData= {dataFromUser}
        getAgeUser= {ageUser}
        setAgeUser= {setAgeUser}
      />
      <Main
        getAgeUser= {ageUser}
        getData= {dataFromUser}
      />
    </div>
  );
}

export default App;
