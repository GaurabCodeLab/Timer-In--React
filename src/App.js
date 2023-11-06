import { useEffect, useState} from 'react';

function App(){
const [time, setTime] = useState(0);
let id;
useEffect(()=>{
  id = setInterval(()=>{
    setTime(time + 1);
  }, 1000)
  
  return ()=>{
   console.log(`clean up function run with value : ${time}`);
   clearInterval(id);
  }
}, [time])

  return (
    <>
    <h1>Timer : {time}</h1>
    <button onClick={()=>setTime(0)}>Click to start</button>
    <button onClick={()=>clearInterval(id)}>Click to stop</button>
    </>
  )
}


export default App;
