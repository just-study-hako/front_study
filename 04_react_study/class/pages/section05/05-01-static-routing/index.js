import { useRouter } from "next/router"

export default function StaticRoutingPage() {
    const router = useRouter()
    
    const onClickMove = () => {
// push = 해당 주소로 이동
        router.push("/section05/05-01-static-routing-moved")
// http://localhost:3000/section05/05-01-static-routing-moved 가 됨

    }


// 버튼을 만들고 해당 버튼을 누르면 StaticRoutingMovedPage 로 이동하게끔
    return <button onClick={onClickMove}>페이지 이동하기!!</button>




}  
