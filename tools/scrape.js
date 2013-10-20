var pokemon = [];
var index = 0;
$('tr').each(function(i) {
    console.log('hi');
    var object = {type:[]};
    $td = $(this).find('td');
    if ($td[1]) {
        object.index = $($td[1]).html().substring(2, 5);
    }
    if ($td[2]) {
        var $img = $($td[2]).find('img')
        if ($img.length > 0) object.image = $img[0].src;
    }
    if ($td[3]) {
        object.name = $($td[3]).find('a').html();
    }
    var type;
    if ($td[4]) {
        type = $($td[4]).find('a>span').html();
        if (type) object.type.push(type);
    }
    if ($td[5]) {
        type = $($td[5]).find('a>span').html();
        if (type) object.type.push(type);
    }
    if (object.name && object.type.length > 0) {
        pokemon.push(object);
    }
});
JSON.stringify(pokemon);