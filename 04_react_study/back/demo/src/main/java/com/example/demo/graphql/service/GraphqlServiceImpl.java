package com.example.demo.graphql.service;

import com.example.demo.graphql.entity.Graphql;
import com.example.demo.graphql.repository.GraphqlRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class GraphqlServiceImpl implements GraphqlService {
    private final GraphqlRepository graphqlRepository;



    @Override
    public Graphql createGraphql (String writer,String title,String contents){
        Graphql graphql = new Graphql(writer, title, contents,"등록 완료");
        graphqlRepository.save(graphql);
        return graphql;
    }

    @Override
    public Graphql findGraphqlById(int number) {
        Long id = Long.valueOf(number);
        return graphqlRepository.findById(id).orElse(null);
    }
}
