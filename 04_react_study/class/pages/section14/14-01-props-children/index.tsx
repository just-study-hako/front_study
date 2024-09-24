import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage() :JSX.Element{


    return (
        <div>
            <div>+++++++++빨간색 파란색 초록색++++++++++</div>
            <Example a="철수">
                <div>
                    <input type="text"></input>
                    <button>클릭!</button>
                    <div>div입니다</div>
                </div>
            </Example>
            <div>+++++++++빨간색 파란색 초록색++++++++++</div>
        </div>
    )
}