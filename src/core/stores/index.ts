/*
 * @Author: Cookie
 * @Date: 2020-09-14 10:35:38
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-14 19:57:13
 * @FilePath: /lego/src/core/stores/index.ts
 * @Description: 
 */

import {
  types,
  getEnv,
  getRoot,
  SnapshotIn
} from "mobx-state-tree";
import * as _ from 'lodash';

import { ServiceStore } from './service';
import { StoreNode } from "./storeNode";
export default {}



const RendersStore = types.model('RendersStore', {
  storeType: 'RendersStore'
})
  .props({

  })
  .views(self => {

    return {
      addStore(store: {
        storeType: string;
        id: string;
        path: string;
        parentId?: string;
        [propName: string]: any;
      }) {
        const { storeType } = store;
        const factory = _.find(StoreFactory, ['storeType', storeType]);
        
        storesManager.addStore((factory as any).create(store as any, getEnv(self)))
      }
    }
  })


  export const StoreFactory = [RendersStore, ServiceStore];


const stores: {
  [key: string]: StoreNode
} = {}

export const storesManager = {
  addStore: (store: StoreNode) => {
    const id = store.id
    if (stores[id]) {
      return stores[id];
    }
    stores[id] = store;
    if (store.parentId) {
      stores[store.parentId].addChildId(id)
    }
  }
}