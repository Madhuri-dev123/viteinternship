import './App.css'

function App(){
    const student =        [
   {'firstname':'madhuri','lastname':'gunnapaneni',gender:'female'},
   {'firstname':'manasa','lastname':'bathina',gender:'female'},
   {'firstname':'vandana','lastname':'gunnapaneni',gender:'female'},
   {'firstname':'gowri','lastname':'undavalli',gender:'female'},
   {'firstname':'devagya','lastname':'undavalli',gender:'male'},
   {'firstname':'nevas','lastname':'undavalli',gender:'male'},
   
   
   
   

]
  return(
  <>
  <button onClick={()=>{alert("hello button")}}>my btn</button>

  <table border={2}>
    <thead>
      <tr>
      <th>firstname</th>
      <th>lastname</th>
      <th>Gender</th>
        </tr>
    </thead>
    <tbody>
      {
        student.map((student)=>{
          return(<tr className={student.gender==='male'?"male":'female'}> 
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.gender}</td>
          </tr>)

        })
        
      }
    </tbody>

  </table>

  
 




     

      </>
  )
  
}
export default App