/*
 * @Author: Cookie
 * @Date: 2020-09-11 17:35:32
 * @LastEditors: Cookie
 * @LastEditTime: 2020-09-11 17:35:41
 * @FilePath: /lego/src/core/antd/Layout/Layout.ts
 * @Description: 
 */
import React from 'react';
import { Layout as AntdLayout } from 'antd';
import { registerComponent } from '../../blockStore'

function Layout(props: any) {
    return <AntdLayout {...props} style ={{minHeight: '100%'}} />
}

export default registerComponent({
    name: 'Layout',
    props: {
        hasSider: {
            type: 'boolean'
        }
    }
})(Layout)
