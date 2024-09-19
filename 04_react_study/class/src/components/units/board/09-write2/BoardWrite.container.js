    import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter";
import {CREATE_BOARD, UPDATE_BOARD} from "./BoardWrite.queries"
import { useRouter } from "next/router";


export default function BoardWrite (props) {
    // 로직은 담고 UI는 안담음
    const [writer,setWriter] = useState(    )
    const [title,setTitle] = useState()
    const [contents,setContents] = useState()
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const router = useRouter()

    const onClickSubmit = async () => {
        // 게시글 생성하기
        const result = await createBoard({
            variables: {  
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section09/09-04-boards/${result.data.createBoard.id}`)
    }

    const onClickUpdate = async () => {
        const myVariables = {
            id : String(router.query.number)
        }
        if(title){
            myVariables.title = title;
        }
        if(contents){
            myVariables.contents = contents;
        }

        // 게시글 업데이트 하기
        // console.log(router);
        const result = await updateBoard({
            variables: myVariables
        })
        console.log(result)
        router.push(`/section09/09-04-boards/${result.data.updateBoard.id}`)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    
    return(
        <BoardWriteUI 
            onClickSubmit={onClickSubmit} 
            onClickUpdate={onClickUpdate}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isEdit={props.isEdit}
            data={props.data}   // undefined 이거나 data 이거나 둘중하나.
        />
    )
}