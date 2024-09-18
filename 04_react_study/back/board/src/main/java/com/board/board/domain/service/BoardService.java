package com.board.board.domain.service;

import com.board.board.domain.dto.BoardCreateRequestDto;
import com.board.board.domain.dto.BoardCreateResponseDto;
import com.board.board.domain.entity.Board;
import com.board.board.domain.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Board getBoard(Long boardId) {
        System.out.println(boardId);
        return boardRepository.findById(boardId).get();
    }

    public List<Board> getBoards(){
        System.out.println("최신 10개 출력하기");
        return boardRepository.findTop10ByOrderByIdDesc();
    }

    public String deleteBoard(Long boardId) {
        boardRepository.deleteById(boardId);
        return (boardId+" 게시물이 삭제되었습니다.");
    }
}
