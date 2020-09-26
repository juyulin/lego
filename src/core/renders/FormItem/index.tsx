import React, { useContext, useEffect } from 'react';
import { Form, Input } from 'antd';


interface FormItemRenderProps {
  name: string | string[];
  shouldUpdate: boolean;
  dependencies: string[]

}

export const FormItemRender : React.FC<FormItemRenderProps> = (props) => {
  const { name, dependencies } = props;
  
  return (
    <Form.Item name={name} dependencies={[]}>
        <Input />
    </Form.Item>
  )
}