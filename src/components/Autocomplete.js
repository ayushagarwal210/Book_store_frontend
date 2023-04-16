import { Search, SearchOffOutlined } from "@mui/icons-material";
import { Button, Input, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SearchIcon from "@mui/icons-material/Search";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Container, Form } from "react-bootstrap";

const Autocomplete = () => {
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
    {
      bookId: 3,
      title: "anything",
      author: "yash",
      genre: "comedy",
      description: "drama",
      price: 250.0,
      availableForRent: true,
      availableForSale: true,
    },
    {
      bookId: 4,
      title: "yasha",
      author: "yasha",
      genre: "comedy",
      description: "drama",
      price: 150.0,
      availableForRent: true,
      availableForSale: true,
    },
  ];
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const onSearch = (searchItem) => {
    setSearch(searchItem);
    window.location.replace(`/search/${search}`);
  };
  const onDropdownClick = (searchItem) => {
    window.location.replace(`/search/${searchItem}`);
  };
  const searchInput = (e) => {
    if (e.target.value.length >= 1) setShowDropdown(true);
    else setShowDropdown(false);
    setSearch(e.target.value);
  };
  return (
    <div>
      <Form>
        <TextField
          className="m-2"
          variant="standard"
          type="text"
          value={search}
          placeholder="Search here...."
          onChange={searchInput}
        />
        <Button
          color="inherit"
          variant="outlined"
          //   startIcon={<SearchIcon />}
          onClick={() => onSearch(search)}
        >
          Search
        </Button>

        {showDropdown && (
          <Dropdown
            style={{
              position: "absolute",
              backgroundColor: "#454140", // Set background color to white
              borderRadius: "4px", // Set border radius to create rounded corners
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)", // Add a box shadow for depth
              padding: "3px", // Add padding to create spacing between items
              zIndex: "9999",
              minWidth: "200px",
            }}
          >
            {data
              .filter((item) => {
                const searchItem = search.toLowerCase();
                const title = item.title.toLowerCase();
                return title.indexOf(searchItem) > -1;
              })
              .slice(0, 6)
              .map((item) => (
                <Dropdown.Item
                  key={item.bookId}
                  onClick={() => onDropdownClick(item.title)}
                  href="#/action-1"
                  style={{
                    // Add additional styling for each item
                    padding: "5px 10px", // Add padding to create spacing within each item
                  }}
                >
                  {item.title}
                </Dropdown.Item>
              ))}
          </Dropdown>
        )}
      </Form>
    </div>
  );
};

export default Autocomplete;
