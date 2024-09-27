// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//    'x-rapidapi-key': '8b9b5a0346msh6c4f83f7aabead5p1f3379jsn09ea56b05b88',
//    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// };

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// const baseUrl = 'https://coinranking1.p.rapidapi.com';

// export const cryptoApi = createApi({
//   reducerPath: 'cryptoApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => createRequest('/exchanges')
//     })
//   })
// });

// export const {
//   useGetCryptosQuery,
// } = cryptoApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders={
    'x-rapidapi-key': 'ce232ac18cmsh830e06875d07372p109fd4jsn0cce3539c1a8',
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({
    url,
    headers:cryptoApiHeaders
})
export const cryptoApi= createApi({
reducerPath:'cryptoApi',
baseQuery:fetchBaseQuery({baseUrl}),
endpoints:(builder)=>({
    getCryptos:builder.query({
        query:(count)=>createRequest(`/coins?limit=${count}`),
    })
})
});
export const{
    useGetCryptosQuery
}=cryptoApi;