import React, { createContext } from "react";
import { storesManager } from "./stores";

function createScoped() {
  const components = [];
}

interface HocStoreComponentOptions {
  storeName: string;
}

function HocStoreComponent(Component: React.ComponentType) {
  return (options: HocStoreComponentOptions) => {
    React.useEffect(() => {
      const { storeName } = options;
    }, []);
    return (props: any) => {
      return <Component {...props} />;
    };
  };
}
