import { useEffect, useState } from "react";
import "./ChessBoard.css";

interface BoardProps {
    columns: number,
    rows: number,
}

type PieceType = 'rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'pawn';
type PieceColor = 'black' | 'white';

interface IChessPiece {
    type: PieceType;
    color: PieceColor;
    code: string;
    coordinates: string;
}


export default function ChessBoard({ columns, rows }: BoardProps) {
    const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const pieceMap:IChessPiece[] = [
        {"code": "r", "type": 'rook', color:"white", coordinates: "A1"},
        {"code": "kn", "type": 'knight', color:"white", coordinates: "B1"},
        {"code": "b", "type": 'bishop', color:"white", coordinates: "C1"},
        {"code": "q", "type": 'queen', color:"white", coordinates: "D1"},
        {"code": "k", "type": 'king', color:"white", coordinates: "E1"},
        {"code": "b", "type": 'bishop', color:"white", coordinates: "F1"},
        {"code": "kn", "type": 'knight', color:"white", coordinates: "G1"},
        {"code": "r", "type": 'rook', color:"white", coordinates: "H1"},

        {"code": "p", "type": 'pawn', color:"white", coordinates: "A2"},
        {"code": "p", "type": 'pawn', color:"white", coordinates: "B2"},
        {"code": "p", "type": 'pawn', color:"white", coordinates: "C2"},
        {"code": "p", "type": 'pawn', color:"white", coordinates: "D2"},
        {"code": "p", "type": 'pawn', color:"white", coordinates: "E2"},
        {"code": "p", "type": 'pawn', color:"white", coordinates: "F2"},
        {"code": "p", "type": 'pawn', color:"white", coordinates: "G2"},
        {"code": "p", "type": 'pawn', color:"white", coordinates: "H2"},

        {"code": "R", "type": 'rook', color:"black", coordinates: "A8"},
        {"code": "KN", "type": 'knight', color:"black", coordinates: "B8"},
        {"code": "B", "type": 'bishop', color:"black", coordinates: "C8"},
        {"code": "Q", "type": 'queen', color:"black", coordinates: "D8"},
        {"code": "K", "type": 'king', color:"black", coordinates: "E8"},
        {"code": "B", "type": 'bishop', color:"black", coordinates: "F8"},
        {"code": "KN", "type": 'knight', color:"black", coordinates: "G8"},
        {"code": "R", "type": 'rook', color:"black", coordinates: "H8"},

        {"code": "P", "type": 'pawn', color:"black", coordinates: "A7"},
        {"code": "P", "type": 'pawn', color:"black", coordinates: "B7"},
        {"code": "P", "type": 'pawn', color:"black", coordinates: "C7"},
        {"code": "P", "type": 'pawn', color:"black", coordinates: "D7"},
        {"code": "P", "type": 'pawn', color:"black", coordinates: "E7"},
        {"code": "P", "type": 'pawn', color:"black", coordinates: "F7"},
        {"code": "P", "type": 'pawn', color:"black", coordinates: "G7"},
        {"code": "P", "type": 'pawn', color:"black", coordinates: "H7"},
        
    ]

    const [board, setBoard] = useState<string[][]>(Array.from({ length: rows }, () =>
        Array(columns).fill("")
    ));

  const setPosition = (coordinates:string) => {
    let newBoard = [...board];
    newBoard[0][1] = "rook";
    setBoard(newBoard);
  }

  const getBoardIndicies = (coordinates:string): [number, number] => {
    const col = files.indexOf(coordinates[0]);
    const row = rows - parseInt(coordinates[1]);
    return [row, col];
  }

  const setupBoard = (_board:string[][], _pieceMap:IChessPiece[]) => {
    
    let newBoard = [..._board];

    _pieceMap.forEach(piece => {
        const [row, col] = getBoardIndicies(piece.coordinates);
        newBoard[row][col] = piece.code;
    })
    setBoard(newBoard);
  }

    const clearBoard = (board:string[][]) => {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
            }
        }
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();      
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const boardX = event.currentTarget.className.split(' ')[1]      
        const boardY = event.currentTarget.className.split(' ')[2] 
        console.log("Setting at: ", boardX, boardY)
    }

    useEffect(() => {
        setupBoard(board, pieceMap);
    }, [setBoard]);

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            className={`cell ${files[colIndex]}${rows - rowIndex}`}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}>
                            {cell && <span className="piece">{cell}</span>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
