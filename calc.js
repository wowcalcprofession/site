//alert(den[2]);

let ninputcountitem = 20;
s = 0;
function calculater(inputvalue1, s) {
    var multiple = 0;
    var inputvalue = 0;
    if (den[s] < 1) {
        multiple = inputvalue1 / den[s];
        document.getElementById('inputcountitem0').value = multiple;
        inputvalue = multiple;
    } else {
        var itemvalueden = document.getElementById('itemcount' + s).innerText;
        multiple = Math.floor(inputvalue1 / itemvalueden);
        document.getElementById('inputcountitem0').value = multiple * document.getElementById('itemcount0').innerText;
        inputvalue = multiple * document.getElementById('itemcount0').innerText;       
    }
    multiple = Math.ceil(inputvalue / document.getElementById('itemcount0').innerText);
    for (var i = 0; i < ninputcountitem; i++){
        if (('inputcountitem0') == 'inputcountitem' + i){i = i + 1;}
        if (('inputcountitem' + s) == 'inputcountitem' + i){i = i + 1;}             
        itemvalueden = document.getElementById('itemcount' + i).innerText;
        if(den[i] >= 1){
             document.getElementById('inputcountitem' + i).value = multiple * itemvalueden;
        } else {
             document.getElementById('inputcountitem' + i).value = Math.ceil(inputvalue * den[i]);
        }
    }
}

document.getElementById('inputcountitem0').addEventListener // добавляем событие
(
    'input', // на ввод
    function name0(e){
        var multiple = Math.ceil(this.value / document.getElementById('itemcount0').innerText);
        for (var i = 0; i < ninputcountitem; i++){
            if (('inputcountitem0') == 'inputcountitem' + i){i = i + 1;}
            //if (('inputcountitem' + s) == 'inputcountitem' + i){i = i + 1;}             
            var itemvalueden = document.getElementById('itemcount' + i).innerText;
            if(den[i] >= 1){
                 document.getElementById('inputcountitem' + i).value = multiple * itemvalueden;
            } else {
                 document.getElementById('inputcountitem' + i).value = Math.ceil(this.value * den[i]);
            }
        }
    }
)

document.getElementById('inputcountitem1').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 1;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem2').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 2;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem3').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 3;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem4').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 4;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem5').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 5;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem6').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 6;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem7').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 7;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem8').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 8;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem9').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 9;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem10').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 10;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem11').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 11;
        calculater(this.value, s);
    }
)

document.getElementById('inputcountitem12').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var s = 12;
        calculater(this.value, s);
    }
)

/*document.getElementById('inputcountitem12').addEventListener // добавляем событие
(
    'input', // на ввод
    function name(e){
        var multiple = Math.floor(this.value / document.getElementById('itemcount12').innerText);
        for (var i = 0; i < ninputcountitem; i++){
            if ('inputcountitem12' == 'inputcountitem' + i){
            i = i + 1;
            }             
            var itemvalueden = document.getElementById('itemcount' + i).innerText;
            document.getElementById('inputcountitem' + i).value = multiple * itemvalueden;
            
        }
    }
)*/
