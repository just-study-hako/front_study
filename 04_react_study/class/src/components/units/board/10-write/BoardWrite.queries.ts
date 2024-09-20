// 그래프QL의 쿼리, 뮤테이션등의 내용만 작성

import {gql} from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard($writer: String!, $title: String!, $contents: String!) {
        createBoard(request: { writer: $writer, title: $title, contents: $contents }) {
            message
            writer
            title
            contents
            id
        }
    }
`;

export const UPDATE_BOARD = gql`
    mutation updateBoard($id: ID!, $title: String, $contents: String) {
        updateBoard(request: { id: $id, title: $title, contents: $contents }) {
            message
            writer
            title
            contents
            id
        }
    }
`;