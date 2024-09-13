import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
`

export const BlueButton = styled.button`
    background-color: ${(props)=> props.isActive ? "yellow" : ""};
    // isActive 의 값을 특정 조건에서만 true가 되도록 하면 
    // 조건에 맞게 색이 변하는 버튼을 만들 수 있게됨.
    
    // (props)=>props.mycolor => mycolor 에 색을 넣고 직접 지정도 가능함
    
`