import { ApolloClient, gql, InMemoryCache, useMutation } from "@apollo/client"
import type { ChangeEvent } from "react"
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const UPLOAD_FILE = gql`
    mutation uploadFile($file:Upload!) {
        uploadFile(file: $file){
            url
        }
    }
    `

export default function ImageUploadPage () :JSX.Element {
    const uploadLink = createUploadLink( {

    })


    const client = new ApolloClient({
        uri:"" , //그래프 큐엘 주소,
        cache :new InMemoryCache(), // 컴퓨터의 메모리에다 백엔드에서 받아온 데이터 임시 저장하기.
    })

    const[uploadFile] = useMutation(UPLOAD_FILE);


    const onChangeFile = async (event:ChangeEvent<HTMLInputElement>) : Promise<void> => {
        const file = event.target.files?.[0]    // 배열로 들어오는 이유 : <input type="file" multiple /> 일때 여러개 드래그 가능
        console.log(file)
        const result = await uploadFile({ variables:{file}})
        console.log(result.data?.uploadFile.url);
    }

    // 업로드 할때 apollo 필요 파일이 있음
    // yarn add apollo-upload-client


    
    return (
        <>
            <input type="file" onChange={onChangeFile}></input>
        </>
    )
}