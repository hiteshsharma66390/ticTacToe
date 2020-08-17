var ticTacToe = [
    ['','',''],
    ['','',''],
    ['','','']
];
var players={
    player1:'X',
    player2:'0'
};
var currentPlayer=players.player1;

function mark(element,row,column){
    if(ticTacToe[row][column]=='')
    {   
        ticTacToe[row][column]=currentPlayer;
        element.innerHTML=currentPlayer;
        if(currentPlayerWins())
        {
            document.getElementById('winner-text').innerHTML=currentPlayer+" Wins!";
        }
        if(!currentPlayerWins()) currentPlayer=(currentPlayer==players.player1) ? players.player2 : players.player1;
        
    }
    
}

function currentPlayerWins(){
    return ((ticTacToe[0][0]==currentPlayer && ticTacToe[0][1]==currentPlayer && ticTacToe[0][2]==currentPlayer) ||
    (ticTacToe[1][0]==currentPlayer && ticTacToe[1][1]==currentPlayer && ticTacToe[1][2]==currentPlayer) ||
    (ticTacToe[2][0]==currentPlayer && ticTacToe[2][1]==currentPlayer && ticTacToe[2][2]==currentPlayer) ||
    (ticTacToe[0][0]==currentPlayer && ticTacToe[1][0]==currentPlayer && ticTacToe[2][0]==currentPlayer) ||
    (ticTacToe[0][1]==currentPlayer && ticTacToe[1][1]==currentPlayer && ticTacToe[2][1]==currentPlayer) ||
    (ticTacToe[0][2]==currentPlayer && ticTacToe[1][2]==currentPlayer && ticTacToe[2][2]==currentPlayer) ||
    (ticTacToe[0][0]==currentPlayer && ticTacToe[1][1]==currentPlayer && ticTacToe[2][2]==currentPlayer) ||
    (ticTacToe[0][2]==currentPlayer && ticTacToe[1][1]==currentPlayer && ticTacToe[2][0]==currentPlayer))
}
function reset(){
    document.getElementById('winner-text').innerHTML="";
    ticTacToe = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    currentPlayer=players.player1;
    var arrayOfTd=document.querySelectorAll('td');
    arrayOfTd.forEach(element => {element.innerHTML="";
        
    });   
}