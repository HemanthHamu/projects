let score = (JSON.parse((localStorage.getItem("haha"))));
if (score===null){
    score = {
        wins:0,
        ties:0,
        losses:0
    }
}
function mymove(usermove){
    let result = '';
    const computermove = getrandom();
    if (usermove==='rock'){
        if (computermove==='rock'){
            result = 'Tie'
        }
        else if (computermove=== 'paper'){
            result = 'Sorry you loss'
        }
        else if (computermove==='scissor'){
            result = 'Congratulations you won'
        }
    }
    else if (usermove==='paper'){
        if (computermove==='paper'){
            result = 'Tie'
        }
        else if (computermove==='scissor'){
            result = 'Sorry you loss'
        }
        else if (computermove==='rock'){
            result = 'Congratulations you won'
        }
    }
    else if (usermove==="scissor"){
        if (computermove==='scissor'){
            result = 'Tie'
        }
        else if (computermove==='rock'){
            result = 'Sorry you loss'
        }
        else if (computermove==='paper'){
            result = 'Congratulations you won'
        }
    }
if (result==="Tie"){
    score.ties += 1;
}
else if (result==="Congratulations you won"){
    score.wins +=1;
}
else if (result === "Sorry you loss"){
    score.losses += 1;
}
localStorage.setItem("haha",JSON.stringify(score))
document.getElementById("demo").innerHTML = (`You picked ${usermove} Computer picked ${computermove + "<br>" + "<br>"}  ${result + "<br>" + "<br>"}
    wins:${score.wins} 
    ties:${score.ties} 
    losses:${score.losses}`)
}
document.getElementById("demo2").style.color = 'yellow'

function getrandom(){
    random = Math.random()
    if (random>0 && random < 1/3){
        computermove = 'rock'
    }
    else if (random>1/3 && random < 2/3){
        computermove = 'paper'
    }
    else{
        computermove = 'scissor'
    }
    return computermove
}
function reset(){
    document.getElementById("demo").innerHTML = (`You picked ${usermove} Computer picked ${computermove} + "<br>" + "<br>"}
    wins:${score.wins} 
    ties:${score.ties} 
    losses:${score.losses}`);
}