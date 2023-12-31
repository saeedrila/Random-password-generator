# Random Password Generator
This project is a random password generator app created using ReactJS and Material UI.
### Features:
This app helps users to create a random password of required length. Length range hardcoded is from 6 to 40 charectors.
The password can consist of symbols, numbers, lower case charectors, and upper case charectors.
Range of symbols: !@#$%^&*()
Range of numbers: 0123456789
Range of lower case charectors: abcdefghijklmnopqrstuvwxyz
Range of upper case charectors: ABCDEFGHIJKLMNOPQRSTUVWXYZ

### Default values:
Password length: 15
Use of symbols: True
Use of numbers: True
Use of lower case charectors: True
Use of upper case charectors: True

### Working:
When ever the customer click the 'Generate Password' button, a newly generated password will appear on a text field able the 'Generate Password' button.
The 'Copy' button can be clicked to copy the newly generated password to the clipboard. When ever the customer click on the 'Copy' button, it will change to 'Copied'.
When ever the customer change any of the password generation parameter, the 'Password' text field and 'Copy' button will disappear.
The customer has to switch-on atleast one of the non-length parameters. If the customer switch-off three parameters, the remaining switch will be automatically disabled.


## Steps followed
Create a new react app
```
npx create-react-app
```
Install Material UI (MUI)
```
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## To run the app in development mode
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## To host the page using versel
Go to vercel, import the github repository, and build.