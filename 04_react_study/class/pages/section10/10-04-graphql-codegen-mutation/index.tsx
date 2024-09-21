import { useMutation ,gql} from "@apollo/client"
import { useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types2";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String!, $title: String!, $contents: String!) {
        createBoard(request: { writer: $writer, title: $title, contents: $contents }) {
            message
            writer
            title
            contents
            id
        }
    }
`;


export default function GraphqlMutationPage (){
  const [writer , serWriter] = useState<Number>()
  // useState는 이런식으로 지정함


    // const [CreateBoard] = useMutation<결과타입, 변수타입>(CREATE_BOARD)
    const [CreateBoard] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs>(CREATE_BOARD)
    const onClickSubmit = async () => {
      const result = await CreateBoard({
        variables: {
          request: {
            writer: "훈이",
            title: "안녕하세요",
            contents: "반갑습니다"
          },
        },
      });
      console.log(result);
    };

   
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    // 한줄로 할때는 괄호 () 필요 없음.

}
