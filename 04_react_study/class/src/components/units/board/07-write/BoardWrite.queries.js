// 그래프QL의 쿼리, 뮤테이션등의 내용만 작성

import {gql} from "@apollo/client"

export const 나의그래프큐엘셋팅 = gql`
    mutation createGraphql($writer: String!, $title: String!, $contents: String!){
        createGraphql(writer: $writer, title: $title, contents: $contents){
            message
            writer
            title
            contents
            id
        }
    }
`;