/**
 * Created by 123 on 2019/4/6.
 */



//点击转发
document.getElementById("forwarding").addEventListener("click",function () {
    document.getElementById("shadow").style.display="block";
    document.getElementById("form").style.display="block";
});
document.getElementById("cancel").addEventListener("click",function () {
    document.getElementById("shadow").style.display="";
    document.getElementById("form").style.display="";

});

//全屏显示
function setInnerText(element,text) {
    if(typeof element.textContent=="undefined") {
        element.innerText = text;
    }else {
        element.textContent=text;
    }

}
function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}


var fullScreen=document.getElementById("fullScreen");

document.getElementById("fullScreen").setAttribute("value","true");
document.getElementById("fullScreen").addEventListener("click",function () {
        if (document.getElementById("fullScreen").getAttribute("value")) {
            setInnerText(document.getElementById("fullScreen"),"");
            document.getElementById("fullScreen").title="取消全屏";
            document.getElementById("fullScreen").removeAttribute("value");
            var docE = document.body;
            if (docE.requestFullScreen) {
                docE.requestFullScreen();
            } else if (docE.mozRequestFullScreen) {
                docE.mozRequestFullScreen();
            } else if (docE.webkitRequestFullScreen) {
                docE.webkitRequestFullScreen();
            } else if (docE.msRequestFullscreen) {
                docE.msRequestFullscreen();

            }
        }
        else  {
            document.getElementById("fullScreen").setAttribute("value","true");
            setInnerText(document.getElementById("fullScreen"),"");
            document.getElementById("fullScreen").title="全屏显示";
            var doc = document;
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.webkitCancelFullScreen) {
                doc.webkitCancelFullScreen();
            }else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();

            }

        }
    }
);

function chara() {
    if(document.getElementById("chara-ul").style.display=="block"){
        document.getElementById("chara-ul").style.display="none";
    }
    else {
        document.getElementById("chara-ul").style.display="block";
    }


}
function center(obj) {
    var signObj= document.getElementById(obj);

    document.getElementById(obj).style.display="block";
   var funObj=document.getElementById("function").offsetWidth;
console.log(funObj);
    var signObjWidth=signObj.offsetWidth;

    var mainObj=document.getElementById("cloud-scene");
    var mainObjWidth=mainObj.offsetWidth;

    signObj.style.left=(funObj+(mainObjWidth/2-signObjWidth/2))+"px";
}
