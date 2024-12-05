'use client';
import { Slider, Box, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';

type FiltersProps = {
  setPriceRange: (value: [number, number]) => void;
  setCategories: (category: string) => void;
};

const Filters = ({ setPriceRange, setCategories }: FiltersProps) => {
  const [price, setPrice] = useState<[number, number]>([0, 250]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Electronics");

  const handlePriceChange = (
    event: Event | React.SyntheticEvent,
    newValue: number | number[]
  ) => {
    if (Array.isArray(newValue)) {
      const range = newValue as [number, number];
      setPrice(range);
      setPriceRange(range);
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setCategories(category);
  };

  return (
    <Box>
      <Typography variant="h6">Price Range</Typography>
      <Slider
        value={price}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${value}`}
        min={0}
        max={1000}
      />
      <Typography variant="h6">Categories</Typography>
      <RadioGroup value={selectedCategory} onChange={handleCategoryChange}>
        <FormControlLabel
          control={<Radio />}
          value="Electronics"
          label="Electronics"
        />
        <FormControlLabel
          control={<Radio />}
          value="Cat"
          label="Cat"
        />
      </RadioGroup>
    </Box>
  );
};

export default Filters;
