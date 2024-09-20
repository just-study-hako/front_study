import { useMutation } from "@apollo/client"
import { useState, ChangeEvent  } from "react"
import BoardWriteUI from "./BoardWrite.presenter";
import {CREATE_BOARD, UPDATE_BOARD} from "./BoardWrite.queries"
import { useRouter } from "next/router";
import { IBoarWriteProps, IMyVariables } from "./BoardWrite.types";



export default function BoardWrite (props: IBoarWriteProps) {
    // tsx했을대 props가 에러가 나는데
    // 함수의 들어가는 타입도 지정을 해줘야함 - 함수는 타입 추론이 안됨.
    // 받아오는게 new 페이지에서 isEdit = {false} 를 가져오기에 객체 타입임

    // 로직은 담고 UI는 안담음
    const [writer,setWriter] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")
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
        router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.id}`)
    }

    const onClickUpdate = async () => {

        const myVariables :IMyVariables = {
            id : String(router.query.number)
        }
        // myVariables 객체의 타입이 id : String 으로 되어있기에
        // 새롭게 값을 넣으려면 기존에 타입을 추론해서 넣어줘야함

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
        router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.id}`)
    }

    const onChangeWriter = (event:ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event:ChangeEvent<HTMLInputElement>) => {
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