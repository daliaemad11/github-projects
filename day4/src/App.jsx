import { useEffect } from 'react'
import './App.css'
import Personaldata from './componants/Personaldata/Personal'
import { useState } from 'react'
import Carddetails from './componants/Carddetails/Carddetails'

function App() {
  const [arrayofobject,setarrayofobject]=useState([]);
  useEffect(()=>{
    function callapi(){
  console.log('dalia')
  fetch('http://localhost:3000/activities').then((response)=>{
    return response.json()
  })
  .then((finalresult)=>{
    setarrayofobject(finalresult)
  })
    }
    callapi()
  },[])
  return (
   <main>
    <Personaldata></Personaldata>
    <div id='allcards'>
      {arrayofobject.map((item)=>{
        return(<>

        <Carddetails
         key={item.uniqueid}
         cardname={item.cardname}
        cardtime={item.cardtime}
        cardlogo={item.cardlogo}
        carddate={item.carddate}
        cardcolor={item.cardcolor}
        ></Carddetails>
        </>
         
        ) 
      })}
    </div>

   </main>
  )
}

export default App
