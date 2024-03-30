import React from "react";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline } from "@mui/material";

function App(){
  return (
    <>
      <CssBaseline />
      <Header1 />
      <Header2 />
      <Header3 />
      <Box bgcolor="#F6F6F6">
      </Box>
    </>
  );
}

export default App;
