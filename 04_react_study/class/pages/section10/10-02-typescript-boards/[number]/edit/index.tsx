import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client"
import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container"

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

export default function GraphqlMutationPage (){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD,{
        variables: {boardId: String(router.query.number) }
    }) 

    return( 
        <BoardWrite isEdit={true} data = {data}/>
    )   
}