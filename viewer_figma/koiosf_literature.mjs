import {publish,subscribe,getElement} from '../lib/koiosf_util.mjs';


//subscribe("playerloading",  InitLiterature);

//subscribe("loadvideo",VideoLiterature)


var globalIframe
function InitLiterature() {
    console.log("In InitLiterature");        
    var domid=getElement("literature");
    var iframe=document.createElement("iframe");
    iframe.width="100%"
    iframe.height="90vh"
    iframe.style.width="100%"
    iframe.style.height="90vh"

    domid.appendChild(iframe); 
    globalIframe=iframe;
}

function VideoLiterature(vidinfo) {
    console.log("In VideoLiterature");  
    if (vidinfo) {    
        var match = vidinfo.txt.split(" ")[0];
        globalIframe.src=`browse-links?match=${match}`
    }
}

