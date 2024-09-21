// 유틸리티 타입은 어떤 타입이 있고, 그거를 내마음대로 다른타입으로 만들어 내는것.
// 기존에 타입이 하나 있어야함

 interface IProfile{
    name : string
    age : number
    school : string
    hobby? : string
}

interface IProfile2{
    name? : string
    age? : number
    school? : string
    hobby? : string
}

// IProfile2를 만들고 싶은데 내용물이 사실상 거의 똑같아서 낭비하는것 같다.
// 이럴때 쓰는게 유틸리티 타입

// 1. Partial 타입 
type a = Partial<IProfile>
// a 에 마우스를 올려보면 모든 타입이 ?가 붙어있음

//--------------------------------------------------

interface IProfile3{
    name : string
    age : number
    school : string
    hobby : string
}
// 이번엔 모두 필수타입으로 새로 만들고 싶다.
// 2. Required 타입
type b = Required<IProfile>
// 모두 필수항목으로 바뀜.

//------------------------------------------------

interface IProfile4{
    name : string
    age : number
}
// 이번엔 일부만으로 이루어져있는걸 만들고 싶음.
// 3. Pick 타입
type c = Pick<IProfile,"name"|"age">

//------------------------------------------------

interface IProfile5{
    name : string
    age : number
    hobby : string
}
// 반대로 특정항목을 없애고 싶다
// 4. Omit 타입
type d = Omit<IProfile,"school">

//------------------------------------------------

// 5. Record 타입
// 유니온 = 합집합
type ee = "a" | "b" | "c"       // Union 타입
let alp1: ee = 'a'
let alp2: ee = 'b'
let alp3: ee = 'c'
// let alp4: ee = 'd'           // 
// let alp5: ee = 'e'           //  이 두개는 안됨  특정한 값들만 넣도록 세팅할 수 있음.

// 위의 유니온 타입을 가지고 Record타입을 만들게됨.
type e = Record<ee,IProfile>
// 각 키마다의 IProfile을 만들 수 있음.

// 예를들어 과목별 성적이 들어간 객체와 학생들의 이름이 있는 Union 타입을 사용할 수 있을듯.

//------------------------------------------------

// 객체 안에있는 키들을 뽑아서 Union타입으로 만들기
// 6. keyof 타입
type f = keyof IProfile 
let key1 : f = "age"
let key2 : f = "hobby"
let key3 : f = "name"
let key4 : f = "school"
// let key6 : f = "apple"       
// let key7 : f = "banana"          

//------------------------------------------------

// 7. type vs interface 차이  :  선언 병합 가능의 여부 (Interface는 가능함)
// 선언 병합 
interface IProfile{
    alp : number    
}
// 기존에 있던 IProfile과 합쳐짐 
// 타입은 불가능함.


// 응용
let profile : Partial<IProfile> ={
    name: "aa",
    alp : 5
}

