var q=document.getElementById('qst');
var r=document.getElementById('rep');
var c=document.getElementById('reco');
var b=document.getElementById('cont');
var t=document.getElementById('tips');
var app = angular.module('niveau', []);
app.controller('jeux', function($scope) {
    $scope.reponse = "";    
});
q1='QUE SIGNIFIE HTML ?';
r1='HyperText Markup Language';
q2='QUE VEUX DIRE CSS ?';
r2='cascade stylesheet';
q.innerHTML=('Commençon'+' : '+q1);
c.onclick=function init(){
confirm('VOUS VOULEZ RECOMMENCER ???');
q.innerHTML=q1;
r.value='';
}
b.onclick=function debut(){
if (r.value!=r1){
t.innerHTML=('Erreur');
}
else{
q.innerHTML=q2;
t.innerHTML=('OK ... question suivante');
r.value='';
}
}

