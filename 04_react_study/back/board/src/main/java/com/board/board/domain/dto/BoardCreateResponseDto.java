package com.board.board.domain.dto;


import com.board.board.domain.entity.Board;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class BoardCreateResponseDto {

    private String message;
    private String writer;
    private String title;
    private String contents;
    private int id;

    public BoardCreateResponseDto(String message, Board board) {
        this.message = message;
        this.writer = board.getWriter();
        this.title = board.getTitle();
        this.contents = board.getContents();
        this.id = board.getId().intValue();



    }

}
