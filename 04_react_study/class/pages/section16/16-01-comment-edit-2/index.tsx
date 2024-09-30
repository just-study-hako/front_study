import { gql, useQuery } from "@apollo/client"
import type { IQuery,IQueryGetBoardsArgs } from "../../../src/commons/types/generated/types2"
import { MouseEvent, useState } from "react"


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
    // 한개가 아닌 여러개를 동시에 수정 인풋란으로 바꿀 수있도록 만들기
    // 각각 인덱스마다 false,true를 주고 해당 인덱스의 값이true면 인풋란으로 바꾸기
    const [myIndex, setMyIndex] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);
    const { data } = useQuery<Pick<IQuery,"getBoards">,IQueryGetBoardsArgs>(FETCH_BOARDS) 
    
    // const onClickEdit = (event : MouseEvent<HTMLButtonElement>):void => {
    //     const a = myIndex
    //     a[Number(event.currentTarget.id)] = true
    //     setMyIndex(a);
    // }

    // 위코드를 사용해보면 동작을 하지 않는다
    
    // const [count ,setCount] = useState(1)
    // setCount(1)

    // 값이 1이 있는곳에 setCount(1)로 똑같은 값을 넣으려고하면 동작하지 않도록 되어있다
    // 이와 비슷한 이유로 위의 myIndex도 동작하지 않는것
    // a = myIndex는 얕은 복사로 주소값이 복사된것이기에
    //     a[Number(event.currentTarget.id)] = true 여기서 이미 원본도 바뀌어있음
    // setMyIndex(a)를 하면 내용물이 동일해서 같은값으로 인식하는것

    
    const onClickEdit = (event : MouseEvent<HTMLButtonElement>):void => {
        const a = [...myIndex]                      // 여기나
        a[Number(event.currentTarget.id)] = true
        setMyIndex([...a]);                         // 여기 둘중 하나만 해도 됨
    }

    return (
        <div>
            {data?.getBoards?.map((el,index) => (
                myIndex[index] === false ? (
                <div key={el?.id}>
                    <span style={{margin:"15px", padding: "0px"}}>{el?.title}</span> 
                    <span style={{margin:"15px"}}>{el?.writer}</span>
                    <button id={String(index)} onClick={onClickEdit}>수정하기</button>
                </div>
                ) : (
                    <input type="text" key={el?.id}></input>
                )
                
            ))}

 
        </div>
    )
}