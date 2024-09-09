package com.example.demo.graphql.service;

import com.example.demo.graphql.entity.Graphql;

public interface GraphqlService {

    Graphql createGraphql (String writer, String title, String contents);
    Graphql findGraphqlById(int number);

}
