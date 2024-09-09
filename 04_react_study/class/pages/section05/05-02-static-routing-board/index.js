import { useRouter } from "next/router"

export default function StaticRoutingPage() {
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/section05/05-02-static-routing-board-moved/1")
    }
    const onClickMove2 = () => {
        router.push("/section05/05-02-static-routing-board-moved/2")
    }

    const onClickMove3 = () => {
        router.push("/section05/05-02-static-routing-board-moved/3")
    }
    const onClickMove4 = () => {
        router.push("/section05/05-02-static-routing-board-moved/4")
    }
    const onClickMove5 = () => {
        router.push("/section05/05-02-static-routing-board-moved/5")
    }



    // 버튼을 만들고 해당 버튼을 누르면 StaticRoutingMovedPage 로 이동하게끔
    return (
        <div>
            <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
            <button onClick={onClickMove4}>4번 게시글로 이동하기</button>
            <button onClick={onClickMove5}>5번 게시글로 이동하기</button>
        </div>
    )




}  
