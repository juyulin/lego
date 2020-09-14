/*
 * @Author: Cookie
 * @Date: 2020-09-11 16:55:13
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-11 17:13:07
 * @FilePath: /lego/src/core/antd/Layout/Sider.ts
 * @Description: 
 */
import { Layout } from 'antd';
import { registerComponent } from '../../blockStore'
const { Sider } = Layout;
export default registerComponent({
    name: 'Layout.Sider',
    props: {
        collapsible: {
            type: 'boolean'
        },
        collapsed: {
            type: 'boolean',
            showAt: [{
                propertity: 'collapsible',
                relation: 'equal',
                value: true
            }]
        }
    }
})(Sider)
