document.getElementById('menu').onclick = menuclose;
document.getElementById('openmenu').onclick = menuclose;
function menuclose() {
         document.getElementById('menu').hidden = true
         document.getElementById('openmenu').innerHTML = "Меню"
      }
function menuopen() {
         document.getElementById('menu').hidden = false
         document.getElementById('openmenu').hidden = true
      }
