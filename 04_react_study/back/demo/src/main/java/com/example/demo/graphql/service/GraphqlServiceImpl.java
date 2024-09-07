package com.example.demo.graphql.service;

import com.example.demo.graphql.dto.GraphqlCreateRequestDto;
import com.example.demo.graphql.entity.Graphql;
import com.example.demo.graphql.repository.GraphqlRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class GraphqlServiceImpl implements GraphqlService {
    private final GraphqlRepository graphqlRepository;
    private final ObjectMapper jacksonObjectMapper;

    // 만들기
    @Override
    public void createGraphql(GraphqlCreateRequestDto graphqlCreateRequestDto){
        Graphql graphql = new Graphql(graphqlCreateRequestDto);
        graphqlRepository.save(graphql);
    }


    @Override
    public void createGraphql(String requestBody){
        System.out.println(requestBody);
        String variablesString = "";
        String writer = "";
        String title = "";
        String contents = "";


        try {

            // JSON 문자열을 JsonNode 로 파싱
            JsonNode jsonNode = jacksonObjectMapper.readTree(requestBody);
            System.out.println(jsonNode);
            // JSON 에서 query 문자열 추출
//            String query = jsonNode.path("query").asText();
            String query = jsonNode.get("query").asText();
            System.out.println(query);
            JsonNode variables = null;
            if (query.contains("$writer")) {
                variables = jsonNode.get("variables");
            }

            System.out.println(variablesString);
            // query 문자열에서 writer 값 추출
            if (variables != null) {
                writer = variables.get("writer").asText();
            } else {
                writer = extractWriter(query);
            }

            System.out.println(writer);
            // title, contents 추출
            if (variables != null) {
                title = variables.get("title").asText();
            } else {
                title = extractTitle(query);
            }
            if (variables != null) {
                contents = variables.get("contents").asText();
            } else {
                contents = extractContents(query);
            }

            Graphql graphql = new Graphql(writer, title, contents);
            graphqlRepository.save(graphql);


        }catch (Exception e) {
            e.printStackTrace();
            System.out.printf("에러났음.");
        }


    }

    private String extractWriter(String query) {
        // 간단한 예제: "writer: \"철수\"" 부분 추출
        // 정규 표현식 또는 문자열 검색을 사용하여 "writer" 값을 추출할 수 있습니다
        int writerStart = query.indexOf("writer: \"") + "writer: \"".length();
        int writerEnd = query.indexOf("\"", writerStart);
        if (writerStart > 0 && writerEnd > writerStart) {
            return query.substring(writerStart, writerEnd);
        }
        return null;
    }
    private String extractTitle(String query) {
        int titleStart = query.indexOf("title: \"") + "title: \"".length();
        int titleEnd = query.indexOf("\"", titleStart);
        if (titleStart > 0 && titleEnd > titleStart) {
            return query.substring(titleStart, titleEnd);
        }
        return null;
    }
    private String extractContents(String query) {
        int contentsStart = query.indexOf("contents: \"") + "contents: \"".length();
        int contentsEnd = query.indexOf("\"", contentsStart);
        if (contentsStart > 0 && contentsEnd > contentsStart) {
            return query.substring(contentsStart, contentsEnd);
        }
        return null;
    }

}
