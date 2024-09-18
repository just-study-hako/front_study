package com.board.board.domain.controller;


import com.board.board.domain.dto.BoardCreateRequestDto;
import com.board.board.domain.dto.BoardCreateResponseDto;
import com.board.board.domain.entity.Board;
import com.board.board.domain.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @MutationMapping
    public BoardCreateResponseDto createBoard(@Argument  BoardCreateRequestDto request) {
        System.out.println("보드 만들기 시작");
        System.out.println(request.getWriter());
        System.out.println(request.getTitle());
        System.out.println(request.getContents());
        return boardService.createBoard(request);
    }

    @QueryMapping
    public Board getBoard(@Argument Long boardId) {
        System.out.println("단일 보드 가져오기");
        System.out.println(boardId);
        return boardService.getBoard(boardId);
    }

    @QueryMapping
    public List<Board> getBoards(){
        System.out.println("가장 최신 게시글 10개 가져오기");
        return boardService.getBoards();
    }

    @MutationMapping
    public String deleteBoard(@Argument Long boardId) {
        System.out.println(boardId);
        System.out.println("게시글 삭제하기");
        return boardService.deleteBoard(boardId);
    }
}
