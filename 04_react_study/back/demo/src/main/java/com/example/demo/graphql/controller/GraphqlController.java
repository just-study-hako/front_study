package com.example.demo.graphql.controller;


import com.example.demo.graphql.entity.Graphql;
import com.example.demo.graphql.service.GraphqlService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/graphql")
@Slf4j
public class GraphqlController {

    private final GraphqlService graphqlService;

    @MutationMapping
    public Graphql createGraphql(
            @Argument String writer,
            @Argument String title,
            @Argument String contents) {

        return graphqlService.createGraphql(writer,title,contents);

    }

    @QueryMapping
    public Graphql fetchBoard(@Argument int number){
        return graphqlService.findGraphqlById(number);
    }




}
