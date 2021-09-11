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
//used to display the title of a new recipe	
var Title = new Vue({
    el: '#Title',
    data: {
        message: 'Recipe Name'
    }
})
//used to show filter in 
Vue.createApp({
    data() {
      return {
        Prices: []
      }
    }
  })

  Vue.createApp({
    data() {
      return {
        selected: 'Cheap',
        options: [
          { text: 'Cheap', value: '$' },
          { text: 'Moderate', value: '$$' },
          { text: 'Expensive', value: '$$$' }
        ]
      }
    }
  }).mount('#Select-Price')

  Vue.component('prompt-compo', {
  template: '<div><p>${message}</p><button @click="finished">finished</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      message: 'Click when finished'
    }
  },
  methods: {
    finished: function() {
      alert('Recipe Completed');
    }
  }
});

let vm = new Vue({
  el:'#complete',
  template: `<prompt-compo/>`
});