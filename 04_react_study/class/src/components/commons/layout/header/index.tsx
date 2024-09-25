import styled from "@emotion/styled"

const Wrapper = styled.div`
    height: 60px;
    background-color: yellow;
`
export default function LayoutHeader() :JSX.Element{
    return(
        <>
            <Wrapper>여기는 헤더입니다</Wrapper>
        </>
    )
}