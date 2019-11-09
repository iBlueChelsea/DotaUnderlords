var output = document.getElementById('content');

function setAlliances() {
    var alliances = [
        {id: 0, name: 'assassin', max: 6, heroes: 9, icon: '"alliances/icon_assassin.png"'},
        {id: 1, name: 'bloodbound', max: 2, heroes: 3, icon: '"alliances/icon_bloodbound.png"'},
        {id: 2, name: 'brawny', max: 4, heroes: 5, icon: '"alliances/icon_brawny.png"'},
        {id: 3, name: 'brute', max: 4, heroes: 5, icon: '"alliances/icon_brute.png"'},
        {id: 4, name: 'champion', max: 0, heroes: 1, icon: '"alliances/icon_champion.png"'},
        {id: 5, name: 'deadeye', max: 2, heroes: 3, icon: '"alliances/icon_deadeye.png"'},
        {id: 6, name: 'demon', max: 1, heroes: 6, icon: '"alliances/icon_demon.png"'},
        {id: 7, name: 'dragon', max: 2, heroes: 3, icon: '"alliances/icon_dragon.png"'},
        {id: 8, name: 'druid', max: 4, heroes: 5, icon: '"alliances/icon_druid.png"'},
        {id: 9, name: 'elusive', max: 6, heroes: 7, icon: '"alliances/icon_elusive.png"'},
        {id: 10, name: 'healer', max: 3, heroes: 5, icon: '"alliances/icon_healer.png"'},
        {id: 11, name: 'heartless', max: 6, heroes: 7, icon: '"alliances/icon_heartless.png"'},
        {id: 12, name: 'human', max: 6, heroes: 9, icon: '"alliances/icon_human.png"'},
        {id: 13, name: 'hunter', max: 6, heroes: 9, icon: '"alliances/icon_hunter.png"'},
        {id: 14, name: 'insect', max: 3, heroes: 4, icon: '"alliances/icon_insect.png"'},
        {id: 15, name: 'inventor', max: 4, heroes: 5, icon: '"alliances/icon_inventor.png"'},
        {id: 16, name: 'knight', max: 6, heroes: 7, icon: '"alliances/icon_knight.png"'},
        {id: 17, name: 'mage', max: 6, heroes: 7, icon: '"alliances/icon_mage.png"'},
        {id: 18, name: 'primordial', max: 6, heroes: 7, icon: '"alliances/icon_primordial.png"'},
        {id: 19, name: 'savage', max: 6, heroes: 7, icon: '"alliances/icon_savage.png"'},
        {id: 20, name: 'scaled', max: 4, heroes: 6, icon: '"alliances/icon_scaled.png"'},
        {id: 21, name: 'scrappy', max: 6, heroes: 7, icon: '"alliances/icon_scrappy.png"'},
        {id: 22, name: 'shaman', max: 4, heroes: 5, icon: '"alliances/icon_shaman.png"'},
        {id: 23, name: 'troll', max: 4, heroes: 5, icon: '"alliances/icon_troll.png"'},
        {id: 24, name: 'warlock', max: 6, heroes: 7, icon: '"alliances/icon_warlock.png"'},
        {id: 25, name: 'warrior', max: 6, heroes: 8, icon: '"alliances/icon_warrior.png"'}
    ];
    return alliances;
}

alliances = setAlliances();

