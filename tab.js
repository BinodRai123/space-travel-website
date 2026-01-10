const tablist = document.querySelector('[role = "tablist"]');
console.log(tablist);
const tabs = tablist.querySelectorAll('[role = "tab"]');
let tabFocus = 0;

tablist.addEventListener("keydown", changeTabFocus)

tabs.forEach((tab) => {
    tab.addEventListener("click", changePanel)
})

function tabReset(){
    if(tabFocus >= tabs.length) {
        tabFocus = 0;
    }
     
    if(tabFocus < 0) {
        tabFocus = tabs.length - 1;
    }
}

function changeTabFocus(e){
    const keydown = {
        left : 37,
        right: 39
    }

    if(e.keyCode === keydown.left || e.keyCode === keydown.right) {
        // tabs[tabFocus].setAttribute("tabIndex", -1);
        
        if(e.keyCode == keydown.right && tabFocus < tabs.length) {
            tabFocus++;
            tabReset();
        }
        if(e.keyCode == keydown.left) {
            tabFocus--;
            tabReset();
        }

        tabs[tabFocus].setAttribute("tabINdex", 0);
        tabs[tabFocus].focus();
    }
};

function changePanel(e) {
   const TargetTab = e.target;
   const TargetPanel = TargetTab.getAttribute("aria-controls");
   const TargetImage = TargetTab.getAttribute("data-image")
   
   // selecting parent container of tab and tablist;
   const tabContainer = TargetTab.parentNode;
   const mainContainer = tabContainer.parentNode;

   //removing all tabs selected 
   tabContainer.querySelector('[aria-selected = "true"]').setAttribute("aria-selected", false);
   TargetTab.setAttribute("aria-selected", true)


   //selecting all the panel/article and picture to add the hidden

    hideContent(mainContainer, "article");
    showContent(mainContainer, TargetPanel);
    

   //selecting and changing image;

   hideContent(mainContainer, "picture");
   showContent(mainContainer, TargetImage);

}

function hideContent(parent, content) {
    parent.querySelectorAll(content).forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
}

function showContent(parent, content) {
    parent.querySelector(`#${content}`).removeAttribute('hidden');
}
