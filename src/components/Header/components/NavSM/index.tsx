import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

const links = [
    {
        id: '001',
        name: '首页'
    },
    {
        id: '002',
        name: '沸点'
    },
    {
        id: '003',
        name: '课程'
    },
    {
        id: '004',
        name: '直播'
    },
    {
        id: '005',
        name: '咨询'
    },
    {
        id: '006',
        name: '活动'
    },
    {
        id: '007',
        name: '开放社区'
    },
    {
        id: '008',
        name: '商城'
    },
]

const menu = (
    <Menu>
        {
            links.map(linkObj => {
                return (
                    <Menu.Item 
                        key={linkObj.id} 
                        style={{
                            width:'100px',
                            marginLeft: '40px'
                        }}
                    >
                        <a href="https://www.baidu.com">{linkObj.name}</a>
                    </Menu.Item>
                )
            })
        }
    </Menu>
);

interface childProps {
    name: string
}


export default function NavSM(props: childProps) {
    const {name} = props
    return (
        <div className={name}>
            <Dropdown overlay={menu} trigger={['click']}>
                <a>
                    首页<DownOutlined />
                </a>
            </Dropdown>
        </div>
    )
}
