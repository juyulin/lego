import React, { useEffect } from 'react';
import { Layout } from 'antd';

const { Header, Sider } = Layout;


interface PageRenderProps {
  title: string
}




export const PageRender: React.FC<PageRenderProps> = (props) => {
  
  useEffect(() => {
    if(typeof props.title !== 'undefined') {
      document.title = props.title;
    }
  }, [props.title])
  return (
   <Layout>
     <Header>
       
     </Header>
     <Sider>

     </Sider>

   </Layout>
  )
}