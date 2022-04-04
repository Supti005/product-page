var aTag = document.querySelectorAll(".item-action a");

for(var i=0; i<=aTag.length; i++)
{
    aTag[i].addEventListener('click' , function(e){
        e.preventDefault()
    });
}