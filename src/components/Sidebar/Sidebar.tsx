import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

const categories = [
  { name: "All", path: "/" },
  { name: "Motivational", path: "/quotes/category/motivational" },
  { name: "Star Wars", path: "/quotes/category/star-wars" },
  { name: "Saying", path: "/quotes/category/saying" },
  { name: "Humour", path: "/quotes/category/humour" },
  { name: "Famous People", path: "/quotes/category/famous-people" },
];

const Sidebar: React.FC = () => {
  return (
    <Box sx={{ display: "grid" }}>
      {categories.map((category) => (
        <NavLink key={category.name} to={category.path}>
          {category.name}
        </NavLink>
      ))}
    </Box>
  );
};

export default Sidebar;
