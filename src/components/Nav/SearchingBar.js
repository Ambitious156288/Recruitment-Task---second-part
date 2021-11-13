import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SearchingBar = ({ location, setLocation }) => {
  const updateCity = e => setLocation(e.target.value);

  return (
    <FormControl sx={{ m: 3, minWidth: 250 }}>
      <Select value={location} onChange={updateCity} displayEmpty>
        <MenuItem value="">
          <em>Select City</em>
        </MenuItem>
        <MenuItem value="London">London</MenuItem>
        <MenuItem value="München">München</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SearchingBar;
