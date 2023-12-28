import { useState } from 'react'

import './App.css'

function App() {
 

  return (
   <div>
<HighOrderComponentRed cmp={Counter}/>
<HighOrderComponentGreen cmp={Counter}/>
<HighOrderComponentBlue cmp={Counter}/>
   </div>
  )
}
function HighOrderComponentRed(props){
  return(
  <h2 style={{backgroundColor:'red'}}><props.cmp/></h2>
  )
}
function HighOrderComponentGreen(props){
  return(
  <h2 style={{backgroundColor:'green'}}><props.cmp/></h2>
  )
}
function HighOrderComponentBlue(props){
  return(
  <h2 style={{backgroundColor:'blue'}}><props.cmp/></h2>
  )
}
function Counter(){
  const [count, setCount] = useState(0)
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  )
}

export default App
