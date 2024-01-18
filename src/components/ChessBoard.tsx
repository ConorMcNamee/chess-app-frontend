import React, { useState } from 'react';
import ChessSquare from "./ChessSquare"

interface Chessboard {
    id: string,
}

const ChessBoard: React.FC = () => {

    const [chessboard, setChessboard] = useState();

    return (
        <div>
            <h2>Chess Board</h2>
        </div>
    )
}

export default ChessBoard