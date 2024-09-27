import { useState } from "react";
import type { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";
import type { IQuery, IQueryGetBoardsArgs } from "../../../commons/types/generated/types2";

interface IPageNationProps{
    refetch: (
        variables?: Partial<IQueryGetBoardsArgs> | undefined
        ) =>Promise<ApolloQueryResult<Pick<IQuery, "getBoards">>>;
    lastPage: number;
}


export default function PageNation(props:IPageNationProps):JSX.Element{
    // 현재 페이지 세트 계산할 startPage
    const [startPage, setStartPage] = useState(1);

    const onClickPage = (event:MouseEvent<HTMLSpanElement>): void => {
        void props.refetch({page: Number(event.currentTarget.id)})
    }

    const onclickPrevPage = ():void => {
        // startPage 가 1이면 -10 하면 -페이지가 나오니 그냥 리턴시킴
        if(startPage === 1) return;
        setStartPage(startPage - 10)
        void props.refetch({page: startPage - 10})
    }

    const onclickNextPage = () :void => {
        // 마지막 페이지를 계산해야함.  = 페이지당 10개니까  전체 갯수 /10 나머지 올림 (전체갯수는 백에서 받아와야함.)
        // 마지막 페이지가 있는 세트에서는 다음페이지 작동 안되게 해야함.
        // 마지막 페이지가 6이면 7~10 페이지도 안보이도록 해보자.
        if(startPage + 10 > props.lastPage) return;
        setStartPage(startPage + 10)
         void props.refetch({page: startPage + 10})
    }

    return(
        <>
        <span onClick={onclickPrevPage}>이전 페이지</span>
            {
                new Array(10).fill(1).map((_,index) => 
                    index + startPage <= props.lastPage &&
                    (<span 
                    key={index + startPage} 
                    id={String(index + startPage)} 
                    onClick={onClickPage}>
                        {index + startPage}
                    </span>)
                )}
            <span onClick={onclickNextPage}>다음 페이지</span>
        </>
    )
}