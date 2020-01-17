
//WOW initialization
new WOW().init();




// 開始對戰按鈕變色
// $(document).ready(function() {

//     $('.fightbtn').hover(function() {
//         $('.fightbtn span').css('color', 'red');
//         $('.fightbtn').css('border', 'yellow solid 2px');
//     }, function() {
//         $('.fightbtn span').css('color', 'black');
//         $('.fightbtn').css('border', 'brown solid 2px');
//     });


// });

//對戰程式




var x = document.getElementById("start-btnA");
var y = document.getElementById("start-btnB");
var z= document.getElementById("start-btnC");
x.addEventListener("click", fight_A);
y.addEventListener("click", fight_B);
z.addEventListener("click", fight_C);
var i=0;//勝場數
var j=0;//負場數

console.log(x);


function welcome(){
    alert('請選擇您的寶可夢!');
}


function fight_A() {
    // var choice = parseInt(prompt('請問您要選擇哪隻神奇寶貝?0.妙蛙種子 1.小火龍 2.傑尼龜', 0));

    var comchoice = Math.floor(Math.random() * 3);

   
        alert("你派出了妙蛙種子!");

        if (comchoice === 0) {
            alert("對手也派出妙蛙種子! 平分秋色!");
        } else if (comchoice === 1) {
            alert("對手派出小火龍! 你輸了!");
            scorecount_lose();
        } else if (comchoice === 2) {
            alert("對手派出傑尼龜! 你贏了!");
            scorecount_win();

        }
}

function fight_B(){
    var comchoice = Math.floor(Math.random() * 3);
   
                alert("你派出了小火龍!");
                if (comchoice === 0) {
                    alert("對手也派出妙蛙種子! 你贏了!");
                    scorecount_win();
                } else if (comchoice === 1) {
                    alert("對手派出小火龍! 不分上下!");
                } else if (comchoice === 2) {
                    alert("對手派出傑尼龜! 你輸了~");
                    scorecount_lose();
                }
}

function fight_C(){
    var comchoice = Math.floor(Math.random() * 3);
    alert("你派出了傑尼龜!");
        if (comchoice === 0) {
            alert("對手也派出妙蛙種子! 你輸了!");
            scorecount_lose();
        } else if (comchoice === 1) {
            alert("對手派出小火龍! 你贏了!");
            scorecount_win();
        } else if (comchoice === 2) {
            alert("對手派出傑尼龜! 無勝無負");
        }
}


function scorecount_win(){
    i++;
   document.getElementById("win_show").innerHTML= ("勝:"+ i);
   

}

function scorecount_lose(){
    j++;
   document.getElementById("lose_show").innerHTML= ("負:"+ j);
   
}
