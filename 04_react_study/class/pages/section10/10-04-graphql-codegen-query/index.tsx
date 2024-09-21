import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery, IQueryGetBoardArgs } from "../../../src/commons/types/generated/types2"

const FETCH_BOARD = gql`
query getBoard($boardId: ID!){
    getBoard(boardId: $boardId){
        id
        writer
        title
        contents
    }
}
`
export default function StaticRoutingMovedPage() {

    const router = useRouter()
    console.log(router)
    console.log(router.query.number)
    // const { data } = useQuery<결과타입, 변수타입>(FETCH_BOARD,{
    const { data } = useQuery<Pick<IQuery,"getBoard">, IQueryGetBoardArgs>(FETCH_BOARD,{
        variables: { boardId: String(router.query.number) }
    }) 
    console.log(data)
    return (
        <div>
            <div>{router.query.number}번 게시글 이동이 완료 되었습니다.</div>
            <div>작성자 : {data && data.getBoard?.writer}</div>
            <div>제목 : {data?.getBoard?.title}</div>
            <div>내용 : {data ? data.getBoard?.contents : "로딩중 입니다."}</div>
        </div>
    )
}