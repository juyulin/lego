import React, { useEffect } from 'react';


interface PageRenderProps {
  title: string
}

export const PageRender: React.FC<PageRenderProps> = (props) => {
  
  useEffect(() => {
    if(props.title) {
      document.title = props.title;
    }
  }, [props.title])
  return (
    <div>

    </div>
  )
}