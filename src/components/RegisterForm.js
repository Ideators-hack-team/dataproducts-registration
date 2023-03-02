import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const RegisterForm = ({fileName}) => {
  return (
    <Box className='container'>
      <h4>Manage a Data Set</h4>
      <hr/>
      <Box style={{margin: '0 0 50px 0'}}>
        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Data Name"
            value={fileName}
            style={{margin: '0 20px 0 0'}}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            style={{width: '400px'}}
            value={fileName ? `This is ${fileName} type data`: null}
            defaultValue="Data Description"
          />
      </Box>
    </Box>
  );
}

export default RegisterForm;