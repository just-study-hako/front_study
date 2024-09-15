    // 데이터를 외부나 백엔드에서 받아왔다는 가정 하에
    
    const FRUITS = [
        { number: 1, title: "레드향"},
        { number: 2, title: "샤인머스켓"},
        { number: 3, title: "산청 딸기"},
        { number: 4, title: "한라봉"},
        { number: 5, title: "사과"},
        { number: 6, title: "애플 망고"},
        { number: 7, title: "딸기"},
        { number: 8, title: "천혜향"},
        { number: 9, title: "과일선물세트"},
        { number: 10, title: "뀰"}
    ]
export default function MapFruitsPage() {
    // 실무 백엔드 데이터 예제 map 을 사용해서 객체안의 데이터를 정리해서 출력하기
    const fruitsList = FRUITS.map (el => <div>{el.number} {el.title}</div>)
    return(
        <div>
            <div>{fruitsList}</div>
            =============================
            <div>
                {FRUITS.map (el => <div>{el.number} {el.title}</div>)}
            </div>
        </div>
    )
}