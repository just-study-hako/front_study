import { gql, useQuery } from "@apollo/client"
import { IQuery, IQueryGetBoardArgs } from "../../../src/commons/types/generated/types2"
import React from 'react';

// 목록 전체 다 가져오기
const FETCH_BOARDS = gql`
query{
    getBoards{
        id
        writer
        title
        contents
    }
}
`
export default function MapBoardsPage() {
    const { data } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardArgs>(FETCH_BOARDS) 
    console.log(data?.getBoards)

    const myStyles = {
        margin : "15px",
        padding: "0px"
    }

    const onClickAlert = (event: React.MouseEvent<HTMLDivElement>) => {
        alert(event.currentTarget.id)
    }
    
    return (
        <div>
            {data?.getBoards?.map((el: any) => (
                <div id={el.writer} onClick={onClickAlert}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={myStyles} >{el.id}</span>
                    <span style={myStyles} >{el.title}</span> 
                    <span style={myStyles} >{el.writer}</span>
                </div>
            ))}
        </div>
    )
}