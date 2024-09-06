package com.example.demo.graphql.dto;


import lombok.Getter;

@Getter
public class GraphqlCreateResponseDto {


    // HTTP 응답 상태 코드
    private int status;

    // 응답 메시지
    private String message;


    public GraphqlCreateResponseDto(int status, String message) {
        this.status = status;
        this.message = message;
    }

}
