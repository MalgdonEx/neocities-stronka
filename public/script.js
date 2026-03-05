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