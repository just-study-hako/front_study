package com.example.demo.graphql.service;

import com.example.demo.graphql.dto.GraphqlCreateRequestDto;

public interface GraphqlService {

    void createGraphql (GraphqlCreateRequestDto graphqlCreateRequestDto);
    void createGraphql (String requestBody);
}
