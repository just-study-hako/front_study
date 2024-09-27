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

const COUNT_BOARDS = gql`
    query {
        getBoardsCount
    }
`
export default function MapBoardsPage():JSX.Element {
    const [startPage, setStartPage] = useState(1);
    const { data, refetch } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardsArgs>(FETCH_BOARDS) 

    // console.log(data?.getBoards)

    const onClickPage = (event:MouseEvent<HTMLSpanElement>): void => {
        void refetch({page: Number(event.currentTarget.id)})
    }

    const {data:dataBoardsCount} = useQuery<Pick<IQuery,"getBoardsCount">,String>(COUNT_BOARDS)
        // data 이름 중복이라서 이름 지정해줌
    console.log(dataBoardsCount)
    const lastPage = Math.ceil ((Number(dataBoardsCount?.getBoardsCount )?? 10) / 10 );

    const onclickPrevPage = ():void => {
        // startPage 가 1이면 -10 하면 -페이지가 나오니 그냥 리턴시킴
        if(startPage === 1) return;
        setStartPage(startPage - 10)
        void refetch({page: startPage - 10})
    }

    const onclickNextPage = () :void => {
        // 마지막 페이지를 계산해야함.  = 페이지당 10개니까  전체 갯수 /10 나머지 올림 (전체갯수는 백에서 받아와야함.)
        // 마지막 페이지가 있는 세트에서는 다음페이지 작동 안되게 해야함.
        // 마지막 페이지가 6이면 7~10 페이지도 안보이도록 해보자.
        if(startPage + 10 > lastPage) return;
        setStartPage(startPage + 10)
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
                new Array(10).fill(1).map((_,index) => 
                    index + startPage <= lastPage &&
                    (<span 
                    key={index + startPage} 
                    id={String(index + startPage)} 
                    onClick={onClickPage}>
                        {index + startPage}
                    </span>)
                )}
            <span onClick={onclickNextPage}>다음 페이지</span>
 
        </div>
    )
}