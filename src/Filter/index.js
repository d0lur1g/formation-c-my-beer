import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { number, func } from "prop-types";

import { useCategories } from "../hooks";

export default function Filter({ category, setCategory }) {
  const { isLoading, categories } = useCategories();

  return (
    <FormControl sx={{ width: 400, marginBottom: 3 }}>
      <InputLabel id="filter-label">Catégories</InputLabel>
      <Select
        labelId="filter-label"
        value={category}
        label="Catégorie"
        onChange={setCategory}
        disabled={isLoading}
      >
        {categories?.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Filter.propTypes = {
  category: number,
  setCategory: func,
};
