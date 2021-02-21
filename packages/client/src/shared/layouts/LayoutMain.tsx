import React, {FunctionComponent} from 'react';
import { Link } from 'react-router-dom';

// ANTD COMPONENTS
import { Layout, Menu } from 'antd';

// CSS
import './layout-main-style.css'


const { Header, Content, Sider, Footer } = Layout;
const { Item } = Menu;





// COMPONENT
const LayoutMain : FunctionComponent = ({ children }) => {

    return (
            <Layout className="inherit">
                <Header>
                    <div className="logo" />
                </Header>
                <Layout>
                    <Sider width={200}>
                        <Menu mode="inline" defaultSelectedKeys={['test']} style={{ height: '100%', borderRight: 0 }}>
                            <Item key="test">
                                <Link to="/test"></Link>
                                <span>user</span>
                            </Item>
                            <Item key="home">
                                <Link to="/"></Link>
                                <span>home</span>
                            </Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ background: 'white',  borderLeft: '1.1px solid #0606062e'}}>
                        <Content style={{ margin: '30px 30px'}}>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>Satispay Assignment ©2021 Frontend</Footer>
            </Layout>
    )
}

export default LayoutMain;