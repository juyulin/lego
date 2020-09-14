/*
 * @Author: Cookie
 * @Date: 2020-09-11 14:00:24
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-11 19:23:30
 * @FilePath: /lego/src/core/blockStore.ts
 * @Description: 
 */
import React from 'react';
import * as _ from 'lodash'

interface ComponentTypeStoreItem {
    name: string;
    content: ComponentType;
    props?: any;
}
type ComponentType = React.FC<any> | React.ComponentClass | React.FunctionComponent | string;

type ComponentTypeFactory = (...args: any) => ComponentType;

interface ComponentOption {
    name: string;
    props?: any
}


interface ComponentTypeFactoryStoreItem {
    name: string;
    content: ComponentTypeFactory;
    children?: any
}


const componentTypeStore: ComponentTypeStoreItem[] = []
export const registerComponent = (options: ComponentOption) => (component: ComponentType) => {
    const { name, } = options
    componentTypeStore.push({
        name: name,
        content: component,
    })
}

export const selectComponentType = (name: string) => {
    const selectResult = _.find(componentTypeStore, ['name', name]);
    if (!selectResult) {
        throw new Error(`${name} component has not registered`);
    }
    return selectResult.content
}



const componentFactories: ComponentTypeFactoryStoreItem[] = [];

export const registerComponentFactory = (options: {
    name: string
}) => (component: ComponentTypeFactory) => {
    const { name, } = options
    componentFactories.push({
        name: name,
        content: component,
    })
}

export const selectComponentFactory = (name: string) => {
    const selectResult = _.find(componentFactories, ['name', name]);
    if (!selectResult) {
        throw new Error(`${name} componentFactory has not registered`);
    }
    return selectResult
}
