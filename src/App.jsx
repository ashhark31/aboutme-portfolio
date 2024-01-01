import React from 'react';
import { Anchor, Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Link as ScrollLink, Element } from 'react-scroll';
import { Aboutme, Blog, Contact, Home, Resume, Testimonials } from './components';

const { Header, Content, Footer } = Layout;
const navData = ['aboutme', 'resume', 'blog', 'feedback', 'contact'];

const NavMenus = () => {
  return (
    <Menu
      theme='light'
      mode="horizontal"
      defaultSelectedKeys={['5']}
      // items={items}
      style={{
        flex: 1,
        minWidth: 0,
        justifyContent: 'center',
        background: 'transparent',
        border: 'none'
      }}
    >
      {
        navData.map((nav, index) => {
          return (
            <Menu.Item key={index+1}>
              <ScrollLink to={nav} spy={true} smooth={true} duration={500} offset={-50}>
                <Link to={nav}>{nav}</Link>
              </ScrollLink>
            </Menu.Item>
          );
        })        
      }
    </Menu>
  )
}

const Elements = () => {
  return (
    <>
      <Element name="">
        <Home/>
      </Element>
      <Element name="aboutme">
        <Aboutme />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

const layoutStyle = {
  backgroundColor: '#c3cbdc',
  backgroundImage: 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)'
}

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={layoutStyle}>
      <Router>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: '#c3cbdc'
          }}
        >
          <div className="demo-logo" />
          <NavMenus />
        </Header>
        <Content
          style={{
            padding: '0 48px',
          }}
        >
          <div
            className='flex flex-col md:items-center'
            style={{
              padding: 34,
              minHeight: 380,
              borderRadius: borderRadiusLG,
            }}
          >
            <Elements />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          About Me ©2024 Created by MAshhar
        </Footer>
      </Router>
    </Layout>
  );
};
export default App;