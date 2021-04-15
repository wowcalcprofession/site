var strGET = window.location.search.replace( '?', '');
var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

let prof = params['prof'];
let id = params['id'];
let Item =[[]];

if (prof == undefined) { prof = 'engineering'; }
if (prof == 'engineering') {
    Item =  [["4357", "inv_misc_dust_01", "Грубое взрывчатое вещество", "1", "#ffffff"],
            ["4358", "inv_misc_bomb_06", "Грубый динамит", "2", "#ffffff"],
            ["8067", "inv_ammo_bullet_02", "Легкий искусно изготовленный патрон", "200", "#ffffff"],
            ["10579", "inv_ammo_arrow_02", "Взрывная стрела", "100", "#0070dd"],
            ["10585", "spell_holy_dizzy", "Гоблинское радио", "1", "#ffffff"],
            ["10561", "inv_gizmo_mithrilcasing_01", "Мифриловая обшивка", "1", "#ffffff"],
            ["4389", "inv_misc_pocketwatch_02", "Гирохронатом", "1", "#ffffff"],
            ["10558", "inv_battery_02", "Золотое силовое ядро", "3", "#ffffff"],
            ["10560", "inv_battery_01", "Нестабильное пусковое устройство", "1", "#ffffff"],
            ["10505", "inv_misc_powder_black", "Твердое взрывчатое вещество", "1", "#ffffff"]
            ];
}

if (prof == 'blacksmithing') {
    Item =  [["2853", "inv_bracer_03", "Медные наручи", "1", "#ffffff"]
            ];    
}

