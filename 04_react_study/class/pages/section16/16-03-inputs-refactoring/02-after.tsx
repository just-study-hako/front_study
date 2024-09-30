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
    // writer, title, contents 를 하나의 객체로 묶기
    const [inputs, setInputs] = useState({
        writer: "",
        title: "",
        contents : ""
    })

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { ...inputs }
        })
        console.log(result)
    }

    // 3개로 되어있던것들을 공통되게바꾸고 묶어서 하나로 줄이기

    const onChangeInputs = (event : any) => {
        setInputs({
            ...inputs,
            [event.target.id] : event.target.value
        })
    }

    // 아래도 위랑 동일함.
    // 기존값을 가져와서 바꿔주는 아래코드가 유지보수 등에서 더 좋음
    // const onChangeInputs = (event) => {
    //     setInputs((prev) => {
    //         return {
    //             ...prev,
    //             [event.target.id] : event.target.value
    //         };  
    //     })
    // }

    return( 
    <div>
        작성자: <input type="text" id="writer" onChange={onChangeInputs}/>
        제목: <input type="text" id="title" onChange={onChangeInputs}/>
        내용: <input type="text" id="contents" onChange={onChangeInputs}/>
        <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
    )   
    // 한줄로 할때는 괄호 () 필요 없음.

}