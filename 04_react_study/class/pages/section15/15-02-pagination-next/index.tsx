import { gql, useQuery } from "@apollo/client"
import type { IQuery,IQueryGetBoardsArgs } from "../../../src/commons/types/generated/types2"
import { useState, type MouseEvent } from "react"


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
    const [startPage, setStartPage] = useState(1);
    const { data, refetch } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardsArgs>(FETCH_BOARDS) 

    // console.log(data?.getBoards)

    const onClickPage = (event:MouseEvent<HTMLSpanElement>): void => {
        void refetch({page: Number(event.currentTarget.id)})
    }

    const onclickPrevPage = ():void => {
        setStartPage(startPage - 10)
        console.log(startPage - 10)
        void refetch({page: startPage - 10})
    }

    const onclickNextPage = () :void => {
        setStartPage(startPage + 10)
        console.log(startPage + 10)
         void refetch({page: startPage + 10})
    }

    return (
        <div>
            {data?.getBoards?.map(el => (
                <div key={el?.id}>
                    <span style={{margin:"15px", padding: "0px"}}>{el?.title}</span> 
                    <span style={{margin:"15px"}}>{el?.writer}</span>
                </div>
            ))}

            {/* 1,2,3,4 ... 버튼 좌우에 이전,다음 페이지 만들어보기 */}
            <span onClick={onclickPrevPage}>이전 페이지</span>
            {
                new Array(10).fill(1).map((_,index) => (
                    <span key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>{index + startPage}</span>
                ))
            }
            <span onClick={onclickNextPage}>다음 페이지</span>
 
        </div>
    )
}