import { useMutation ,gql} from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
mutation {
    createGraphql(writer: "철수", title: "안녕하세요", contents: "반갑습니다") {
        message
    }
}
`
export default function GraphqlMutationPage (){
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        try{
            const result = await 나의함수()
            console.log(result);
        }catch (error){
            console.error("Error",error);
        }
    };
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    // 한줄로 할때는 괄호 () 필요 없음.

}
