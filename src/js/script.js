let total = 5000,
	time = 1,
	hourRate,
	tabLeft = document.querySelector('.tab-left'),
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterBlock = document.getElementById('counter-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHours = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	cmsCheck = document.getElementById('changes-cms'),
	changesCheck = document.getElementById('changes-check'),
	totalValue = document.getElementsByClassName('total-count')[0],
	input = document.getElementsByTagName('input');
	label = document.getElementsByTagName('label');



const land = 5000,
	  corp = 12000,
	  cms = 4000,
	  changes = 1000,
	  blocks = 500,
	  pages = 2500;

window.addEventListener('DOMContentLoaded', function() {
	tabLeft.addEventListener('click', () => {

		for (let i = 0; i < input.length; i++){
			input[i].value = '';
		};
		blocksBlock.style.display = 'flex';
		pagesBlock.style.display = 'none';
		cmsCheck.checked = false;
		changesCheck.checked = false;
		tabLeft.classList.add('active');
		tabRight.classList.remove('active');

		total = land;
		totalValue.value = total;
	});
	tabRight.addEventListener('click', () => {

		for (let i = 0; i < input.length; i++){
			input[i].value = '';
		};
		blocksBlock.style.display = 'none';
		pagesBlock.style.display = 'flex';
		cmsCheck.checked = false;
		changesCheck.checked = false;
		tabLeft.classList.remove('active');
		tabRight.classList.add('active');

		total = corp;
		totalValue.value = total;
	});

	counterBlock.addEventListener('input', () => {
		counterHours.value = '';
		counterRate.value = '';
		total = counterBlock.value * blocks;
		totalValue.value = total;
	});	
	counterPages.addEventListener('input', () => {
		counterHours.value = '';
		counterRate.value = '';
		total = counterPages.value * pages;
		totalValue.value = total;
	});
	counterHours.addEventListener('input', () =>{
		counterPages.value = '';
		counterBlock.value = '';
		total = 0;
		time = counterHours.value;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	});	
	counterRate.addEventListener('input', () =>{
		counterPages.value = '';
		counterBlock.value = '';
		total = 0;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	});
	changesCheck.addEventListener('input', () =>{
		if (changesCheck.checked) {
			total += changes;
			totalValue.value = total
		} else {
			total -= changes;
			totalValue.value = total
		}
	});
	cmsCheck.addEventListener('input', () =>{
		if (cmsCheck.checked) {
			total += cms;
			totalValue.value = total;
		} else {
			total -= cms
			totalValue.value = total;
		}
	});



});