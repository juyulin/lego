import { Layout } from 'antd';
import { registerComponent } from '../../blockStore'
const { Header } = Layout;
export default registerComponent({
    name: 'Layout.Header',
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
    },

})(Header)
