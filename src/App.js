import React, { Component } from 'react';
import { Layout } from 'antd';

import Game from './components/Game';


const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Header
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: '2em',
            }}
          >
            Speed Typing
          </Header>
          <Content>
            <Game />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Made with <span role="img" aria-label="heart">❤️</span> by Nikhil
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
