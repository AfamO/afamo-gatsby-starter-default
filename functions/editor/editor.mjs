const MyComponent = require('../../components/MyComponent.jsx');

export const handler = async (event, context) => {
  try {
    const props = {  title:"Welcome",
        content:"This is a sample component." 
    };
    const renderedComponent = MyComponent(props); // Assuming MyComponent returns a string or JSX

    const resp = {
      message: 'Function executed successfully!',
      component: renderedComponent,
      date: new Date().toISOString(),
    };
    return {
      statusCode: 200,
      body: JSON.stringify(resp),
    };
  } catch (error) {
    console.error("Error occured::"+error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};