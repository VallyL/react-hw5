import "./App.css";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Typography</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Welcome to my application!
        </Typography>

        <Button variant="contained" onClick={handleOpenDialog}>
          Open Modal Window
        </Button>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Modal Window</DialogTitle>
          <DialogContent>
            <DialogContentText>Hello!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
