
// import React from 'react';
// import millify from 'millify';
// import { Typography, Row, Col, Statistic } from 'antd';
// import { Link } from 'react-router-dom'; 
// import { useGetCryptosQuery } from '../Services/cryptoApi';
// const { Title } = Typography;



// // const Homepage = () => {
// //   const { data, isFetching } = useGetCryptosQuery();
// //   const globalStats = data?.data?.stats;
// //   console.log(data);
// //   if (isFetching) return 'Loading...';
// //   return (
// //     <>
// //       <Title level={2} className='heading'>Global Crypto Stats</Title>
// //       <Row>
// //         <Col span={12}>
// //           <Statistic 
// //             title="Total cryptocurrencies" 
// //             value={globalStats?.total } 
// //           />
// //         </Col>
// //         <Col span={12}>
// //           <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
// //         </Col>
// //         <Col span={12}>
// //           <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}  />
// //         </Col>
// //         <Col span={12}>
// //           <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
// //         </Col>
// //         <Col span={12}>
// //           <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
// //         </Col>
// //       </Row>
// //     </>
// //   );
// // };
// // export default Homepage;



// const Homepage = () => {
//   const { data, isFetching } = useGetCryptosQuery();
//   const globalStats = data?.data?.stats;

//   if (isFetching) return 'Loading...';

//   return (
//     <>
//       <Title level={2} className='heading'>Global Crypto Stats</Title>
//       <Row>
//         <Col span={12}>
//           <Statistic 
//             title="Total cryptocurrencies" 
//             value={globalStats?.total || 'N/A'} 
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic 
//             title="Total Exchanges" 
//             value={globalStats?.totalExchanges ? millify(globalStats.totalExchanges) : 'N/A'} 
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic 
//             title="Total Market Cap" 
//             value={globalStats?.totalMarketCap ? millify(globalStats.totalMarketCap) : 'N/A'}  
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic 
//             title="Total 24h Volume" 
//             value={globalStats?.total24hVolume ? millify(globalStats.total24hVolume) : 'N/A'} 
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic 
//             title="Total Markets" 
//             value={globalStats?.totalMarkets ? millify(globalStats.totalMarkets) : 'N/A'} 
//           />
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default Homepage;

import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Spin, Alert } from 'antd';
import { useGetCryptosQuery } from '../Services/cryptoApi';
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching, error } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(data); // Log the data to check the structure

  if (isFetching) return <Spin tip="Loading..." />;
  if (error) return <Alert message="Error" description="Failed to fetch data" type="error" showIcon />;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic 
            title="Total cryptocurrencies" 
            value={globalStats?.total || 'N/A'} 
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
    </>
  );
};

export default Homepage;