var heroes = [
    {id: 0, name: 'Abaddon', alliances: [11,16], occurances: 0, icon: '"heroes/icon_abaddon.png"'},
    {id: 1, name: 'Alchemist', alliances: [21,24], occurances: 0, icon: '"heroes/icon_alchemist.png"'},
    {id: 2, name: 'Anti-Mage', alliances: [0,9], occurances: 0, icon: '"heroes/icon_antimage.png"'},
    {id: 3, name: 'Arc Warden', alliances: [18,22], occurances: 0, icon: '"heroes/icon_arcwarden.png"'},
    {id: 4, name: 'Axe', alliances: [2,3], occurances: 0, icon: '"heroes/icon_axe.png"'},
    {id: 5, name: 'Batrider', alliances: [16,23], occurances: 0, icon: '"heroes/icon_batrider.png"'},
    {id: 6, name: 'Beastmaster', alliances: [2,13], occurances: 0, icon: '"heroes/icon_beastmaster.png"'},
    {id: 7, name: 'Bloodseeker', alliances: [1,5], occurances: 0, icon: '"heroes/icon_bloodseeker.png"'},
    {id: 8, name: 'Bounty Hunter', alliances: [0,21], occurances: 0, icon: '"heroes/icon_bountyhunter.png"'},
    {id: 9, name: 'Bristleback', alliances: [2,19], occurances: 0, icon: '"heroes/icon_bristleback.png"'},
    {id: 10, name: 'Broodmother', alliances: [14,24], occurances: 0, icon: '"heroes/icon_broodmother.png"'},
    {id: 11, name: 'Chaos Knight', alliances: [6,16], occurances: 0, icon: '"heroes/icon_chaosknight.png"'},
    {id: 12, name: 'Clockwerk', alliances: [15,21], occurances: 0, icon: '"heroes/icon_clockwerk.png"'},
    {id: 13, name: 'Crystal Maiden', alliances: [12,17], occurances: 0, icon: '"heroes/icon_crystalmaiden.png"'},
    {id: 14, name: 'Dazzle', alliances: [10,23], occurances: 0, icon: '"heroes/icon_dazzle.png"'},
    {id: 15, name: 'Disruptor', alliances: [2,24], occurances: 0, icon: '"heroes/icon_disruptor.png"'},
    {id: 16, name: 'Doom', alliances: [3,6], occurances: 0, icon: '"heroes/icon_doom.png"'},
    {id: 17, name: 'Dragon Knight', alliances: [7,12,16], occurances: 0, icon: '"heroes/icon_dragonknight.png"'},
    {id: 18, name: 'Drow Ranger', alliances: [11,13], occurances: 0, icon: '"heroes/icon_drowranger.png"'},
    {id: 19, name: 'Enchantress', alliances: [8,10,19], occurances: 0, icon: '"heroes/icon_enchantress.png"'},
    {id: 20, name: 'Enigma', alliances: [18,22], occurances: 0, icon: '"heroes/icon_enigma.png"'},
    {id: 21, name: 'Faceless Void', alliances: [0,18], occurances: 0, icon: '"heroes/icon_facelessvoid.png"'},
    {id: 22, name: 'Gyrocopter', alliances: [5,15], occurances: 0, icon: '"heroes/icon_gyrocopter.png"'},
    {id: 23, name: 'Io', alliances: [8,18], occurances: 0, icon: '"heroes/icon_io.png"'},
    {id: 24, name: 'Juggernaut', alliances: [2,25], occurances: 0, icon: '"heroes/icon_juggernaut.png"'},
    {id: 25, name: 'Keeper of the Light', alliances: [12,17], occurances: 0, icon: '"heroes/icon_keeperofthelight.png"'},
    {id: 26, name: 'Kunkka', alliances: [12,25], occurances: 0, icon: '"heroes/icon_kunkka.png"'},
    {id: 27, name: 'Legion Commander', alliances: [4,12], occurances: 0, icon: '"heroes/icon_legioncommander.png"'},
    {id: 28, name: 'Lich', alliances: [11,17], occurances: 0, icon: '"heroes/icon_lich.png"'},
    {id: 29, name: 'Lifestealer', alliances: [3,11], occurances: 0, icon: '"heroes/icon_lifestealer.png"'},
    {id: 30, name: 'Lina', alliances: [12,17], occurances: 0, icon: '"heroes/icon_lina.png"'},
    {id: 31, name: 'Lone Druid', alliances: [8,19], occurances: 0, icon: '"heroes/icon_lonedruid.png"'},
    {id: 32, name: 'Luna', alliances: [9,16], occurances: 0, icon: '"heroes/icon_luna.png"'},
    {id: 33, name: 'Lycan', alliances: [12,13,19], occurances: 0, icon: '"heroes/icon_lycan.png"'},
    {id: 34, name: 'Magnus', alliances: [3,22], occurances: 0, icon: '"heroes/icon_magnus.png"'},
    {id: 35, name: 'Medusa', alliances: [13,20], occurances: 0, icon: '"heroes/icon_medusa.png"'},
    {id: 36, name: 'Mirana', alliances: [9,13], occurances: 0, icon: '"heroes/icon_mirana.png"'},
    {id: 37, name: 'Morphling', alliances: [0,18], occurances: 0, icon: '"heroes/icon_morphling.png"'},
    {id: 38, name: "Nature's Prophet", alliances: [8,22], occurances: 0, icon: '"heroes/icon_naturesprophet.png"'},
    {id: 39, name: 'Necrophos', alliances: [10,11], occurances: 0, icon: '"heroes/icon_necrophos.png"'},
    {id: 40, name: 'Nyx Assassin', alliances: [0,14], occurances: 0, icon: '"heroes/icon_nyxassassin.png"'},
    {id: 41, name: 'Ogre Magi', alliances: [1,17], occurances: 0, icon: '"heroes/icon_ogremagi.png"'},
    {id: 42, name: 'Omniknight', alliances: [10,12,16], occurances: 0, icon: '"heroes/icon_omniknight.png"'},
    {id: 43, name: 'Phantom Assassin', alliances: [0,9], occurances: 0, icon: '"heroes/icon_phantomassassin.png"'},
    {id: 44, name: 'Puck', alliances: [7,9,17], occurances: 0, icon: '"heroes/icon_puck.png"'},
    {id: 45, name: 'Pudge', alliances: [11,25], occurances: 0, icon: '"heroes/icon_pudge.png"'},
    {id: 46, name: 'Queen of Pain', alliances: [0,6], occurances: 0, icon: '"heroes/icon_queenofpain.png"'},
    {id: 47, name: 'Razor', alliances: [17,18], occurances: 0, icon: '"heroes/icon_razor.png"'},
    {id: 48, name: 'Sand King', alliances: [14,19], occurances: 0, icon: '"heroes/icon_sandking.png"'},
    {id: 49, name: 'Shadow Demon', alliances: [6,11], occurances: 0, icon: '"heroes/icon_shadowdemon.png"'},
    {id: 50, name: 'Shadow Fiend', alliances: [6,24], occurances: 0, icon: '"heroes/icon_shadowfiend.png"'},
    {id: 51, name: 'Shadow Shaman', alliances: [22,23], occurances: 0, icon: '"heroes/icon_shadowshaman.png"'},
    {id: 52, name: 'Slardar', alliances: [20,25], occurances: 0, icon: '"heroes/icon_slardar.png"'},
    {id: 53, name: 'Slark', alliances: [0,20], occurances: 0, icon: '"heroes/icon_slark.png"'},
    {id: 54, name: 'Sniper', alliances: [5,13,21], occurances: 0, icon: '"heroes/icon_sniper.png"'},
    {id: 55, name: 'Sven', alliances: [12,16,20], occurances: 0, icon: '"heroes/icon_sven.png"'},
    {id: 56, name: 'Techies', alliances: [15,21], occurances: 0, icon: '"heroes/icon_techies.png"'},
    {id: 57, name: 'Templar Assassin', alliances: [0,9], occurances: 0, icon: '"heroes/icon_templarassassin.png"'},
    {id: 58, name: 'Terrorblade', alliances: [6,13], occurances: 0, icon: '"heroes/icon_terrorblade.png"'},
    {id: 59, name: 'Tidehunter', alliances: [20,25], occurances: 0, icon: '"heroes/icon_tidehunter.png"'},
    {id: 60, name: 'Timbersaw', alliances: [15,21], occurances: 0, icon: '"heroes/icon_timbersaw.png"'},
    {id: 61, name: 'Tinker', alliances: [15,21], occurances: 0, icon: '"heroes/icon_tinker.png"'},
    {id: 62, name: 'Tiny', alliances: [18,25], occurances: 0, icon: '"heroes/icon_tiny.png"'},
    {id: 63, name: 'Treant Protector', alliances: [3,8], occurances: 0, icon: '"heroes/icon_treantprotector.png"'},
    {id: 64, name: 'Troll Warlord', alliances: [23,25], occurances: 0, icon: '"heroes/icon_trollwarlord.png"'},
    {id: 65, name: 'Tusk', alliances: [19,25], occurances: 0, icon: '"heroes/icon_tusk.png"'},
    {id: 66, name: 'Venomancer', alliances: [19,24], occurances: 0, icon: '"heroes/icon_venomancer.png"'},
    {id: 67, name: 'Viper', alliances: [7,20], occurances: 0, icon: '"heroes/icon_viper.png"'},
    {id: 68, name: 'Warlock', alliances: [1,10,24], occurances: 0, icon: '"heroes/icon_warlock.png"'},
    {id: 69, name: 'Weaver', alliances: [13,14], occurances: 0, icon: '"heroes/icon_weaver.png"'},
    {id: 70, name: 'Windranger', alliances: [9,13], occurances: 0, icon: '"heroes/icon_windranger.png"'},
    {id: 71, name: 'Witch Doctor', alliances: [23,24], occurances: 0, icon: '"heroes/icon_witchdoctor.png"'}
];

