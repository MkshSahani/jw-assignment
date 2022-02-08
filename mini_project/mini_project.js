var tabOpen = true; 
var p = 0; 
var sideBarElement = document.getElementsByClassName('sideBar')[0];
var iconElement = document.getElementById('icon');
var userPhoto = document.getElementById('userPhoto'); 


const MARGIN_LENGTH = ""

const HIDE_ICON_DATA = `
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
    `
const BACK_ICON_DATA = `
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    `


// get image required. 


// fetch("https://drive.google.com/uc?export=view&id=1IIlIvxCWRZ2IQkjBPhljvdwuw-tOZuVV")
//     .then(res => res.json())
//     .then(result => {
//         console.log(result); 
//         userPhoto.src = result.message; 
//     })
//     .catch(err => console.log(err)); 



userPhoto.src = "https://drive.google.com/uc?export=view&id=1IIlIvxCWRZ2IQkjBPhljvdwuw-tOZuVV"

function toggleOperation() {
    console.log(sideBarElement);
    
    if(tabOpen == true) {
        closeSideBar();
    } else {
        reopenSideBar(); 
    }
    console.log(p);
}


function closeSideBar() {
    console.log("close tab");
    sideBarElement.style.marginLeft = "-370px"; 
    iconElement.innerHTML = BACK_ICON_DATA;
    tabOpen = false; 
    
}

function reopenSideBar() {
    console.log("open tab");
    sideBarElement.style.marginLeft = "-10px";
    iconElement.innerHTML = HIDE_ICON_DATA;
    tabOpen = true; 
}

