var block = document.getElementById('test');
var left = 0;
var t = 0;

document.onkeydown = function(event){
    console.log(event);

    if(event.key == 'ArrowRight'){
        block.style.left = left + 'px';
        left++;
        block.innerHTML = "→_" + left;
    }

    if(event.key == 'ArrowDown'){
        block.style.top = t + 'px';
        t++;
        block.innerHTML = "↓_" + t;
    }

    if(event.key == 'ArrowUp'){
        block.style.top = t + 'px';
        t--;
        block.innerHTML = "↑_" + t;
    }

    if(event.key == 'ArrowLeft'){
        block.style.left = left + 'px';
        left--;
        block.innerHTML = "←_" + left;
    }
}

document.onkeyup = function(event){
    console.log('key up');
}

$('#test2').effect('slide', {direction: 'up'}); 