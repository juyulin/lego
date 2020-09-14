/*
 * @Author: Cookie
 * @Date: 2020-09-11 16:51:08
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-11 16:51:21
 * @FilePath: /lego/src/core/antd/Input/index.ts
 * @Description: 
 */
import { Input } from 'antd';
import { registerComponent } from '../../blockStore'

export default registerComponent({
    name: 'Input',
    props: {
        placeholder: {
            type: 'string'
        },
        value: {
            type: 'string'
        },

    }
})(Input)