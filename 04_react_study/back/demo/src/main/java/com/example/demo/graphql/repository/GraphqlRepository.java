package com.example.demo.graphql.repository;

import com.example.demo.graphql.entity.Graphql;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GraphqlRepository extends JpaRepository<Graphql,Long> {
}
