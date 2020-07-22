# _Currency Exchanger_

#### _Exchange currency all over the world, July 3, 2020_

#### By _**Ben White**_

## Description

_This webpage allows a user to enter an amount of US currency and have it converted to another currency_

## Setup/Installation Requirements

Software Requirements:

1. Web Browser
2. VSCode

API key instructions:

1. Go to: https://www.exchangerate-api.com/
2. Sign up for an account on their site to get your free API key
3. Copy your API key into the API call line (line 4 of currency-exchanger.js)

    * Alternatively, you can make a .env file and assign your key to a variable called API_KEY

Open via npm:

1. Clone this repository onto your computer: https://github.com/BenW2140/coding-project-6
2. Navigate into the coding-project-6 directory in Visual Studio Code or preferred text editor code.
3. Run `npm install` in the terminal to install needed packages
4. Run `npm start` in the terminal to view webpage
    
    * Or you can run `npm run build` in your terminal, and then navigate to the created dist folder and open the index.html file

## Specs

Behavior|Input|Output
------|------|------
The program will allow the user to enter an amount of US currency|15|15
The program will return the converted amount of currency in Francs|15|14.08
The program will return the converted amount of currency in Yen|15|1605.67
The program will return the converted amount of currency in Rupee|15|1123.89
The program will return the converted amount of currency in Euro|15|13.12
The program will return the converted amount of currency in Pound|15|11.94

## Known Bugs

_No known bugs at this time_

## Support and contact details

_Ben White: bwhite2140@outlook.com_

## Technologies Used

_Git, HTML, CSS, Javascript, Node, Webpack, ExchangeRate-API_

### License

*MIT License*

Copyright (c) 2020 **_Ben White_**