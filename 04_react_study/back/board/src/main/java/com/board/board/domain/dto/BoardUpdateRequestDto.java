package com.board.board.domain.dto;


import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class BoardUpdateRequestDto {
    private Long id;
    private String title;
    private String contents;

}
