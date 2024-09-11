import { useMutation ,gql} from "@apollo/client"
import { useRouter } from "next/router";

const 나의그래프큐엘셋팅 = gql`
  mutation createGraphql($writer: String!, $title: String!, $contents: String!) {
    createGraphql(writer: $writer, title: $title, contents: $contents) {
      message
      writer
      title
      contents
      id
    }
  }
`;


export default function GraphqlMutationPage (){
    const router = useRouter()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const onClickSubmit = async () => {
        try {
          const result = await 나의함수({
            variables: {
              writer: "훈이",
              title: "안녕하세요",
              contents: "반갑습니다",
            },
          });
          console.log(result);
          console.log(result.data.createGraphql.id)
          router.push("/section05/05-05-dynamic-routing-board-mutation-moved/" + result.data.createGraphql.id)
          // router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createGraphql.id}`)
          // 위 둘 push 모두 동작함 입력 방식의 차이

        } catch (error) {
          console.error("GraphQL Mutation Error:", error);
        }
    };

   
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    // 한줄로 할때는 괄호 () 필요 없음.

}