if (prof == 'alchemy') {
    Item =  [["118", "inv_potion_49", "Слабое лечебное зелье", "1", "#ffffff"],
            ["5997", "inv_potion_63", "Слабый эликсир защиты", "1", "#ffffff"],
            ["2454", "inv_potion_56", "Эликсир Львиной силы", "1", "#ffffff"],
            ["3382", "inv_potion_77", "Слабое зелье тролльей крови", "1", "#ffffff"],
            ["2455", "inv_potion_70", "Слабое зелье маны", "1", "#ffffff"],
            ["2456", "inv_potion_02", "Слабое зелье омоложения", "1", "#ffffff"],
            ["4596", "inv_potion_35", "Бесцветное лечебное зелье", "1", "#ffffff"],
            ["2458", "inv_potion_42", "Слабый эликсир стойкости", "1", "#ffffff"],
            ["2457", "inv_potion_91", "Эликсир ловкости II ступени", "1", "#ffffff"],
            ["858", "inv_potion_50", "Простое лечебное зелье", "1", "#ffffff"],
            ["2459", "inv_potion_95", "Зелье скорости", "1", "#ffffff"],
            ["5631", "inv_potion_24", "Зелье ярости", "1", "#ffffff"],
            ["6370", "inv_drink_12", "Масло черноротика", "1", "#ffffff"],
            ["5996", "inv_potion_17", "Эликсир водного дыхания", "1", "#ffffff"],
            ["3383", "inv_potion_06", "Эликсир Мудрости", "1", "#ffffff"],
            ["6662", "inv_potion_10", "Эликсир Увеличения", "1", "#ffffff"],
            ["6372", "inv_potion_13", "Зелье быстрого плавания", "1", "#ffffff"],
            ["6051", "inv_potion_09", "Зелье священной защиты", "1", "#ffffff"],
            ["929", "inv_potion_51", "Лечебное зелье", "1", "#ffffff"],
            ["3384", "inv_potion_08", "Слабое зелье защиты от магии", "1", "#ffffff"],
            ["3385", "inv_potion_71", "Простое зелье маны", "1", "#ffffff"],
            ["3386", "inv_potion_12", "Эликсир сопротивления яду", "1", "#ffffff"],
            ["3388", "inv_potion_78", "Крепкое зелье тролльей крови", "1", "#ffffff"],
            ["6371", "inv_potion_38", "Зажигательное масло", "1", "#ffffff"],
            ["3389", "inv_potion_64", "Эликсир защиты", "1", "#ffffff"],
            ["6048", "inv_potion_44", "Зелье защиты от темной магии", "1", "#ffffff"],
            ["3390", "inv_potion_92", "Эликсир ловкости I ступени", "1", "#ffffff"],
            ["6373", "inv_potion_33", "Эликсир огневой мощи", "1", "#ffffff"],
            ["5634", "inv_potion_04", "Зелье свободы действий", "1", "#ffffff"],
            ["3391", "inv_potion_57", "Эликсир Силы огра", "1", "#ffffff"],
            ["1710", "inv_potion_52", "Сильное лечебное зелье", "1", "#ffffff"],
            ["3827", "inv_potion_72", "Зелье маны", "1", "#ffffff"],
            ["3823", "inv_potion_18", "Зелье простой невидимости", "1", "#ffffff"],
            ["3824", "inv_potion_23", "Масло Тьмы", "1", "#ffffff"],
            ["6049", "inv_potion_16", "Зелье Огненной защиты", "1", "#ffffff"],
            ["5633", "inv_potion_21", "Сильнодействующее зелье ярости", "1", "#ffffff"],
            ["3825", "inv_potion_43", "Эликсир стойкости", "1", "#ffffff"],
            ["3826", "inv_potion_79", "Мощное зелье тролльей крови", "1", "#ffffff"],
            ["8949", "inv_potion_93", "Эликсир Ловкости", "1", "#ffffff"],
            ["6050", "inv_potion_13", "Зелье защиты от магии льда", "1", "#ffffff"],
            ["6052", "inv_potion_06", "Зелье Природной защиты", "1", "#ffffff"],
            ["17708", "inv_potion_03", "Эликсир Силы льда", "1", "#ffffff"],
            ["8951", "inv_potion_65", "Сильный эликсир защиты", "1", "#ffffff"],
            ["3828", "inv_potion_01", "Эликсир обнаружения простой невидимости", "1", "#ffffff"],
            ["3829", "inv_potion_20", "Масло льда", "1", "#ffffff"],
            ["10592", "inv_potion_36", 'Эликсир "Кошачий глаз"', "1", "#ffffff"],
            ["8956", "inv_potion_11", 'Воспламеняющая смесь', "1", "#ffffff"],
            ["6149", "inv_potion_73", 'Сильное зелье маны', "1", "#ffffff"],
            ["9061", "inv_cask_02", 'Гоблинское ракетное топливо', "1", "#ffffff"],
            ["9036", "inv_potion_16", 'Зелье защиты от магии', "1", "#ffffff"],
            ["9030", "inv_potion_01", 'Приводящее в сознание зелье', "1", "#ffffff"],
            ["3928", "inv_potion_53", 'Мощное лечебное зелье', "1", "#ffffff"],
            ["4623", "inv_potion_67", 'Простое зелье каменного щита', "1", "#ffffff"],
            ["18294", "inv_potion_05", 'Сильный эликсир водного дыхания', "1", "#ffffff"],
            ["9144", "inv_potion_34", 'Виноградное зелье', "1", "#ffffff"],
            ["9149", "inv_misc_orb_01", 'Философский камень', "1", "#ffffff"],
            ["12190", "inv_potion_83", 'Зелье спокойного сна', "1", "#ffffff"],
            ["9154", "inv_potion_53", 'Эликсир обнаружения Нежити', "1", "#ffffff"],
            ["9172", "inv_potion_25", 'Зелье невидимости', "1", "#ffffff"],
            ["9179", "inv_potion_10", 'Сильный эликсир интеллекта', "1", "#ffffff"],
            ["9155", "inv_potion_30", 'Сильный эликсир интеллекта', "1", "#ffffff"],
            ["9088", "inv_potion_28", 'Дар Артаса', "1", "#ffffff"],
            ["9187", "inv_potion_94", 'Сильный эликсир ловкости', "1", "#ffffff"],
            ["9197", "inv_potion_14", 'Эликсир Снозрения', "1", "#ffffff"],
            ["9210", "inv_poison_mindnumbing", 'Призрачная краска', "1", "#ffffff"],
            ["9206", "inv_potion_61", 'Эликсир Великанов', "1", "#ffffff"],
            ["13423", "inv_potion_68", 'Масло каменного угря', "1", "#ffffff"],
            ["21546", "inv_potion_60", 'Сильный эликсир огневой мощи', "1", "#ffffff"]
            ];    
}

