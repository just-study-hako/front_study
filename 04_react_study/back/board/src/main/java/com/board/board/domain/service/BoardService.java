package com.board.board.domain.service;

import com.board.board.domain.dto.BoardCreateRequestDto;
import com.board.board.domain.dto.BoardCreateResponseDto;
import com.board.board.domain.dto.BoardResponseDto;
import com.board.board.domain.entity.Board;
import com.board.board.domain.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BoardService {


    private final BoardRepository boardRepository;

    public BoardCreateResponseDto createBoard(BoardCreateRequestDto input) {

        System.out.println(input.getWriter());
        System.out.println(input.getTitle());
        System.out.println(input.getContents());
        Board board = new Board(input);
        boardRepository.save(board);
        String message = "새로운 보드가 등록 되었습니다.";
        return new BoardCreateResponseDto(message, board);
    }

    public BoardResponseDto getBoard(Long boardId) {
        System.out.println(boardId);
        Board board = boardRepository.findById(boardId).get();
        return new BoardResponseDto(board);

    }
}
