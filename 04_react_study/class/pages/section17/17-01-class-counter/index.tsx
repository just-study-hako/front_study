import { Component } from "react";

export default class ClassCounterPage extends Component{
    // state, porps 등의 기능을사용하기 위해 Component를 상속받아서 사용


    state = {
        count: 0,
    }

    onClickCountUp = () :void  => {
        console.log(this.state.count)
        this.setState({
            count : 1,
        })
    }

    // 리액트에서는 랜더 함수를 만들어 줘야함
    render() :JSX.Element {
        return(
            <>
                <div>{this.state.count}</div>
                <button onClick={this.onClickCountUp}>카운트 올리기</button>
            </>
        )
        
    }
}