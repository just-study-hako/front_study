import { StepForwardOutlined } from "@ant-design/icons";
import styled from '@emotion/styled'
import { MouseEvent } from "react";

const MyIcon = styled(StepForwardOutlined)`
    color: red;
    font-size: 100px;
`;



export default function LibraryIconPage() {
    const onClickDelete = (event : MouseEvent<HTMLDivElement>) => {
        console.log(event.currentTarget.id)
    }
    return(
        <div  id="삭제할게시ID"  onClick={onClickDelete}>
            <MyIcon/>
        </div>
    )
}