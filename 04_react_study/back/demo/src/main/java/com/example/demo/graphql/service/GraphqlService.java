package com.example.demo.graphql.service;

import com.example.demo.graphql.dto.GraphqlRemoveResponseDto;
import com.example.demo.graphql.entity.Graphql;

import java.util.List;

public interface GraphqlService {

    Graphql createGraphql (String writer, String title, String contents);
    Graphql findGraphqlById(int number);
    List<Graphql> findAllGraphql();
    GraphqlRemoveResponseDto removeGraphql (int id);

}
