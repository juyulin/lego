import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Render } from './core';
const data = {
  name: 'Layout',
  children: [{
    name: 'Layout.Header',
    children: "hello"
  }, {
    'name': 'Layout',
    children: [{
      'name': 'Layout.Sider',
      children: 'Hellow'
    }, {
      name: 'Layout.Content',
      children: 'Hellow'
    }]
  }]
} 
function App() {
  return (
     <Render data={data} />
  );
}

export default App;
