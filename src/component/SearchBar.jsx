import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Search from "@mui/icons-material/Search";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";

const SearchBar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text){
      console.log(text)
      navigate(`/search/${text}`)
      setText('')
    }

  }
  return (
    <Paper
      elevation={3}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
        <AbcOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
