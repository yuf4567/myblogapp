import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Article from './component/Article';
import Category from './component/Category';
import Comment from './component/Comment';
import Tag from './component/Tag';
import User from './component/User';
import React, { useState } from 'react';
import AddArticle from './component/AddArticle'
import EditArticle from './component/EditArticle'

const { Header, Content, Footer, Sider } = Layout;


function App() {

  return (
    <BrowserRouter>
      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/'>文章管理</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/comment'>评论管理</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to='/user'>用户管理</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to='/tag'>标签管理</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to='/category'>分类管理</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Routes>
                <Route path='/' element={<Article />}>
                </Route>
                <Route path='/addarticle' element={<AddArticle />}>
                </Route>
                <Route path='/editarticle' element={<EditArticle />}>
                </Route>
                <Route path='/category' element={<Category />}>
                </Route>
                <Route path='/comment' element={<Comment />}>
                </Route>
                <Route path='/tag' element={<Tag />}>
                </Route>
                <Route path='/user' element={<User />}>
                </Route>
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', }}>Ant Design ©2022 Created by yuf</Footer>
        </Layout>
      </Layout>
    </BrowserRouter >
  );
}
export default App;
