import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../../components/MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));