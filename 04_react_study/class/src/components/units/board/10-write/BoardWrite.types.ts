import { ChangeEvent , MouseEvent} from "react"


export interface IBoarWriteProps{
    isEdit : boolean
    data?: any
}

export interface IMyVariables {
    id : String
    title? : String
    contents? : String
}

export interface IBoardWriteUIProps{
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit : boolean
    data? : any

    // 알트 + 컨트롤 누르고 위아래 이동하면 동시에 여러줄 선택 가능
    // 알트 누르채로 클릭하면 띄엄띄엄 줄 선택 가능
}
