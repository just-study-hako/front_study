import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
query{
    fetchBoard(number:2){
        id
        writer
        title
        contents
    }
}
`
export default function StaticRoutingMovedPage() {

    // 별도 실행이 아닌 해당 코드가 바로 요청이 날아감.
    const { data } = useQuery(FETCH_BOARD)  // 여기서 api 요청이 들어감
    // 백엔드에서 접속, 데이터 가져와서, 받아올때까지 기다려야 해서 느려보임.
    // {data.fetchBoard.writer} 이런애들을 사용하면 데이터가 불러와 지기전에 요청을 해서 에러가 발생하는것.
    console.log(data)
    return (
        <div>
            <div>2번 게시글 이동이 완료 되었습니다.</div>
            <div>작성자 : {data && data.fetchBoard?.writer}</div>
            <div>제목 : {data?.fetchBoard?.title}</div>
            <div>내용 : {data ? data.fetchBoard?.contents : "로딩중 입니다."}</div>
            {/* data && data. ~~` 데이터가 있으면 그리고 없으면 그리지마 라는뜻. 
            data?. 이것도 동일한 기능
            옵셔널 체이닝 (optional-chaining)기능
            내용 부분은 삼항 연산자 */}
        </div>
    )
}