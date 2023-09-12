import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Header(props) {
  const style = {
    fontSize: "xxx-large",
    fontFamily: "monospace",
    color: "#fff",
    height: "60px",
    backgroundColor: "#1e2a38",
  };

  return (
    <>
     <AppBar style={style} position="static">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            HeIn
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}