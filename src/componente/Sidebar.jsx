import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

const Sidebar = ({ selectedCatogory, setselectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowX: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCatogory && "red",
          color: "white",
        }}
        key={category.name}
        onClick={() => setselectedCategory(category.name)}
      >
        <span
          style={{
            color: category.name === selectedCatogory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCatogory ? "1" : "0.8",
            color: category.name === selectedCatogory ? "white" : "black",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
