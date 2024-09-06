import { ApolloClient,InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {

  // 그래프ql 세팅
  const client = new ApolloClient({
    uri: "http://localhost:8080/api/graphql",
    cache: new InMemoryCache() // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기
  })


  return (
    <div>
      <div>
        {/* 여기에 작성되는건 모든 페이지에 공통적으로 동작됨
        사실상 다른 페이지들을 여기로 가져와서 실행한다는 느낌. */}
        ======여기는 _app.js 컴포넌트 시작부분 입니다.======
      </div>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
      <div>
        ======여기는 _app.js 컴포넌트 마지막 부분 입니다.======
      </div>
    </div>
  )
}