output.innerHTML = drawJail(heroes,alliances);
console.log (output.innerHTML);
//output.innerHTML = display(1);
/* output.innerHTML = drawJail(heroes,alliances);
output.innerHTML = 'hello'; */

function redrawJail() {
    output.innerHTML = drawJail(heroes,alliances);
}

function drawJail(heroes,alliances){
    alliances = setAlliances();
    result = getJail(heroes,alliances,8);
    console.log(result);
    display = '<table class="table table-borderless">';
    display += '<tr align = "center">';
    display += '<td>';
    display += heroes[result[0]].name;
    display += '</td>';
    display += '<td>';
    display += heroes[result[1]].name;
    display += '</td>';
    display += '<td>';
    display += heroes[result[2]].name;
    display += '</td>';
    display += '<td>';
    display += heroes[result[3]].name;
    display += '</td>';
    display += '</tr>';
    display += '<tr align = "center">';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[0]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[1]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[2]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[3]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '</tr>';
    display += '<tr align = "center">';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[0]].id);
    display += '</td>';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[1]].id);
    display += '</td>';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[2]].id);
    display += '</td>';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[3]].id);
    display += '</td>';
    display += '</tr>';
    display += '<tr align = "center">';
    display += '<td>';
    display += heroes[result[4]].name;
    display += '</td>';
    display += '<td>';
    display += heroes[result[5]].name;
    display += '</td>';
    display += '<td>';
    display += heroes[result[6]].name;
    display += '</td>';
    display += '<td>';
    display += heroes[result[7]].name;
    display += '</td>';
    display += '</tr>';
    display += '<tr align = "center">';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[4]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[5]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[6]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '<td>';
    display += '<img src=';
    display += heroes[result[7]].icon;
    display += ' style="width:200px;height:200px;">';
    display += '</td>';
    display += '</tr>';
    display += '<tr align = "center">';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[4]].id);
    display += '</td>';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[5]].id);
    display += '</td>';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[6]].id);
    display += '</td>';
    display += '<td>';
    display += drawAlliances(heroes,alliances,heroes[result[7]].id);
    display += '</td>';
    display += '</tr>';
    display += '</table>';
    console.log(display);
    return display;
}

