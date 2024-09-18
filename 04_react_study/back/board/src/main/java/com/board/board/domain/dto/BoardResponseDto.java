package com.board.board.domain.dto;

import com.board.board.domain.entity.Board;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class BoardResponseDto {
    private String writer;
    private String title;
    private String contents;
    private Long id;


    public BoardResponseDto(Board board) {
        this.writer = board.getWriter();
        this.title = board.getTitle();
        this.contents = board.getContents();
        this.id = board.getId();
    }


}
