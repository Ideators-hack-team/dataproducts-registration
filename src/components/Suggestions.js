import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

const Suggestions = ({data}) => {
  const onInputChange = (e) => {
    console.log(e);
  }

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <div class="dropdown">
          <input type="text" onChange={onInputChange} defaultValue={data} name="pdElement" className="form-control"/>
	      </div>
      </FormControl>
    </Box>
  );
}

export default Suggestions;