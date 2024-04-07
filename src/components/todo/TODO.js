import { Button, TextField, Checkbox } from "@mui/material"
import Paper from "@mui/material/Paper"

function TODO() {
  return (
    <Paper
      sx={{ padding: "20px", display: "flex", alignItems: "center", marginBottom:"10px", fontFamily:'Test' }}
      elevation={12}
    >
      <Checkbox />
      <TextField
        sx={{ margin: "20px" }}
        id="outlined-basic"
        label="Им'я справи"
        variant="outlined"
      />
      <Button variant="contained">Видалити</Button>
    </Paper>
  )
}

export default TODO
