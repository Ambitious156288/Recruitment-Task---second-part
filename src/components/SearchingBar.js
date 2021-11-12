import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SearchingBar = () => {
  const [location, setLocation] = useState('');

  const handleChange = e => setLocation(e.target.value);

  return (
    <FormControl sx={{ m: 1, minWidth: 250 }}>
      <Select value={location} onChange={handleChange} displayEmpty>
        <MenuItem value="">
          <em>Select City</em>
        </MenuItem>
        <MenuItem value={1}>London</MenuItem>
        <MenuItem value={2}>München</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SearchingBar;
