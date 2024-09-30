import { gql, useQuery } from "@apollo/client"
import type { IQuery, IQueryGetBoardsArgs } from "../../../src/commons/types/generated/types2"
import InfiniteScroll from 'react-infinite-scroller';

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
export default function MapBoardsPage(): JSX.Element {
    // refetch : 리패치 : 내가 패치 했던 애를 다시 새롭게 패치하는것
    // fetchMore : 패치모어 : 기존걸 냅두고 추가로 더 패치하는것
    const { data , fetchMore} = useQuery<Pick<IQuery, "getBoards">, IQueryGetBoardsArgs>(FETCH_BOARDS)


    const onLoadMore = ():void => {
        // 처음 페이지를 열때 게시글도 없는데 더 불러오기 하려고 에러남.
        if (data === undefined) return;

        //여기서 동작할게 게시글 더 불러오기
        void fetchMore({
            // 현재 페이지값은 현재 보드의 갯수 /10을 하면 됨.  (다음페이지면 +1 해주면됨)
            variables:{page: Math.ceil((data?.getBoards?.length ?? 10) / 10) + 1},
            updateQuery: (prev,{fetchMoreResult}) => {

                // 기존 보드와 새로운보드를 보고 비어있나 체크하기.
                const prevBoards = prev.getBoards ?? [];
                const newBoards = fetchMoreResult?.getBoards ?? [];
                
                return {
                    getBoards: [...prevBoards, ...newBoards]
                };
            }
        })
    };

    // const onLoadMore = ():void => {
    //     //여기서 동작할게 게시글 더 불러오기
    //     void fetchMore({
    //         variables:{page:data?.getBoards?.length},
    //         updateQuery: (prev,{fetchMoreResult}) => {
    //             if(fetchMoreResult.getBoards === undefined){
    //                 return{
    //                     getBoards: [...prev.getBoards]
    //                 }
    //             } 
    //             return{
    //                 getBoards: [...prev.getBoards, fetchMoreResult.getBoards]
    //             }
                
    //         }
    //     })
    // };

    // 위 코드는 'Maybe<Maybe<IBoard>[]> | undefined' 형식은 배열 형식이 아닙니다. 라는 에러가 뜨는데
    // 기존 보드와 새로가져오는 보드가 빈 내용이면 undefined라서 배열 형식이 아니라 에러가 난다는 것이다.
    return (
        <div style={{ height: "300px", overflow: "auto" }}>
            <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false} >
                {data?.getBoards?.map(el => (
                    <div key={el?.id}>
                        <span style={{ margin: "15px" }}>{el?.title}</span>
                        <span style={{ margin: "15px" }}>{el?.writer}</span>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}