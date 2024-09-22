export default function Checkbox() {

    const a2 = () => {
        alert("클릭 2")
    }
    const a3 = (event:any) => {
        event.stopPropagation()
        alert("클릭 3")
    }

    return (
        <span onClick={a2}>
            <input type="checkbox" onClick={a3} />
        </span>
    )
}