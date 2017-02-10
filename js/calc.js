function calc(){
	var sal, vac, year, result1, result2, total;

	sal = document.getElementById('salary').value;
	sal = parseInt(sal);

	vac = document.getElementById('vacation').value;
	vac = parseInt(vac);

	year = document.getElementById('years').value;
	year = Number(year);

	total = (sal/24)*vac+(sal*year)/24*vac; // Можно так же записать (sal*year)/24*vac
	result1 = (sal*year)/24*vac;
	result2 = (sal/24)*vac;

	document.getElementById('selling').innerHTML = (result2.toFixed(2));
	document.getElementById('bonus_selling').innerHTML = (result1.toFixed(2));
	document.getElementById('total_selling').innerHTML = (total.toFixed(2));
}
function reload(){
	location.reload();
}