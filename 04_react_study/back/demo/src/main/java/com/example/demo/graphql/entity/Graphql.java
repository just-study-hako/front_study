package com.example.demo.graphql.entity;


import com.example.demo.graphql.dto.GraphqlCreateRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Graphql {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "graphql_id", nullable = false)
    private Long id;

    @Column(name = "writer",nullable = false)
    private String writer;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "contents",nullable = false)
    private String contents;

    @Column(name = "menssage", nullable = false)
    private String message;


    public Graphql(GraphqlCreateRequestDto graphqlCreateRequestDto) {
        this.writer = graphqlCreateRequestDto.getWriter();
        this.title = graphqlCreateRequestDto.getTitle();
        this.contents = graphqlCreateRequestDto.getContent();
    }

    public Graphql(String writer, String title, String contents,String message) {
        this.writer = writer;
        this.title = title;
        this.contents = contents;
        this.message = message;
    }


}
