import React from 'react';
import Store from './components/Store';
import ToDoForm from './components/Counter';

const App = () => {
  return (
    <Store>
      <ToDoForm />      
    </Store>
  );
};

export default App;
