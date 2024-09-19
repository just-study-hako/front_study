package com.board.board.domain.entity;

import com.board.board.domain.dto.BoardCreateRequestDto;
import com.board.board.domain.dto.BoardUpdateRequestDto;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id", nullable = false)
    private Long id;

    @Column(name = "writer",nullable = false)
    private String writer;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "contents",nullable = false)
    private String contents;

    public Board(String writer, String title, String contents) {
        this.writer = writer;
        this.title = title;
        this.contents = contents;
    }
    public Board(BoardCreateRequestDto input) {
        this.writer = input.getWriter();
        this.title = input.getTitle();
        this.contents = input.getContents();
    }

    public void update(BoardUpdateRequestDto input) {
        if (input.getTitle() != null) {
            this.title = input.getTitle();
        }
        if (input.getContents() != null) {
            this.contents = input.getContents();
        }
    }
}
