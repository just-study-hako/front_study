export default function TypescriptPage () {
    let a = "안녕하세요"
    // a = 3;    // 에러발생 'number'형식은 'string' 형식에 할당할 수 없습니다.
    // js에서는 에러가 표시되지 않아서 나중에 지뢰처럼 한가득 터져버림.
    // let aaa:string 을 안해줘도 되는이유
    // 타입 추론 : 처음 들어간 값을 가지고 타입을 추론하는것.

    let b: string  = "반갑습니다"
    // b = 10;    // 역시 타입 에러 발생함.

    // 명시 하던 안하던 타입추론으로 잡아주는데 할필요가 있나?
    // 특정 상황에는 필요한 경우가 있음.
    // 혹은 회사마다 규칙을 지킬것.

    let c = 1000  // 숫자일수도, 문자열일수도 있음
    // c = "1000원"  // 타입추론으로 숫자로 추론이 되어버렸음

    let d: number | string = 1000     // | 을 사용하면 숫자 혹은 string 타입이야 라고 지정해줄 수 있음
    d = "1000원"

    //-------------------------------------------------------------------------
    // 숫자 타입
    let e : number = 10

    // 불린 타입
    let f : boolean = true
    f = false
    // f = "false" // 이런식으로 백이나 프론트의 checkbox버튼등을 통해서 문자열로 받아오는 경우가 있음
    // 그런데 "false" 는 값이 있는 문자열이라 굳이 불린으로 구분하자면 true 가 되버림.
    // 이런경우가 JS 에서 수많은 에러가 발생했음.

    // 배열 타입
    let g: number[] = [1,2,3,4,5,6]
    // g = ['a','b','c','d','e'] // 문자열이 들어갈 수 없음
    let h : string[] = ['a','b','c']
    // h = [1,2,3,4]    // 문자열 이외는 들어갈 수 없음
    let i = ['a','b','c',1,2,3]     // 변수명에 마우스를 올려보면 어떤 타입으로 추론되었는지 확인이 가능함
    let j :(string | number)[] = ['a','b','c',1,2,3]

    // 객체 타입
    const profile = {
        name : "a",
        age : 10,
        address : "서울"
    }
    profile.name = "b"          // 같은 타입끼리는 수정이 가능함
    // profile.age = "10살"     // 타입 추론 number 로 끝났기에 에러남
    // profile.hobby = "수영"   // 타입 추론이 끝나면 새로운 값을 넣을 수 없음

    interface IProfile {        // 타입스크립트에서는 ,필요없음
        name : string,
        age : number | string,
        address : string
        hobby?: string          // ? 붙이면 있어도 없어도 되는값
    }
    const profile2 : IProfile = {
        name : "b",
        age : 10,
        address : "서울"
    }
    profile2.name = "c"         
    profile2.age = "10살"    
    profile2.hobby = "수영" 


    // 함수 타입
    // 함수를 만들때 타입을 지정할것
    function add(num1 : number, num2 : number, unit:string):string {
        return num1 + num2 + unit
    }
    const result = add(1000,2000,"원")  // 결과의 return타입도 예측이 가능함.

    const add2 = (num1 : number, num2 : number, unit:string):string =>{
        return num1 + num2 + unit
    }
    const result2 = add(1000,2000,"원")


    // any 타입     가급적 자제해주는게 좋음  // 자바스크립트와 동일함
    let k : any = "a"
    k = 123
    k = true
    // 말 그대로 모든타입에 대응이 가능하다는것.




    return <></>
}