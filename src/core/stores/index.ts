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
import { ServiceStore } from './service';
import { StoreNode } from "./storeNode";
export default {}


const RendersStore = types.model('RendersStore')
  .props({
    type: 'RenderStore',

  })
  .views(self => {

    return {}
  })


export const StoreFactory = [RendersStore, ServiceStore];


export const selectStore = (name) => _.find(StoreFactory, (store) => store.storeType === name)
const stores: {
  [key: string]: StoreNode
} = {}

export const storesManager = {
  addStore: (id: string, store: StoreNode) => {
    if (stores[id]) {
      return stores[id];
    }
    stores[id] = store;
    if (store.parentId) {
      stores[store.parentId].addChildId(id)
    }
  }
}