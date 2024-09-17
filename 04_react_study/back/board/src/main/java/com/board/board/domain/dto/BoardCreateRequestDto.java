package com.board.board.domain.dto;


import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class BoardCreateRequestDto {
    private String writer;
    private String title;
    private String contents;

}