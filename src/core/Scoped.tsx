import React, { createContext, useRef, forwardRef } from "react";
import { storesManager, } from "./stores";
import { observer } from "mobx-react";
import { uuid } from './utils'

interface HocStoreComponentOptions {
  storeName: string;
}
export interface Schema {
  type: string;
  detectField?: string;
  visibleOn?: string;
  hiddenOn?: string;
  children?: JSX.Element | ((props: any, schema?: any) => JSX.Element) | null;
  definitions?: Definitions;
  [propName: string]: any;
}
export interface Definitions {
  [propName: string]: SchemaNode;
}
export type SchemaNode = Schema | string | Array<Schema | string>;


const RootStoreContext = React.createContext<any>(undefined as any);



function HocStoreComponent(Component: React.ComponentType) {
  return (options: HocStoreComponentOptions) => {
   
    const HocComponent =  forwardRef((props: any, ref) => {
      React.useEffect(() => {
        const { storeName } = options;
        const { parentStore } = props;
        parentStore.addStore({
          id: uuid(),
          storeName
        })
      }, []);

      return <Component {...props} ref={ref} />;
    })
    return observer(HocComponent)
  };
}


interface RootRendererProps {
  schema: Schema
  rootStore: any
  env: any
}

export class RootRenderer extends React.Component<RootRendererProps> {
  render() {
      const {
          schema,
          rootStore,
          env,
          ...rest
      } = this.props;

      return (
          <RootStoreContext.Provider value={rootStore}>
            
          </RootStoreContext.Provider>
      );
  }
}

