import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Container,
  ImageList,
  ImageListItem,
  TextField,
  Button,
} from "@mui/material";
import imagesData from "./imagesData.json";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const App = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <CameraAltIcon />
          <Typography variant="h5">Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "70px", textAlign: "center" }}>
        <Typography variant="h2">Our Latest Version of Photography</Typography>
        <Typography>
          Pleasure to take your photos as well.Please fill the below form for
          any invite requests
        </Typography>
      </Container>
      <Container>
        <ImageList rowHeight={200} cols={3}>
          {imagesData.map((image0bj) => (
            <ImageListItem key={image0bj.id} cols={1}>
              <img src={image0bj.img} alt={image0bj.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <center>
        <Container>
          <Typography variant="h4">CONTACT FORM</Typography>
          <form>
            <TextField
              style={{ width: "500px", margin: "5px" }}
              type="text"
              label="Name"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "500px", margin: "5px" }}
              type="email"
              label="Email"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "500px", margin: "5px" }}
              type="text"
              label="Proposal"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: "500px", margin: "5px" }}
              type="text"
              label="Address"
              variant="outlined"
            />
            <br />
            <Button variant="contained" color="inherit">
              Submit
            </Button>
          </form>
        </Container>
      </center>
    </div>
  );
};

export default App;
