import React, { useContext, useEffect } from 'react';
import { Form, Input } from 'antd';


interface FormItemRenderProps {
  name: string | string[];
  shouldUpdate: boolean;
  dependencies?: string[]
  hidden?: boolean;
}

export const FormItemRender : React.FC<FormItemRenderProps> = (props) => {
  const { name, dependencies, shouldUpdate, hidden = false } = props;

  return (
    <Form.Item 
      name={name} 
      hidden={hidden}
      dependencies={dependencies}
    >
        <Input />
    </Form.Item>
  )
}