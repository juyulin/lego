import React, { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { FormItemRender } from '../FormItem'


interface FormRenderProps {
  form?: FormInstance
}

export const FormRender : React.FC<FormRenderProps> = (props) => {
  const [form] = Form.useForm(props.form);
  return (
    <Form 
      form={form}>
        <FormItemRender />
        <Button onClick={() => {
          var a = form.getFieldsValue();
          console.log(a)
        }}>32332</Button>
    </Form>
  )
}