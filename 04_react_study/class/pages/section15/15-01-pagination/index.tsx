import { gql, useQuery } from "@apollo/client"
import type { IQuery,IQueryGetBoardsArgs } from "../../../src/commons/types/generated/types2"
import { MouseEvent } from "react"


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
    
    const { data, refetch } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardsArgs>(FETCH_BOARDS) 
    
    /* refetch
     8 - 3의 삭제 후 refetch할때는 refetchQueries를 사용했는데 여기의 refetch와는 다른점은
     refetchQueries은 mutation이후 다시 불러오기를 하기위해 mutation내부에 있는 기능인것이고
     refetch는 그냥 별도로 아무때나 하고싶을때 하는것
    */

    console.log(data?.getBoards)

    const onClickPage1 = async ():Promise<void> => {
        await refetch({page: 1})
        // 결과를 담아야 await가 의미 있는것 사실상 의미없음
        // 한줄씩 할때 위 동작으로 인한 결과를 밑에 출력할때 기다려야 제대로 출력되니 그럴때만 기다리는 의미가 있는것.
    }
    const onClickPage2 = (): void => {
        void refetch({page: 2})
    }
    const onClickPage3 = (): void => {
        void refetch({page: 3})
    }
    const onClickPage4 = (): void => {
        void refetch({page: 4})
    }

    // 페이지를 하나하나 할 순 없으니 id를 통해서 값을 받아오자.

    const onClickPage = (event:MouseEvent<HTMLSpanElement>): void => {
        void refetch({page: Number(event.currentTarget.id)})
    }

    return (
        <div>
            {data?.getBoards?.map(el => (
                <div key={el?.id}>
                    <span style={{margin:"15px", padding: "0px"}}>{el?.title}</span> 
                    <span style={{margin:"15px"}}>{el?.writer}</span>
                </div>
            ))}
            {/* 
            <span id="1" onClick={onClickPage}>1</span>
            <span id="2"  onClick={onClickPage}>2</span> 
            <span id="3"  onClick={onClickPage}>3</span> 
            <span id="4"  onClick={onClickPage}>4</span>   */}

            {/* map을 사용한 간단하게 페이지 넘버 만들기 */}
            {/* {
                [1,2,3,4].map(el => (
                    <span key={el} id={String(el)} onClick={onClickPage}>{el}</span>
                ))
            } */}

            {/* index + 1한 값이 el이니까 index로 하면됨 */}
            {/* {
                [1,2,3,4].map((el,index) => (
                    <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>{index + 1}</span>
                ))
            } */}

            {/*어차피 안쓰는데 내용물이꼭 1,2,3,4 일 필요도 없음*/}
            {/* {
                [0,0,0,0,0,0,0].map((el,index) => (
                    <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>{index + 1}</span>
                ))
            } */}

            {/* 안쓰는 변수는 _ 언더바로 표기하는게 국룰*/}
            {/* {
                [0,0,0,0,0,0,0].map((_,index) => (
                    <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>{index + 1}</span>
                ))
            } */}

            {/* 배열도 깔끔하게 하면될듯*/}
            {/* [1,1,1,1,1,1,1,1,1,1] 이거랑 똑같은거임  */}
            {
                new Array(10).fill(1).map((_,index) => (
                    <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>{index + 1}</span>
                ))
            }

 
        </div>
    )
}