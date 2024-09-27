package com.board.board.domain.service;

import com.board.board.domain.dto.BoardCreateRequestDto;
import com.board.board.domain.dto.BoardCreateResponseDto;
import com.board.board.domain.dto.BoardUpdateRequestDto;
import com.board.board.domain.dto.BoardUpdateResponseDto;
import com.board.board.domain.entity.Board;
import com.board.board.domain.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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

    public List<Board> getBoards(int page){
        System.out.println("최신 10개 출력하기");
        System.out.println(page);
        // PageRequest.of(pageNumber, pageSize, Sort.by("id").descending())를 사용하여 페이지네이션 설정
        PageRequest pageRequest = PageRequest.of(page - 1, 10, Sort.by("id").descending());

        // repository에서 페이지네이션된 결과를 가져옴
        Page<Board> boardPage = boardRepository.findAllByOrderByIdDesc(pageRequest);

        // List로 반환
        return boardPage.getContent();
    }

    public String deleteBoard(Long boardId) {
        boardRepository.deleteById(boardId);
        return (boardId+" 게시물이 삭제되었습니다.");
    }

    public BoardUpdateResponseDto updateBoard(BoardUpdateRequestDto input) {
        Board board = boardRepository.findById(input.getId()).get();
        board.update(input);
        boardRepository.save(board);
        String message = input.getId() + "게시글이 수정 완료되었습니다";
        return new BoardUpdateResponseDto(message, board);
    }

    public String getBoardsCount(){
        return String.valueOf(boardRepository.countBoardByIdNotNull());
    }
}
