var tabs = document.getElementById("seckill-tabs").getElementsByTagName("li");

for(var i=0; i<tabs.length;i++){
    tabs[i].onclick = showList;
}

function showList() {
    for(var i=0; i<tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            console.log(tabs[i].className);
        }
    }
}