'use strict';

const btn = document.getElementById('btn_id');

btn.addEventListener('click', function(){

  const hatching = document.getElementById('hatching').value;

  if(hatching === 0 || hatching === "") {
    
    //何も入力されない時表示
    alert('孵化した回数を入力してください');


  } else if(isNaN(hatching) === true) {
     //数値が入力されない時
    alert('孵化した回数は数値を入力してください'); 
  } else {
    //確率計算
    const probability = Math.round(((1-(511/512)**hatching)*100)*1000)/1000;
    //結果表示
    document.getElementById('result').value += '約'+probability+'%';
  }
})
