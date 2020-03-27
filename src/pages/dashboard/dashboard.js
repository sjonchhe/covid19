import React, { Component } from 'react';
import { Statistic, Row, Col, Button, Menu, Layout, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { getApiCall, nepalData } from '../../constants/url';
const { Header, Footer, Sider, Content } = Layout;

export default class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      nepalData: {}
    };
  }
  fetchData = () => {
    return fetch(nepalData, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('nepoal data response', responseJson);
        this.setState({
          nepalData: responseJson
        });
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Menu theme='dark' mode='horizontal'>
              Covid 19 Statistics
            </Menu>
          </Header>
          <Content>
            <div className='site-statistic-demo-card'>
              <Row gutter={16}>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title='Tests Caried'
                      value={this.state.nepalData.tested_total}
                      valueStyle={{ color: '#3f8600' }}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card>
                    <Statistic
                      title='Positive'
                      value={this.state.nepalData.tested_positive}
                      valueStyle={{ color: '#cf1322' }}
                    />
                  </Card>
                </Col>
              </Row>
            </div>
            ,
          </Content>
        </Layout>
      </div>
    );
  }
}
