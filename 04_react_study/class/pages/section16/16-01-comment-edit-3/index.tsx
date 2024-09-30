import { gql, useQuery } from "@apollo/client"
import type { IQuery,IQueryGetBoardsArgs } from "../../../src/commons/types/generated/types2"
import { MouseEvent, useState } from "react"
import CommentItem from "../../../src/components/units/16-comment-item"


// 목록 전체 다 가져오기
const FETCH_BOARDS = gql`
query getBoards($page: Int) {
    getBoards(page: $page){
        id
        writer
        title
        contents
    }
}
`
export default function MapBoardsPage():JSX.Element {
    // true, false로 도배하는건 너무 비효율적 = 게시글이 20개 30개면  하나하나 다 추가해야함.
    // 각 게시글을 각각의 컴포넌트로 나눠서 스테이트를 각각 주는 방식으로 만들어 보자.


    const { data } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardsArgs>(FETCH_BOARDS) 

    return (
        <div>
            {data?.getBoards?.map((el) => (
                <CommentItem key={el?.id} el={el}></CommentItem>      
            ))}
        </div>
    )
}