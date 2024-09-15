import { gql, useMutation, useQuery } from "@apollo/client"

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

const DELETE_BOARD = gql`
    mutation deleteBoard($id: Int!){
        deleteBoard(id: $id){
            message
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

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onClickDelete = async (event) =>{
        console.log(event.target.id)
        const id = Number(event.target.id)
        const result = await deleteBoard({
            variables: {
                id :id
            },
            refetchQueries : [{query: FETCH_BOARDS}]
        })
        console.log(result)
    }
    
    return (
        // 프레그먼트란 ? <></> , <Fragment></Fragment>   둘다 프레그먼트임.
        // 특별한 이유가 없으면 Fragment <> 로 감싸자 
        // div는 1개 더 그려야되서 성능상으로 조금 더 느려질 수 있음
        // Fragment <> 에는 key를 못줌
        //  < key={1}></>   -> 안됨
        // <Fragment> 를 사용하면 key 사용가능 ( Fragment import 해야함.)
        // <Fragment key={1}></Fragment> -> 됨
        <div>
            {data?.fetchBoards.map(el => (
                <div key={el.id}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={myStyles}>{el.id}</span>
                    <span style={{margin:"15px", padding: "0px"}}>{el.title}</span> 
                    <span style={{margin:"15px"}}>{el.writer}</span>
                    <span>
                        <button id={el.id} onClick={onClickDelete}>
                            삭제하기
                        </button>
                    </span>
                </div>
            ))}
        </div>
    )
}