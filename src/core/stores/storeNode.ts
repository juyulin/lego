/*
 * @Author: Cookie
 * @Date: 2020-09-14 17:48:05
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-14 19:11:41
 * @FilePath: /lego/src/core/stores/storeNode.ts
 * @Description: 
 */
import {
    types,
    getEnv,
    getRoot,
    SnapshotIn
} from "mobx-state-tree";

export const StoreNode = types.model('StoreNode', {
    sotreType: 'StoreNode',
    childrenIds: types.array(types.string),
    id: types.identifier,
    parentId: '',
    storeType: types.string,
}).views(self => ({
    get parent() {

        return self.parentId
    },
    addChildId(id: string) {
        self.childrenIds.push(id)
    }

}))

export type StoreNode = typeof StoreNode.Type