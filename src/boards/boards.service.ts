import { Injectable } from '@nestjs/common';
import { Board, Boardstatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(CreateBoardDto: CreateBoardDto) {
    // const title = CreateBoardDto.title;
    // const description = CreateBoardDto.discription;
    // 아래와 같은 기능
    const { title, description } = CreateBoardDto;
    const board: Board = {
      id: uuid(),
      title, // title: title,하고 같은 기능을 함
      description,
      status: Boardstatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
