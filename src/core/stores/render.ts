/*
 * @Author: Cookie
 * @Date: 2020-09-14 10:35:38
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-14 11:05:16
 * @FilePath: /lego/src/core/stores/render.ts
 * @Description: 
 */
import {
  types,
  getEnv,
  getRoot,
  SnapshotIn
} from "mobx-state-tree";


export const RenderStore = types.model('RenderStore')
  .props({
    data: types.optional(types.frozen(), {}),
    action: types.optional(types.frozen(), undefined),
  })

