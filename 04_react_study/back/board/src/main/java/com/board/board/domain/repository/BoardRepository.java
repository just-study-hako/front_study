package com.board.board.domain.repository;

import com.board.board.domain.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
