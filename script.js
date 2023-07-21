const button=document.querySelector("button");
const body=document.querySelector("body");
const colors = ['pink','skyblue','cadetblue','chocolate','cornflowerblue','darkcyan','darksalmon','forestgreen','fuchsia','goldenrod','midnightblue','steelblue','violet'];
body.style.backgroundColor="pink";
document.addEventListener('click',function(){
     const colorindex=parseInt(Math.random()*colors.length);
     body.style.backgroundColor=colors[colorindex];
    function number(){
        const num=parseInt(Math.random()*colors.length);
        document.getElementById("b2").innerHTML=num;
    }
});
