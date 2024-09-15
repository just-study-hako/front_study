package com.example.demo.graphql.dto;

import lombok.Getter;

@Getter
public class GraphqlRemoveResponseDto {
    private String message;

    public GraphqlRemoveResponseDto(String message) {
        this.message = message;
    }
}
