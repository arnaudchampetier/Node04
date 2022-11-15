require('dotenv').config();

const port = process.env.APP_PORT ?? 5000;

console.log(
  `I am "${process.env.MY_NAME}", wilder in "${process.env.MY_CITY}", and I love "${process.env.MY_LANGUAGE}. `
);

