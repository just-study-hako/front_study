import { gql, useQuery } from "@apollo/client"

// 목록 전체 다 가져오기
const FETCH_BOARDS = gql`
query{
    fetchBoards{
        id
        writer
        title
        contents
    }
}
`
export default function MapBoardsPage() {
    const { data } = useQuery(FETCH_BOARDS) 
    console.log(data?.fetchBoards)

    const myStyles = {
        margin : "15px",
        padding: "0px"
    }
    return (
        <div>
            {data?.fetchBoards.map(el => (
                <div>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={myStyles}>{el.id}</span>
                    <span style={{margin:"15px", padding: "0px"}}>{el.title}</span> 
                    <span style={{margin:"15px"}}>{el.writer}</span>
                </div>
            ))}
        </div>
    )
}