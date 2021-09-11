//These varibles allow for adjusting the link to cole's and woolworth's searches
var wool_link= document.getElementById('ingredent');
var wool_input= document.getElementById('name');
    wool_input.onchange=wool_input.onkeyup= function() {
        wool_link.search= '?searchTerm='+encodeURIComponent(wool_input.value);
        wool_link.firstChild.data= wool_link.href;
    };

var coles_link= document.getElementById('Cingredent');
var coles_input= document.getElementById('Cname');
    coles_input.onchange=coles_input.onkeyup= function() {
        coles_link.search=encodeURIComponent(coles_input.value);
        coles_link.firstChild.data= coles_link.href;
    };
	