document.addEventListener('DOMContentLoaded', function () {
	document.body.innerHTML += `
		<div class="call-now-container">
		<div class="call-now-card">
			<h4>Call Now!</h4>
			<p>We are the best company!</p>
			<a href="#" class="num"><i class="glyphicon glyphicon-earphone"></i>+11 (30) 123 1234</a>
		</div>
		
		<div class="button-container">
			<button type="button" class="call-now-appointment ring" onclick="collapse()">
				<div class="content">
					<i class="glyphicon glyphicon-earphone"></i> <span class="button-text">Book Appointment!</span>
				</div>
				<div class="cross">
					<i class="glyphicon glyphicon-remove"></i>
				</div>
			</button>
		</div>
		</div>`
});	

function collapse () {
    const bouton = document.getElementsByClassName('call-now-appointment')[0];
    const carte = document.getElementsByClassName('call-now-card')[0];
    
    if (bouton.style.width == '1.5em') {
      bouton.style.width = '220px';
      bouton.style.height = '1.5em';
      bouton.style.borderRadius = '100px';
      bouton.style.padding = '10px 20px';
      bouton.childNodes[1].style.opacity = '1';
      bouton.childNodes[3].style.opacity = '0';
      carte.style.opacity = '0';      
      carte.style.pointerEvents = 'none';
    } else {
      try {
        clearInterval(boucle);
      }
      catch (err) {}

      bouton.style.width = '1.5em';
      bouton.style.height = '1.5em'; 
      bouton.style.borderRadius = '50%';
      bouton.style.padding = '15px';
      bouton.childNodes[1].style.opacity = '0';
      bouton.childNodes[3].style.opacity = '1';
      carte.style.opacity = '1';
      carte.style.pointerEvents = 'all';
    }
}

function anim() {
  const e = document.getElementsByClassName('call-now-appointment')[0];  
  e.classList.remove('ring');
  void e.offsetWidth;
  e.classList.add('ring');
}

boucle = setInterval(anim, 3000);