function drawAlliances(heroes,alliances,hero) {
    var text = '';
    for (hA = 0; hA < heroes[hero].alliances.length; hA++) {
        text += '<img src=';
        text += alliances[heroes[hero].alliances[hA]].icon;
        text += '>'
    }
    return text;
}

function display(times) {
    var jailContent = '';
    for (t = 0; t < times; t++) {
        jailContent += displayJail(heroes,alliances,8);
        jailContent += '<br/><br/>';
        alliances = setAlliances();
    }
    //output.innerHTML = getOccurances(heroes,times);
    output.innerHTML = jailContent;
    return output.innerHTML;
}

function getOccurances(heroes,times) {
    var totalOccurances = times;
    var heroOccurances = '';
    heroOccurances += 'Amount of Jail Tests: ' + totalOccurances + '<br/><br/>';
    for (h = 0; h < heroes.length; h++) {
        heroOccurances += 'Percentage of being in jail: ';
        heroOccurances += roundDecimal(((heroes[h].occurances / totalOccurances) * 100),2);
        heroOccurances += ' % || ';
        //heroOccurances += 'Relative Percentage: ';
        //heroOccurances += roundDecimal((((heroes[h].occurances / totalOccurances) * 100)/8),2);
        //heroOccurances += ' % || ';
        heroOccurances += heroes[h].name;
        heroOccurances += ' jailed: ';
        heroOccurances += heroes[h].occurances;
        heroOccurances += ' times. <br/>';
    }
    heroOccurances += '<br/>';
    return heroOccurances;
}

