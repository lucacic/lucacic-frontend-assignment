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
                <Header style={{ background: 'hsl(198, 100%, 32%)'}}>
                </Header>
                <Layout>
                    <Sider width={200}>
                        <Menu mode="inline"  defaultSelectedKeys={['dashboard']} style={{ height: '100%', borderRight: 0 }}>
                           <Item style={{ fontSize: '18px', fontFamily:'inherit'}}key="dashboard">
                                <Link to="/"></Link>
                                <span>Dashboard</span>
                            </Item>
                            <Item style={{ fontSize: '18px', fontFamily:'inherit'}} key="Pokemons">
                                <Link to="/pokemons"></Link>
                                <span>Pokémons</span>
                            </Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ background: 'white',  borderLeft: '1.1px solid #0606062e'}}>
                        <Content style={{ margin: '30px 30px'}}>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center', height: '200px' } }>Satispay Assignment ©2021 Frontend</Footer>
            </Layout>
    )
}

export default LayoutMain;