import { gql, useQuery } from "@apollo/client"
import type { IQuery,IQueryGetBoardsArgs } from "../../../src/commons/types/generated/types2"
import { MouseEvent, useState } from "react"


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
    const [myIndex, setMyIndex] = useState(-1);
    const { data } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardsArgs>(FETCH_BOARDS) 
    
    const onClickEdit = (event : MouseEvent<HTMLButtonElement>):void => {
        setMyIndex(Number(event.currentTarget.id))
    }

    return (
        <div>
            {data?.getBoards?.map((el,index) => (
                index !== myIndex ? (
                <div key={el?.id}>
                    <span style={{margin:"15px", padding: "0px"}}>{el?.title}</span> 
                    <span style={{margin:"15px"}}>{el?.writer}</span>
                    <button id={String(index)} onClick={onClickEdit}>수정하기</button>
                </div>
                ) : (
                    <input type="text" key={el?.id}></input>
                )
                
            ))}

 
        </div>
    )
}