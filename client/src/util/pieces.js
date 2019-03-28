export class Queen {

    constructor(square) {
        this.square = square;
        this.name = 'Q';
    }

    getDir = () => {
        //return random direction in which piece could move
        const testDir = () => [Math.floor(3*Math.random()) - 1, Math.floor(3*Math.random()) - 1];
        let dir = testDir();
        while(!this.stepIsLegal(dir))
            dir = testDir();
        return dir;
    };

    getDirs = () => {
        const dirs = [];
        for(let i=-1; i<=1; i++) {
            for(let j=-1; j<=1; j++){
                if(!(i===0 && j===0))
                    dirs.push([i,j]);
            }
        }
        return dirs;
    };

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }

}

export class Rook {

    constructor(square) {
        this.square = square;
        this.name = 'R';
    }

    getDir = () => {
        const testDir = () => {
            //return random direction
            let rand = Math.floor(4*Math.random());
            switch(rand) {
                case 0 : return [0,1]; 
                case 1 : return [1,0];
                case 2 : return [0,-1];
                case 3 : return [-1, 0]; 
            }
        }
        let dir = testDir();
        while( !this.stepIsLegal(dir) ) {
            //not on board, try again
            dir = testDir();
        }
        return dir;
    };

    getDirs = () => {
        return [
            [1,0],
            [0,1],
            [-1,0],
            [0,-1]
        ];
    }

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }

}

export class Bishop {

    constructor(square) {
        this.square = square;
        this.name = 'B';
    }

    getDir = () => {
        //return random direction
        const testDir = () => [2*Math.floor(2*Math.random()) - 1, 2*Math.floor(2*Math.random()) - 1];
        let dir = testDir();
        while(!this.stepIsLegal(dir))
            dir = testDir();
        return dir;
    };

    getDirs = () => {
        return [
            [1,1],
            [-1,1],
            [-1,-1],
            [1,-1]
        ];
    }

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }

}

export class Knight {

    constructor(square) {
        this.square = square;
        this.name = 'N';
    }

    getDir = () => {
        //return random direction
        const testDir = () => {
            let rand = Math.floor(8*Math.random());
            switch(rand) {
                case 0 : return [1,2]; 
                case 1 : return [2,1];
                case 2 : return [-1,2];
                case 3 : return [-2, 1];
                case 4 : return [1, -2];
                case 5 : return [2, -1];
                case 6 : return [-2, -1];
                case 7 : return [-1, -2];
            }
        };
        let dir = testDir();
        while(!this.stepIsLegal(dir))
            dir = testDir();
        return dir;
    };

    getDirs = () => {
        return [
            [1,2],
            [2,1],
            [-1,2],
            [-2,1],
            [1,-2],
            [2,-1],
            [-2,-1],
            [-1,-2]
        ];
    }

    setSquare = (newSquare) => {
        this.square = newSquare;
    };

    stepIsLegal = (dir, square) => {
        if(!square && square !== 0)
            square = this.square
        return  !(square%8+dir[0] >=8 || square%8+dir[0] < 0 || square/8 + dir[1] < 0 || square/8 + dir[1] >=8);
    }
}

export const intToSquare = (square) => {
    return 'abcdefgh'.split('')[square%8]+`${7-Math.floor(square/8)+1}`;
}

export const squareToInt = (square) => {
    if(square == '-')
        return -1;
    return (8-parseInt(square[1]))*8 + (square.charCodeAt(0) - "a".charCodeAt(0));
}

export const fenToArray = (fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -") => {
    let position = Array(64).fill(0);
    let index = 0, i=0, j=0;
    let whiteToMove = null, enPassant = null;
    let castlingRights = {
        K : false,
        k: false,
        Q: false,
        q: false
    };
    while(index < fen.length) {
        let char = fen[index];
        if(i<8 || j<8) {
            if(j>=8)
                j = 0;
            if(char == ' ') {
                i=8;
                j=8;
            }
            else if(char == '/')
                ++i;
            else if(char >= '0' && char <= '8') {
                j += parseInt(char);
            }
            else {
                position[i*8+j] = char;
                ++j;
            }
        }
        else {
            if(char == 'w' || char == 'b')
                whiteToMove = char=='w' ? true : false;
            else if (char == 'K' || char == 'k' || char == 'Q' || char == 'q') {
                castlingRights[char] = true;
            }
            else if(char != ' ' && char != '-') {
                enPassant = fen.substr(index, index+2);
                enPassant = squareToInt(enPassant);
                break;
            }
        }
        ++index;
    }
    return {
        position: position,
        whiteToMove: whiteToMove,
        castlingRights: castlingRights,
        enPassant: enPassant
    }
}