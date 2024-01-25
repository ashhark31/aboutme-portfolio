import React, { useEffect } from 'react';
import {Alert, Layout, Menu, Spin, theme } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Link as ScrollLink, Element } from 'react-scroll';
import { Aboutme, Blog, Contact, Home, Resume, Testimonials } from './components';
import {useSelector,useDispatch} from 'react-redux'
import { retrieveKeyInfoDetails } from './api/retrieve.api';

const { Header, Content, Footer } = Layout;
const navData = ['resume', 'contact'];

const NavMenus = () => {
  return (
    <Menu
      theme='dark'
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
        <Home />
      </Element>
      {/* <Element name="aboutme">
        <Aboutme />
      </Element> */}
      <Element name="resume">
        <Resume />
      </Element>
      {/* <Element name="blog">
        <Blog />
      </Element>
      <Element name="feedback">
        <Testimonials />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

const layoutStyle = {
  overflow: 'auto',
  backgroundColor: '#0f0f0f',
  // backgroundImage: 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)'
}

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useDispatch();
  const readApiData = useSelector(state => state.apiData);
  const keyInfoData = JSON.stringify(readApiData?.keyInfoData);  
  useEffect(() => {
    retrieveKeyInfoDetails('key',dispatch);
  }, []);

  return (
    keyInfoData.length > 2
    ?
      <Layout style={layoutStyle}>
        <Router>
          <Header
            style={{
              top: 0,
              width: '100%',
              minHeight: 380,
              fontWeight: 'bold',
              position: 'absolute',
              background: 'rgb(100, 100, 100)'
            }}
          >
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
              color: '#fff',
              background: 'rgb(100, 100, 100)'
            }}
          >
            About Me ©2024 Created by MAshhar
          </Footer>
        </Router>
      </Layout>
    : 
      <div className='absolute w-full h-full flex justify-center items-center'>
        <div className='relative w-fit h-fit'>
          <Spin tip="Loading...">
            <Alert
              message="page.aboutMe"
              description="Further details is loading for page.aboutMe"
              type="info"
            />
          </Spin>
        </div>
      </div>
  );
};
export default App;