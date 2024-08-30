import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './component'
import studentData from './constant/indext'


function App() {
  return (
    <div>
      <UsersList
        data={studentData}
      />
    </div>
  );
}

export default App;
