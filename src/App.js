import "./App.css"
import { Button, TextField } from "@mui/material"
import Paper from "@mui/material/Paper"
import TODO from "./components/todo/TODO"

function App() {
  const list  = [1, 2]
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Paper sx={{padding: "1rem", display:"flex", alignItems:"center", marginBottom:"20px"}} elevation = {8}>
        <TextField sx={{margin: "20px"}} id="outlined-basic" label="Им'я справи" variant="outlined" />
        <Button variant="contained">Нова справа</Button>
      </Paper>
      {list.map(el => {
        return(<TODO/>)
      })}
    </div>
  )
}

export default App
