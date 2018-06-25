/*
-On cree tous les titres dans le container
-On prépare l'élément qui va accueillir notre sommaire
-Pour chaque titre
    -on cree un <li><a>Mon titre<a><li>
    -on le place dans le <ul> du parent(suivant le niveau)
        -Si le parent n'a pas de <ul> on le crée
    -On greffe l'événement pour le scroll
*/
/*
var container = document.querySelector('.container');
var titles = container.querySelectorAll('h2, h3, h4, h5');

var sommaire = document.querySelector('#sommaire');

var uls = [];
uls[0] = sommaire;


for(var i = 0 ; i < titles.length; i++){
    var title = titles[i];
    var lvl = parseInt(title.tagName.replace('H', '')) -1
    
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = title.textContent;
    li.appendChild(a);
    if (!uls[lvl -1]){
        var ul = document.createElement('ul');
        uls[lvl -1] = ul;
        uls[lvl -2].lastChild.appendChild(ul);
    }

    uls[lvl] = null;
    uls[lvl -1].appendChild(li);


    a.addEventListener('click', function(e){
        e.preventDefault();
        console.log(title.offsetTop);
    })
}  
*/
 function Sommaire(container){
     this.container = container;
     this.uls = [document.createElement('ul')];
     this.buildStructure();
 }

 Sommaire.prototype.buildStructure = function() {
    var titles = this.container.querySelectorAll('h2, h3, h4, h5');
    for(var i = 0 ; i < titles.length; i++){
        var title = titles[i];
        var lvl = parseInt(title.tagName.replace('H', '')) -1
        
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        a.textContent = title.textContent;
        li.appendChild(a);
        if (!this.uls[lvl -1]){
            var ul = document.createElement('ul');
            this.uls[lvl -1] = ul;
            this.uls[lvl -2].lastChild.appendChild(ul);
        }
    
        this.uls[lvl] = null;
        this.uls[lvl -1].appendChild(li);
        this.bindScroll(a, title);  
    }  
 };

 Sommaire.prototype.bindScroll = function(a, title) {
     a.addEventListener('click', function(e) {
         e.preventDefault();
         document.body.scrollTop = title.offsetTop;
     })
 }

 Sommaire.prototype.appendTo = function(element) {
     element.appendChild(this.uls[0]);
 }

 var s = new Sommaire(document.querySelector('.container'));
 s.appendTo(document.querySelector('#sommaire'));




 