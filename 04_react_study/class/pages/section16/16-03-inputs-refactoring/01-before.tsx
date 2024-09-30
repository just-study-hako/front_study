import { useMutation ,gql} from "@apollo/client"
import { useState } from "react"




const 나의그래프큐엘셋팅 = gql`
    mutation createGraphql($writer: String!, $title: String!, $contents: String!){
        createGraphql(writer: $writer, title: $title, contents: $contents){
            message
            writer
            title
            contents
        }
    }
`;


export default function GraphqlMutationPage (){
    const [writer,setWriter] = useState()
    const [title,setTitle] = useState()
    const [contents,setContents] = useState()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {      
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event : any) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event : any) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event : any) => {
        setContents(event.target.value)
    }


    return( 
    <div>
        작성자: <input type="text" onChange={onChangeWriter}/>
        제목: <input type="text"  onChange={onChangeTitle}/>
        내용: <input type="text"  onChange={onChangeContents}/>
        <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
    )   
    // 한줄로 할때는 괄호 () 필요 없음.

}