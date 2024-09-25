import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingProps{
    children: JSX.Element;
}

export default function ApolloSetting(props :IApolloSettingProps) {

    // 그래프ql 세팅
    const client = new ApolloClient({
        uri: "http://localhost:8080/graphql",
        cache: new InMemoryCache() // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기
    })

    
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}