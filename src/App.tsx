import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormItemRender} from './core/renders/FormItem'
import { FormRender} from './core/renders/Form'

import { Input } from 'antd';
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
     <FormRender>
       <FormItemRender>
         <Input />
       </FormItemRender>
     </FormRender>
  );
}

export default App;
