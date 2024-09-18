package com.board.board.domain.controller;


import com.board.board.domain.dto.BoardCreateRequestDto;
import com.board.board.domain.dto.BoardCreateResponseDto;
import com.board.board.domain.dto.BoardResponseDto;
import com.board.board.domain.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

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
    public BoardResponseDto getBoard(@Argument Long boardId) {
        System.out.println("단일 보드 가져오기");
        System.out.println(boardId);
        return boardService.getBoard(boardId);
    }
}
