import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function functionalCounterPage(): JSX.Element {

    const [count, setCount] = useState(0);

    const router = useRouter()

    useEffect(() => {    //componentDidMount 와 동일
        console.log("그려지고 나서 실행!!")
    }, []);
    useEffect(() => {    // componentDidUpdate + componentDidMount 와 동일
        console.log("변경되고 나서 실행!!")
    });
    useEffect(() => {   
        return () => {      // componentWillUnmount 와 동일
            console.log("사라지기 전에 실행!!")
        }
    }, []);

    // 1. useEffect 하나로 합치기
    useEffect(() => {   
        console.log("그려지고 나서 실행!!")
        return () => {     
            console.log("사라지기 전에 실행!!")
        }
    });
    // 마지막에 배열의유무
    // 배열이 없으면 처음실행 + 다시 그려질 때 마다 실행
    // 배열이 있으면 처음실행 + 배열의 값이 바뀔 때 마다 실행(빈배열이면 처음만 실행)
    // [count,writer,title] 이렇게 넣으면 안의 3개 값들이 바뀔때만 동작함
    // 의존하는 배열이라 의존성 배열(dependency-array) 라고 부름


    // 2. useEffect의 잘못된 사용방법
    useEffect (() => {
        setCount(1)
    },[count])
    /* 
    useEffect는 처음 그려질때 화면이 전부 그려지고 한번 동작
    내부에 setState가 있으면 값을 바꾸고 리랜드함 (절대로 하면안되는건 아님, 가급적 하지 않도록 하자)
    1. 추가랜더링이 발생해버림
    setCount(prev -> prev +1 )
    이런식으로 돌 때마다 값이 바뀌면
    리랜더링 할때마다 다시 실행이 반복되어서 무한반복에 빠져버림.
    */




    const onClickMove = (): void => {
        void router.push("/")
    }

    const onClickCountUp = (): void => {
        console.log(count)
        setCount(1)
    }



    // 리액트에서는 랜더 함수를 만들어 줘야함

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickMove}>나가기</button>
        </>
    );


}