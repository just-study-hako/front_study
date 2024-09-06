package com.example.demo.graphql.controller;


import com.example.demo.graphql.service.GraphqlService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/graphql")
@Slf4j
public class GraphqlController {

    private final GraphqlService graphqlService;


    // 만들기
//    @PostMapping
//    public void createGraphql(@RequestBody GraphqlCreateRequestDto graphqlCreateRequestDto) {
//        graphqlService.createGraphql(graphqlCreateRequestDto);
//    }

    @PostMapping
    public ResponseEntity<String> createGraphql(@RequestBody String requestBody) {
        graphqlService.createGraphql(requestBody);

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body("{\"data\":{\"createGraphql\": {\"message\": \"Success\" }}}");

    }
}