// вставка меню выбора итема
var htmlChItem = '';
for (var i = 0; i < Item.length; i++){
var htmlChItem = htmlChItem +   '<div class="link-item">' +
                                    '<div class = "item">' +
                                        '<a title ="' + Item[i][2] + '" href="index.html?prof=' + prof + '&' + 'id=' + Item[i][0] + '">' +
                                            '<div style = "background-image: url(img/items/' + Item[i][1] + '.jpg);">' +
                                            '</div>' +
                                        '</a>' +
                                    '</div>' +
                                    '<a class = "item-text" title ="' + Item[i][2] + '" style = "color: ' + Item[i][4] + ';" href="index.html?prof=' + prof + '&' + 'id=' + Item[i][0] + '">' +        
                                        Item[i][2] +           
                                    '</a>' +        
                                '</div>';
};
document.getElementById("inserthtmlChItem").innerHTML = htmlChItem;

var htmlCalc ='';
var den = [];
// первый элемент в калькуляторе
if (id != undefined) {
    for (var i = 0; i < Item.length; i++){
        if (id == Item[i][0]){
            den[0] = Item[i][3];
            htmlCalc =  '<div style = "margin-bottom: 20px;">' +
                            '<table>' +
                                '<tr>' +
                                    '<td>' +
                                        '<a title ="' + Item[i][2] + '" href="index.html?prof=' + prof + '&' + 'id=' + Item[i][0] + '">' +
                                            '<div class = "item-calc">' +
                                                '<div style = "background-image: url(img/items/' + Item[i][1] + '.jpg);">' +
                                                    '<span id="itemcount0">' + Item[i][3] + '</span>' +
                                                '</div>' + 
                                            '</div>' +
                                        '</a>' +    
                                    '</td>' +
                                    '<td>' +
                                        '<p style = "color: ' + Item[i][4] + ';">' + Item[i][2] + '</p>' +
                                    '</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<td class = "tdinput">' +
                                        '<input id="inputcountitem0" type="text">' +
                                    '<td>' +
                                '</tr>' + 
                            '</table>' +                       
                        '</div>';
        }
    }
}

// остальные элементы в калькуляторе
htmlCalc = htmlCalc +   '<table style = "width: 1px;">' +
                            '<tr>';                            
var n = 0;
var n1 = 0;
var k = 1;
var k1 = 1;
let id1 = id;
creathtmlCalc(id, n, k, k1);
htmlCalc = htmlCalc +       '</tr>' +
                        '</table>';
document.getElementById("inserthtmlCalc").innerHTML = htmlCalc;