function displayJail(heroes,alliances,size) {
    result = getJail(heroes,alliances,size);
    display = '';
    for (u = 0; u < size; u++) {
        display += heroes[result[u]].name;
        if ((u+1) != size) {
        display += ' - ';
        }
    }
    return display;
}

function getJail(heroes,alliances,jail_size) {
    var jailed_heroes = [];
    for (i = 0; i < jail_size; i++) {
        jailed_heroes.push(imprisonHero(heroes,alliances,jailed_heroes));
    }
    return jailed_heroes;
}

function imprisonHero(heroes,alliances,jailed_heroes) {
    var flag_success = false;
    var is_valid = false;
    var hero_id;
    while (flag_success == false) {
        hero_id = getRandomInteger(0,heroes.length);
        console.log('Checking Hero: ' + heroes[hero_id].name);
        if (jailed_heroes.includes(hero_id) == false) {
            console.log('Not in jail yet.');
            console.log('Checking alliance validations');
            is_valid = checkValidity(heroes,alliances,hero_id);
            if (is_valid == true) {
                console.log('Validation passed'); 
                flag_success = true;
            }
            else console.log('Validation failed');
        }
        else console.log('Already in jail - Retrying');
    }
    for (k = 0; k < heroes[hero_id].alliances.length; k++) {
        alliances[heroes[hero_id].alliances[k]].heroes -= 1;
    }
    heroes[hero_id].occurances += 1;
    console.log('Hero imprisoned: ' + heroes[hero_id].name);  
    return hero_id;
}

function checkValidity(heroes,alliances,hero) {
    var is_valid = true;
    for (j = 0; j < heroes[hero].alliances.length; j++) {
        console.log('Alliance: ' + alliances[heroes[hero].alliances[j]].name);
        console.log('Heroes available: ' + alliances[heroes[hero].alliances[j]].heroes);
        console.log('Minimum heroes needed for alliance: ' + alliances[heroes[hero].alliances[j]].max);
        if (((alliances[heroes[hero].alliances[j]].heroes) - (alliances[heroes[hero].alliances[j]].max)) == 0) {
            console.log('Alliance validation failed');
            is_valid = false;
            break;
        }
    }
    return is_valid;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function roundDecimal(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }