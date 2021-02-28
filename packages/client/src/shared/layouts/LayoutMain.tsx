import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ANTD ICON
import { ChromeFilled, MenuUnfoldOutlined } from '@ant-design/icons';

// ANTD COMPONENTS
import { Layout, Menu, Typography } from 'antd';

// CSS
import './layout-main-style.css'


const { Header, Content, Sider, Footer } = Layout;
const { Item } = Menu;


// COMPONENT
const LayoutMain: FunctionComponent = ({ children }) => {
    
    const location = useLocation();

    return (
        <Layout className="inherit">
            <Header style={{ background: 'hsl(198, 100%, 32%)' }}>
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu mode="inline" defaultSelectedKeys={[`${location.pathname}`]} style={{ height: '100%', borderRight: 0, background: "#fafafa" }}>
                        <Item
                            icon={<MenuUnfoldOutlined style={{ transform: 'scale(1.7)' }} />}
                            style={{ fontSize: '18px', fontFamily: 'inherit' }}
                            key="/">
                            <Link to="/"></Link>
                            <span>Dashboard</span>
                        </Item>
                        <Item
                            icon={<ChromeFilled style={{ transform: 'scale(1.7)' }} />}
                            style={{ fontSize: '18px', fontFamily: 'inherit' }}
                            key="/pokemons">
                            <Link to="/pokemons"></Link>
                            <span>Pokédex</span>
                        </Item>
                    </Menu>
                </Sider>
                <Layout style={{ background: 'white', borderLeft: '1.1px solid #0606062e' }}>
                    <Content style={{ margin: '30px 30px' }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center', height: '200px', background: '#444444' }}>
                <Typography style={{color: 'white',fontSize: "22px"}}>Satispay Assignment ©2021</Typography>
                <Typography style={{color: 'white'}}>Frontend - Luca Cicciotti</Typography>
            </Footer>
        </Layout>
    )
}

export default LayoutMain;