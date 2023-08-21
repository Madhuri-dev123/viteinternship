import './App.css'
  function App(){
    const ar = [12,13,14,15,16,7,5,78]
    const arr = ["madhuri","manasa","nevas","devagya"]
    let count = 1;
    function inc (
      count ++;
      console.log(count)
    )
    
  
      return(
      <>
    
       <h1 style={{color:'red'}}>Welcome to JSX</h1>
       <h1 style={{ color:'red',backgroundColor:'green'}}>Welcome to JSX</h1>
       <h1>hello variable</h1>
       <h1>{count}</h1>
       <button onClick={inc}>increment</button>
       <button >decrement</button>
  
       <span style={{display:"flex"}}>
       {
          ar.map((a)=>{
            return <b style={{border:"1px solid",margin:"10px"}}>{a}</b>
          })
        }
        </span>
  
  
  
        <span style={{display:"flex"}}>
       {
          arr.map((a)=>{
            return <b style={{border:"1px solid",margin:"10px"}}>{a}</b>
          })
          
  
        }
        </span>

       
      
    </>
      )
        }export default App


    