'use client';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

type SortOptionsProps = {
  onSortChange: (sortBy: string) => void;
};

const SortOptions = ({ onSortChange }: SortOptionsProps) => {
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    onSortChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select
        labelId="sort-by-label"
        onChange={handleSortChange}
        defaultValue=""
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="price">Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortOptions ;
