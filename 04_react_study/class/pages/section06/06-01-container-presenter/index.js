// 사실상 접속은 pages 폴더의 페이지뿐
// 다른데서 만든걸 여기로 갖고와야 접속이 가능해짐.

// import BoardWrite from "@/src/components/units/board/write/BoardWrite.container" < 왠지 오류남
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container"

export default function GraphqlMutationPage (){


    return( 
        <BoardWrite/>
    )   
}