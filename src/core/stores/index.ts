
import {
  types,
  getEnv,
  getRoot,
  SnapshotIn
} from "mobx-state-tree";

export default {}


const RenderStore = types.model('RenderStore')
  .props({
    type: 'RenderStore'
  })
  .views(self => {
    
    return {}
  })