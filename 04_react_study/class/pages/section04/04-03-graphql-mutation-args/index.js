import { useMutation ,gql} from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){


        createBoard(writer: $writer, title: $title, contents: $contents){
            __id
            number
            message
        }
    }
`


export default function GraphqlMutationPage (){
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            $: {        // $ = variables 변수 $ 대신 직접 variables 라고 써도 됨.
                writer: "훈이",
                title: "안녕하세요",
                contents: "반갑습니다"
            }
        })
        console.log(result)
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    // 한줄로 할때는 괄호 () 필요 없음.

}