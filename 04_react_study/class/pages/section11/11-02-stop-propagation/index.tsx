import { gql, useQuery } from "@apollo/client"
import { IQuery, IQueryGetBoardArgs } from "../../../src/commons/types/generated/types2"
import React from 'react';
import Checkbox from "./checkbox";

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

    const a1 = () => {
        alert("클릭 1")
    }

    const a4 = () => {
        alert("클릭 4")
    }
    
    return (
        <div>
            {data?.getBoards?.map((el: any) => (
                <div id={el.writer} onClick={a1}>
                    <Checkbox></Checkbox>
                    <span style={myStyles} onClick={a4}>{el.id}</span>
                    <span style={myStyles} onClick={a4}>{el.title}</span> 
                    <span style={myStyles} onClick={a4}>{el.writer}</span>
                </div>
            ))}
        </div>
    )
}