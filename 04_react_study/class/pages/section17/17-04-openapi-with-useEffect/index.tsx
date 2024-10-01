import axios from "axios"
import { useEffect, useState } from "react"
export default function RestGetPage () {

    const [yaoyao, setYaoyao] = useState("")

      

    // useEffect(() => {
    //     const onClickSync = async () :void =>{
    //     const result = await axios.get("https://genshin.jmp.blue/characters/yaoyao/card")
    //     console.log(result)  // 제대로된 결과
    //     console.log(result.data)
    //     setYaoyao(result.data)
    //     }

    //     void onClickSync();
    // },[])

    useEffect(() => {
        const fetchImage = async () => {
            const response = await axios.get("https://genshin.jmp.blue/characters/yaoyao/card", {
                responseType: 'arraybuffer',
            });
    
            // ArrayBuffer를 Base64 문자열로 변환
            const base64 = Buffer.from(response.data, 'binary').toString('base64');
            const imageUrl = `data:image/png;base64,${base64}`;
    
            setYaoyao(imageUrl);
        };
    
        fetchImage();
    }, []);


    /*
    ReactQuery      rest + graphql
    ApolloClient    graphql
    */

    return (
        <div>
         
            {yaoyao && <img src={yaoyao} alt="Yaoyao" />}
   
            {/* <button onClick={onClickSync}>REST-API(동기) 요청하기</button> */}
        </div>
    )
}