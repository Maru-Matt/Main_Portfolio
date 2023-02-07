
var links = document.querySelectorAll('.tab-links ');

var tabs = document.getElementsByClassName('tab-links')
var contents = document.getElementsByClassName('tab-content')


function myFunction(name){
    // clear all active tabs
    for (tab of tabs) {
        tab.classList.remove('active-tab');
    }
    // clear all active contents
    for (content of contents) {
        content.classList.remove('active-content');
    }

    // Add event listener to the tabs
    links.forEach(element => {
        element.addEventListener('click', (e)=>{
            console.log((e.target.classList.add('active-tab')));
           
          })
    });
    // Add active content 
    document.getElementById(name).classList.add('active-content');
   
   

}

var sideMenu = document.getElementById('sideMenu')

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}

