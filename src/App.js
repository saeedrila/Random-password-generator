import React, { useState } from 'react';
import { 
  Button,
  Box,
  TextField,
  Slider,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import '@mui/material/Slider';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//   },
// });


function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [copyStatus, setCopyStatus] = useState(false);

  const generatePassword = () => {
    console.log("Password created!")

    let charset = "";
    let newPassword = "";
    let newPasswordLength = passwordLength;
    const symbols = "!@#$%^&*()";
    const numbers = "0123456789";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (useSymbols) {
      charset += symbols;
      newPasswordLength -= 1;
      newPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    if (useNumbers) {
      charset += numbers;
      newPasswordLength -= 1;
      newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if (useLowerCase) {
      charset += lowerCase;
      newPasswordLength -= 1;
      newPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }
    if (useUpperCase) {
      charset += upperCase;
      newPasswordLength -= 1;
      newPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    }

    for (let i = 0; i < newPasswordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    setCopyStatus(false)
  };
  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    console.log("Copied to clipboard")
    setCopyStatus(true)
};
const handleSwitchChange = (label) => {
  switch (label) {
    case 'Symbols':
      setUseSymbols(!useSymbols);
      break;
    case 'Numbers':
      setUseNumbers(!useNumbers);
      break;
    case 'Lower Case':
      setUseLowerCase(!useLowerCase);
      break;
    case 'Upper Case':
      setUseUpperCase(!useUpperCase);
      break;
    default:
      break;
  }
};


  return (
    <Box
      sx={{
        marginTop: 8,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
        width: 350,
        gap: 2,
        padding: 2,
        backgroundColor: '#ffc37e',
      }}
    >
      {/* Title */}
      <Typography variant="h5" gutterBottom>
        Random Password Generator
      </Typography>

      {/* Text Field and Copy Button on the same line */}
      {password && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField value={password} size="small"/>
          <Button variant="contained" endIcon={<ContentCopyIcon />} onClick={copyToClipboard}>
            {copyStatus? 'Copied': 'Copy'}
          </Button>
        </Box>
      )}
      
      {/* Generate Password Button */}
      <Button variant="contained" endIcon={<PlayCircleFilledWhiteIcon/>} onClick={generatePassword}>
        Generate Password
      </Button>

      {/* Password Length Slider */}
      <Typography variant="body1" gutterBottom>
        Password Length
      </Typography>
      <Box sx={{ width: 300, mt: 1 }}>
        <Slider
          aria-label="Default"
          value={passwordLength}
          onChange={(event, value) => {
            setPasswordLength(value)
            setPassword("")
          }}
          step={1}
          min={6}
          max={40}
          valueLabelDisplay="on"
        />
      </Box>

      {/* Switches */}
      <TableContainer component={Paper}>
        <Table aria-label="caption table">
          <TableBody>
            {[
              { label: 'Symbols', checked: useSymbols, setter: setUseSymbols },
              { label: 'Numbers', checked: useNumbers, setter: setUseNumbers },
              { label: 'Lower Case', checked: useLowerCase, setter: setUseLowerCase },
              { label: 'Upper Case', checked: useUpperCase, setter: setUseUpperCase },
            ].map((row, index, array) => (
              <TableRow key={row.label}>
                <TableCell align="left">{row.label}</TableCell>
                <TableCell align="right">
                  <Switch 
                    checked={row.checked}
                    disabled={array.filter((item) => item.checked).length === 1 && row.checked}
                    color="success"
                    onChange={() => {
                      if (row.checked && array.filter((item) => item.checked).length === 1) {
                        return;
                      }
                      handleSwitchChange(row.label);
                      setPassword("");
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
