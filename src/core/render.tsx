import React from 'react';
import { selectComponentType } from './blockStore'
import * as _ from 'lodash';
import { type } from 'os';
interface Data {
  name: string;
  children: Data[] | Data | string
}

export function Render({data}: {
  data: Data
}) {
  const { name , children } = data
  const props: any = {}
  if(typeof children === 'string') {
    props.children = children
  }else {
    props.children = (_.isArray(children) ? children : [children]).map(item=> <Render data={item} />)
  }
  return React.createElement(selectComponentType(name) as any, props )
}


