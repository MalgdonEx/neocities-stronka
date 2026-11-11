//CLOCK SCRIPT
const clock = document.getElementById('clock');

function updateTime() {
    const now = new Date();
  
    clock.textContent = now.toLocaleTimeString('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
}
updateTime(); 
setInterval(updateTime, 1000);

//COPYING BUTTON TO CLIPBOARD
function copyButtonLink(){
    var copyText = document.getElementById("ButtonLink");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}
