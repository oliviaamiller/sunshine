const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event, context) => {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
