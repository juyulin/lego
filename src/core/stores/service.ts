/*
 * @Author: Cookie
 * @Date: 2020-09-14 11:33:15
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-14 19:33:38
 * @FilePath: /lego/src/core/stores/service.ts
 * @Description: 
 */
import {
  types,
  getEnv,
  getRoot,
  SnapshotIn,
  flow
} from "mobx-state-tree";
import { servicesManager, ServiceConfig } from '../services'
import {StoreNode} from './storeNode'
export const ServiceStore = StoreNode.named('ServiceModel')
  .props({
    msg: '',
    error: false,
    data: types.optional(types.frozen(), {}),
    loading: false,
    serviceId: types.string
  }).views((self) => {
    const service = servicesManager.select(self.serviceId)
    const fetch = (options: ServiceConfig) => {
      flow(function* () {
        try {
          self.loading = true;
          const data = yield service.run(options)
          self.data = data;
        } catch (err) {
          self.error = err
        } finally {
          self.loading = false
        }
      })
    }
    return {
      fetch
    }
  })