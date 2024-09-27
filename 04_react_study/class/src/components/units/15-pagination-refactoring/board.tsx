import { IQuery } from "../../../commons/types/generated/types2"

interface IBoardListProps{
    data?:Pick<IQuery,"getBoards">;
}

export default function BoardList(props : IBoardListProps) :JSX.Element {
    return (
        <div>
            {props.data?.getBoards?.map(el => (
                <div key={el?.id}>
                    <span style={{ margin: "15px", padding: "0px" }}>{el?.title}</span>
                    <span style={{ margin: "15px" }}>{el?.writer}</span>
                </div>
            ))}
        </div>
    )
}