import { useState } from 'react'
import './App.css'
import axios from 'axios'
import DatePicker from 'react-date-picker';


function App() {
  const [upper, setUpper] = useState('')
  const [lower, setLower] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(upper,lower,date)

    const data = {
      Upper : upper,
      Lower : lower,
      Date : date,
    }
    axios.post('https://sheet.best/api/sheets/e3809f3c-9530-4813-9f44-9d6cd87f5f1b',data).then((response)=>{
      console.log(response);
      setUpper(''),
      setLower(''),
      setDate('')
    })
  }

  return (
    <>
       <h1>ตรวจความดัน</h1>
     <form  style={{display:"grid"}} autoComplete='off'>
     <h2 style={{textAlign:"left"}}>ค่าบน </h2>
        <input placeholder="ค่าบน" style={{padding:"12px" , borderRadius:"12px", border:"none"}} type='number' onChange={(e)=>setUpper(e.target.value)} value={upper}/>
        <h2 style={{textAlign:"left"}}>ค่าล่าง</h2>
        <input placeholder="ค่าล่าง" style={{padding:"12px" , borderRadius:"12px", border:"none"}} type='number' onChange={(e)=>setLower(e.target.value)} value={lower}/>
        <input type='date'onChange={(e)=>setDate(e.target.value)} value={date} style={{marginTop:"24px"}}  placeholder='กรุณาเลือกวันที่'/>
     </form>
        
      
      <div style={{marginTop:"24px"}}>
        <button type='submit' onClick={handleSubmit}>บันทึก</button>
      </div>
    </>
  )
}

export default App
