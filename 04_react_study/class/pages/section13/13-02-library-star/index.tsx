import React, { useState } from 'react';
import { Flex, Rate } from 'antd';


export default function App(){
  const [value, setValue] = useState(3);


    // // 1 단계 방식
    // const onChangeStar = (value : number) => {
    //     setValue(value);
    // }

    // // 2단계 방식
    // const onChangeStar = (value : number) => setValue(value);

  return (
    //   <Rate onChange={onChangeStar} value={value} />    // 1 단계   여기의 onChange는 기존의 onChange가 아니라 ant디자인 만든데서 만든 기능임.
    //   <Rate onChange={onChangeStar} value={value} />    // 2단계
    //   <Rate onChange={(value : number) => setValue(value)} value={value} />    // 3단계
       <Rate onChange={setValue} value={value} />   // 4단계
       // 어떤 함수가 바인딩 되어있을 떄 들어오는 인자값이 그대로 함수의 인자로 전달될때 위처럼 생략이 가능함.
  );
};