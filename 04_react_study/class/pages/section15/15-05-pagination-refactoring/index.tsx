import { gql, useQuery } from "@apollo/client"
import type { IQuery,IQueryGetBoardsArgs } from "../../../src/commons/types/generated/types2"
import BoardList from "../../../src/components/units/15-pagination-refactoring/board"
import PageNation from "../../../src/components/units/15-pagination-refactoring/pagination"

    // 보드 목록 전부 가져오기 
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
    // 보드 갯수 가져오기
    const COUNT_BOARDS = gql`
    query {
        getBoardsCount
    }
    `
export default function PaginationRefactoringPage() {
    // 보드 목록을 data에 저장
    const { data, refetch } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardsArgs>(FETCH_BOARDS) 

    // 보드 갯수 가져와서 dataBoardsCount에 저장
    const {data:dataBoardsCount} = useQuery<Pick<IQuery,"getBoardsCount">,String>(COUNT_BOARDS)

    // 최대 몇페이지까지 만들지 저장
    const lastPage = Math.ceil ((Number(dataBoardsCount?.getBoardsCount )?? 10) / 10 );
    return (
        <>
            {/* 보드 리스트 */}
            <BoardList data={data}></BoardList>
            {/* 페이지 네이션 */}
            <PageNation refetch={refetch} lastPage={lastPage}></PageNation>
        </>

    )
}