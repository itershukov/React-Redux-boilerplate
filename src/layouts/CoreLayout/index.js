/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import Menu from 'components/common/menu/MainMenu';

const { Header, Footer, Sider } = Layout;

class CoreLayout extends Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            Welcome! You can put anything here!
          </Header>
          {this.props.children}
          <Footer style={{ textAlign: 'center' }}>
            Produced by ITersh. All right reserved.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default CoreLayout;
