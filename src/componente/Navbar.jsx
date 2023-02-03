import { useState } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo, Logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        top: "0",
        zIndex: "9999",
        justifyContent: "space-between",
        marginBottom: "2rem",
        background: "black",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
