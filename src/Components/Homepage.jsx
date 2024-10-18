import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Spin, Alert } from 'antd';
import { useGetCryptosQuery } from '../Services/cryptoApi';
import { Link } from 'react-router-dom';
import { Cryptocurrencies,News} from '../Components'

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching, error } = useGetCryptosQuery(10); // Ensure lowercase "c"
  const globalStats = data?.data?.stats;

  console.log(data); 
  

  if (isFetching) return <Spin tip="Loading..." />;
  if (error) return <Alert message="Error" description="Failed to fetch data" type="error" showIcon />;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic 
            title="Total cryptocurrencies" 
            value={globalStats?.total ? millify(globalStats.total) : 'N/A'} 
          />
        </Col>
        <Col span={12}>
          <Statistic 
            title="Total Exchanges" 
            value={globalStats?.totalExchanges ? millify(globalStats.totalExchanges) : 'N/A'} 
          />
        </Col>
        <Col span={12}>
          <Statistic 
            title="Total Market Cap" 
            value={globalStats?.totalMarketCap ? millify(globalStats.totalMarketCap) : 'N/A'}  
          />
        </Col>
        <Col span={12}>
          <Statistic 
            title="Total 24h Volume" 
            value={globalStats?.total24hVolume ? millify(globalStats.total24hVolume) : 'N/A'} 
          />
        </Col>
        <Col span={12}>
          <Statistic 
            title="Total Markets" 
            value={globalStats?.totalMarkets ? millify(globalStats.totalMarkets) : 'N/A'} 
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
        <Cryptocurrencies simplified/>
      </div>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/News'>Show more</Link></Title>
        <News simplified/>
      </div>
    </>
  );
};

export default Homepage;
