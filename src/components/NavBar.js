import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Autocomplete from "./Autocomplete";

export default function NavBar() {
  const data = [
    {
      bookId: 1,
      title: "something",
      author: "ayush",
      genre: "horror",
      description: "horror drama",
      price: 350.0,
      availableForRent: true,
      availableForSale: true,
    },
    {
      bookId: 2,
      title: "something",
      author: "ayush",
      genre: "horror",
      description: "horror drama",
      price: 350.0,
      availableForRent: true,
      availableForSale: true,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Book Store
          </Typography>
          <Autocomplete />
          <Button color="inherit" href="/">
            Hello
          </Button>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit">Orders</Button>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
