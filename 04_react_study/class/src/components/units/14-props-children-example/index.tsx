interface IExampleProps{
    a:string;
    children: JSX.Element;
}

export default function Example(props : IExampleProps) {


    return(
        <div>
            <div>안녕하세요 영희입니다</div>
            <div>안녕하세요 {props.a}입니다</div>
            <div>안녕하세요 맹구입니다</div>
            <div>{props.children}</div>
        </div>
    )
}