function creathtmlCalc(id, n1, k, k1) {
    n = n1;
    let calcItem = [[]];
    let calccountItem = 1;
    if (id == '118') { //Слабое лечебное зелье
        calccountItem = 1;
        calcItem =  [["2447", "inv_misc_flower_02", 1],
                    ["765", "inv_misc_herb_10", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '858') { //Простое лечебное зелье
        calccountItem = 1;
        calcItem =  [["118", "inv_potion_49", 1],
                    ["2450", "inv_misc_root_01", 1]];
    }
    if (id == '929') { //Лечебное зелье
        calccountItem = 1;
        calcItem =  [["2453", "inv_misc_herb_01", 1],
                    ["2450", "inv_misc_root_01", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '1710') { //Сильное лечебное зелье
        calccountItem = 1;
        calcItem =  [["3357", "inv_misc_root_02", 1],
                    ["3356", "inv_misc_herb_03", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '2454') { //Эликсир Львиной силы
        calccountItem = 1;
        calcItem =  [["2449", "inv_misc_herb_07", 1],
                    ["765", "inv_misc_herb_10", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '2455') { //Слабое зелье маны
        calccountItem = 1;
        calcItem =  [["785", "inv_jewelry_talisman_03", 1],
                    ["765", "inv_misc_herb_10", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '2456') { //Слабое зелье омоложения
        calccountItem = 1;
        calcItem =  [["785", "inv_jewelry_talisman_03", 2],
                    ["2447", "inv_misc_flower_02", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '2457') { //Эликсир ловкости II ступени
        calccountItem = 1;
        calcItem =  [["2452", "inv_misc_herb_04", 1],
                    ["765", "inv_misc_herb_10", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '2458') { //Слабый эликсир стойкости
        calccountItem = 1;
        calcItem =  [["2449", "inv_misc_herb_07", 2],
                    ["2447", "inv_misc_flower_02", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '2459') { //Зелье скорости
        calccountItem = 1;
        calcItem =  [["2452", "inv_misc_herb_04", 1],
                    ["2450", "inv_misc_root_01", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '2853') { //Медные наручи
        calccountItem = 1;
        calcItem = [["2840", "inv_ingot_02", 2]];
    }
    if (id == '3382') { //Слабое зелье трольей крови
        calccountItem = 1;
        calcItem =  [["2447", "inv_misc_flower_02", 1],
                    ["2449", "inv_misc_herb_07", 2],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3383') { //Эликсир Мудрости
        calccountItem = 1;
        calcItem =  [["785", "inv_jewelry_talisman_03", 1],
                    ["2450", "inv_misc_root_01", 2],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3384') { //Слабое зелье защиты от магии
        calccountItem = 1;
        calcItem =  [["785", "inv_jewelry_talisman_03", 3],
                    ["3355", "inv_misc_flower_01", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3385') { //Простое зелье маны
        calccountItem = 1;
        calcItem =  [["785", "inv_jewelry_talisman_03", 3],
                    ["3820", "inv_misc_herb_11", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3386') { //Эликсир сопротивления яду
        calccountItem = 1;
        calcItem =  [["1288", "inv_misc_organ_01", 1],
                    ["2453", "inv_misc_herb_01", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3388') { //Крепкое зелье тролльей крови
        calccountItem = 1;
        calcItem =  [["2453", "inv_misc_herb_01", 2],
                    ["2450", "inv_misc_root_01", 2],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3389') { //Эликсир защиты
        calccountItem = 1;
        calcItem =  [["3355", "inv_misc_flower_01", 1],
                    ["3820", "inv_misc_herb_11", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3390') { //Эликсир ловкости I ступени
        calccountItem = 1;
        calcItem =  [["3355", "inv_misc_flower_01", 1],
                    ["2452", "inv_misc_herb_04", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3391') { //Эликсир Силы огра
        calccountItem = 1;
        calcItem =  [["2449", "inv_misc_herb_07", 1],
                    ["3356", "inv_misc_herb_03", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3823') { //Зелье простой невидимости
        calccountItem = 1;
        calcItem =  [["3818", "inv_misc_herb_12", 1],
                    ["3355", "inv_misc_flower_01", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3824') { //Масло Тьмы
        calccountItem = 1;
        calcItem =  [["3818", "inv_misc_herb_12", 4],
                    ["3369", "inv_misc_dust_02", 4],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3825') { //Эликсир стойкости
        calccountItem = 1;
        calcItem =  [["3355", "inv_misc_flower_01", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3826') { //Мощное зелье тролльей крови
        calccountItem = 1;
        calcItem =  [["3357", "inv_misc_root_02", 1],
                    ["2453", "inv_misc_herb_01", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3827') { //Зелье маны
        calccountItem = 1;
        calcItem =  [["3820", "inv_misc_herb_11", 1],
                    ["3356", "inv_misc_herb_03", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '3828') { //Эликсир обнаружения простой невидимости
        calccountItem = 1;
        calcItem =  [["3358", "inv_misc_herb_08", 1],
                    ["3818", "inv_misc_herb_12", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '3829') { //Масло льда
        calccountItem = 1;
        calcItem =  [["3358", "inv_misc_herb_08", 4],
                    ["3819", "inv_misc_flower_03", 2],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '3928') { //Мощное лечебное зелье
        calccountItem = 1;
        calcItem =  [["8838", "inv_misc_herb_18", 1],
                    ["3358", "inv_misc_herb_08", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '4357') { //Грубое взрывчатое вещество
        calccountItem = 1;
        calcItem = [["2835", "inv_stone_06", 1]];
    }
    if (id == '4358') { //Грубый динамит
        calccountItem = 2;
        calcItem =  [["4357", "inv_misc_dust_01", 2],
                    ["2589", "inv_fabric_linen_01", 1]];
    }
    if (id == '4389') { //Гирохронатом
        calccountItem = 1;
        calcItem =  [["3575", "inv_ingot_iron", 1],
                    ["10558", "inv_battery_02", 1]];
    }
    if (id == '4596') { //Бесцветное лечебное зелье
        calccountItem = 1;
        calcItem =  [["3164", "inv_misc_organ_02", 1],
                    ["2447", "inv_misc_flower_02", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '4623') { //Простое зелье каменного щита
        calccountItem = 1;
        calcItem =  [["3858", "inv_ore_mithril_02", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '5631') { //Зелье ярости
        calccountItem = 1;
        calcItem =  [["5635", "inv_misc_monsterclaw_03", 1],
                    ["2450", "inv_misc_root_01", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '5633') { //Сильнодействующее зелье ярости
        calccountItem = 1;
        calcItem =  [["5637", "inv_misc_bone_08", 1],
                    ["3356", "inv_misc_herb_03", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '5634') { //Зелье свободы действий
        calccountItem = 1;
        calcItem =  [["6370", "inv_drink_12", 2],
                    ["3820", "inv_misc_herb_11", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '5996') { //Эликсир водного дыхания
        calccountItem = 1;
        calcItem =  [["3820", "inv_misc_herb_11", 1],
                    ["6370", "inv_drink_12", 2],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '5997') { //Слабый эликсир защиты
        calccountItem = 1;
        calcItem =  [["765", "inv_misc_herb_10", 2],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6048') { //Зелье защиты от темной магии
        calccountItem = 1;
        calcItem =  [["3369", "inv_misc_dust_02", 1],
                    ["3356", "inv_misc_herb_03", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6049') { //Зелье Огненной защиты
        calccountItem = 1;
        calcItem =  [["4402", "inv_misc_organ_06", 1],
                    ["6371", "inv_potion_38", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6050') { //Зелье защиты от магии льда
        calccountItem = 1;
        calcItem =  [["3819", "inv_misc_flower_03", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '6051') { //Зелье священной защиты
        calccountItem = 1;
        calcItem =  [["2453", "inv_misc_herb_01", 1],
                    ["2452", "inv_misc_herb_04", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6052') { //Зелье Природной защиты
        calccountItem = 1;
        calcItem =  [["3357", "inv_misc_root_02", 1],
                    ["3820", "inv_misc_herb_11", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '6149') { //Сильное зелье маны
        calccountItem = 1;
        calcItem =  [["3358", "inv_misc_herb_08", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '6662') { //Эликсир Увеличения
        calccountItem = 1;
        calcItem =  [["6522", "inv_misc_monsterhead_01", 1],
                    ["2449", "inv_misc_herb_07", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6370') { //Масло черноротика
        calccountItem = 1;
        calcItem =  [["6358", "inv_misc_monsterhead_04", 2],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6371') { //Зажигательное масло
        calccountItem = 1;
        calcItem =  [["6359", "inv_misc_monsterhead_01", 2],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6372') { //Зелье быстрого плавания
        calccountItem = 1;
        calcItem =  [["2452", "inv_misc_herb_04", 1],
                    ["6370", "inv_drink_12", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '6373') { //Эликсир огневой мощи
        calccountItem = 1;
        calcItem =  [["6371", "inv_potion_38", 2],
                    ["3356", "inv_misc_herb_03", 1],
                    ["3371", "inv_drink_06", 1]];
    }
    if (id == '8067') { //Легкий искусно изготовленный патрон
        calccountItem = 200;
        calcItem =  [["4357", "inv_misc_dust_01", 1],
                    ["2840", "inv_ingot_02", 1]];
    }
    if (id == '8949') { //Эликсир Ловкости
        calccountItem = 1;
        calcItem =  [["3820", "inv_misc_herb_11", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '8951') { //Сильный эликсир защиты
        calccountItem = 1;
        calcItem =  [["3355", "inv_misc_flower_01", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '8956') { //Воспламеняющая смесь
        calccountItem = 1;
        calcItem =  [["4625", "inv_misc_herb_19", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '9030') { //Приводящее в сознание зелье
        calccountItem = 1;
        calcItem =  [["7067", "inv_misc_herb_08", 1],
                    ["8831", "inv_misc_herb_17", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9036') { //Зелье защиты от магии
        calccountItem = 1;
        calcItem =  [["3358", "inv_ore_iron_01", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9061') { //Гоблинское ракетное топливо
        calccountItem = 1;
        calcItem =  [["4625", "inv_misc_herb_19", 1],
                    ["9260", "inv_drink_01", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '9088') { //Дар Артаса
        calccountItem = 1;
        calcItem =  [["8836", "inv_misc_herb_13", 1],
                    ["8839", "inv_misc_herb_14", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9144') { //Виноградное зелье
        calccountItem = 1;
        calcItem =  [["8153", "inv_misc_herb_03", 1],
                    ["8831", "inv_misc_herb_17", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9149') { //Философский камень
        calccountItem = 1;
        calcItem =  [["3575", "inv_ingot_iron", 4],
                    ["9262", "inv_misc_gem_sapphire_03", 1],
                    ["8831", "inv_misc_herb_17", 4],
                    ["4625", "inv_misc_herb_19", 4]];
    }
    if (id == '9154') { //Эликсир обнаружения Нежити
        calccountItem = 1;
        calcItem =  [["8836", "inv_misc_herb_13", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9155') { //Чародейский эликсир
        calccountItem = 1;
        calcItem =  [["8839", "inv_misc_herb_14", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9172') { //Зелье невидимости
        calccountItem = 1;
        calcItem =  [["8845", "inv_mushroom_08", 1],
                    ["8838", "inv_misc_herb_18", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9179') { //Сильный эликсир интеллекта
        calccountItem = 1;
        calcItem =  [["8839", "inv_misc_herb_14", 1],
                    ["3358", "inv_misc_herb_08", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9187') { //Сильный эликсир ловкости
        calccountItem = 1;
        calcItem =  [["8838", "inv_misc_herb_18", 1],
                    ["3821", "inv_misc_herb_15", 1],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9197') { //Эликсир Снозрения
        calccountItem = 1;
        calcItem =  [["8831", "inv_misc_herb_17", 3],                    
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9206') { //Эликсир Великанов
        calccountItem = 1;
        calcItem =  [["8838", "inv_misc_herb_18", 1],
                    ["8846", "inv_misc_herb_16", 1],                    
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '9210') { //Призрачная краска
        calccountItem = 1;
        calcItem =  [["8845", "inv_mushroom_08", 2],
                    ["4342", "inv_potion_02", 1],                    
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '10505') { //Твердое взрывчатое вещество
        calccountItem = 1;
        calcItem = [["7912", "inv_stone_10", 2]];
    }
    if (id == '10558') { //Золотое силовое ядро
        calccountItem = 3;
        calcItem = [["3577", "inv_ingot_03", 1]];
    }
    if (id == '10560') { //Нестабильное пусковое устройство
        calccountItem = 1;
        calcItem =  [["3860", "inv_ingot_06", 1],
                    ["4338", "inv_fabric_mageweave_01", 1],
                    ["10505", "inv_misc_powder_black", 1]];
    }
    if (id == '10561') { //Мифриловая обшивка
        calccountItem = 1;
        calcItem = [["3860", "inv_ingot_06", 3]];
    }
    if (id == '10579') { //Взрывная стрела
        calccountItem = 100;
        calcItem =  [["3030", "inv_ammo_arrow_02", 100],
                    ["10505", "inv_misc_powder_black", 2],
                    ["3860", "inv_ingot_06", 2]];
    }
    if (id == '10585') { //Гоблинское радио
        calccountItem = 1;
        calcItem =  [["10561", "inv_gizmo_mithrilcasing_01", 1],
                    ["3860", "inv_ingot_06", 2],
                    ["4389", "inv_misc_pocketwatch_02", 1],
                    ["10560", "inv_battery_01", 1]];
    }
    if (id == '10592') { //Эликсир "Кошачий глаз"
        calccountItem = 1;
        calcItem =  [["3821", "inv_misc_herb_15", 1],
                    ["3818", "inv_misc_herb_12", 1],                    
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '12190') { //Зелье спокойного сна
        calccountItem = 1;
        calcItem =  [["8831", "inv_misc_herb_17", 3],                                        
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '13423') { //Масло каменного угря
        calccountItem = 1;
        calcItem =  [["13422", "inv_misc_fish_11", 1],                                        
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '17708') { //Эликсир Силы льда
        calccountItem = 1;
        calcItem =  [["3819", "inv_misc_flower_03", 2],
                    ["3358", "inv_misc_herb_08", 1],
                    ["3372", "inv_drink_06", 1]];
    }
    if (id == '18294') { //Сильный эликсир водного дыхания
        calccountItem = 1;
        calcItem =  [["7972", "inv_misc_slime_01", 1],
                    ["8831", "inv_misc_herb_17", 2],
                    ["8925", "inv_drink_06", 1]];
    }
    if (id == '21546') { //Сильный эликсир огневой мощи
        calccountItem = 1;
        calcItem =  [["6371", "inv_potion_38", 3],
                    ["4625", "inv_misc_herb_19", 3],
                    ["8925", "inv_drink_06", 1]];
    }
    
    if (calcItem != false) {
        if (id1 != id) {
            htmlCalc = htmlCalc +   '</tr>' +
                                    '<tr>' +
                                        '<td>' +
                                            '<div class = "yellow-arrow-down">' +
                                            '</div>' +
                                        '</td>' +
                                    '</tr>' + 
                                    '<tr>';
        }
        for (var i = 0; i < calcItem.length; i++){    
            n = n + 1;
            den[n] = calcItem[i][2] / calccountItem * k1;
            //calcn[i] = den[n];           
            calcItem[i][2] = calcItem[i][2] * k;
            htmlCalc = htmlCalc +   '<td>' + 
                                        '<table>' +
                                            '<tr>' +
                                                '<td>' +                                            
                                                    '<div class = "item-calc1">' +
                                                        '<div style = "background-image: url(img/items/' + calcItem[i][1] + '.jpg);">' +
                                                            '<span id="itemcount' + n + '">' + calcItem[i][2] + '</span>' +
                                                        '</div>' +
                                                    '</div>' +
                                                    '<div class = "tdinput">' +
                                                        '<input id="inputcountitem' + n + '" type="text">' +
                                                    '</div>' +                                            
                                                '</td>';
            creathtmlCalc(calcItem[i][0], n, calcItem[i][2], den[n]);
            htmlCalc = htmlCalc +           '</tr>' +
                                        '</table>' +
                                    '</td>';   
        }  
    }
}

