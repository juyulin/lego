/*
 * @Author: Cookie
 * @Date: 2020-09-11 17:32:19
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-11 17:34:51
 * @FilePath: /lego/src/core/antd/Layout/Content.ts
 * @Description: 
 */
import { Layout } from 'antd';
import { registerComponent } from '../../blockStore'
const { Content } = Layout;
export default registerComponent({
    name: 'Layout.Content',
    props: {

    }
})(Content)
