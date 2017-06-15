// Моє невеличке рішення для зручного присвоєння WOW-анімацій (по суті, класів) за селекторами з використанням jQuery.
// Таке рішення виникло при роботі з сайтом для WordPress, де планувалося анімувати велику кількість блоків,
// в тому числі таких, що додаються з бекенду. Для "LiteCode{JS}" достатньо було б додати кілька класів до HTML та JS.

// Звичайний варіант:
$('.selector, .selector1 div, .selector2 span, .selector3 section, .selector4 .item, .etc').addClass('wow fadeIn');
// Громіздкий, незручно редагувати, важко читається:

// Спроба покращити візуальне сприйняття:
$(
	'.selector,' +
	'.selector1 div,' +
	'.selector2 span,' +
	'.selector3 selector,' +
	'.selector4 .item,' +
	'.etc'
).addClass('wow fadeIn');
//краще читається, але так само незручно редагувати, багато додаткових символів, в IDE відсутнє підсвічування синтаксису CSS.

// Власне, саме рішення:
function animateWow() {

	function addClassToArr(clas, arr) {
		for (var i = 0; i < arr.length; i++) {
			arr[i].addClass(clas);
		}
	}

	// тепер створюю "шаблонні" функції для кожної анімації, і просто додаю селектори до массиву для кожної анімації:

		// FADE IN =================== (для зручності сортую анімації за типом)
	addClassToArr('wow fadeIn',[
		$('.selector'),
		$('.selector1 div'),
		$('.selector2 span'),
		$('.selector3 section'),
		$('.selector4'),
		$('.etc')
	]);
	addClassToArr('wow fadeInLeft',[
		/*$('.selector'),*/
		/*$('.selector'),*/
		/*$('.selector'),*/
		$('.panel:nth-child(odd)')
	]);
	addClassToArr('wow fadeInRight',[
		/*$('.selector'),*/
		/*$('.selector'),*/
		$('.panel:nth-child(even)')
	]);
	addClassToArr('wow fadeInUp',[
		/*$('.selector'),*/
		/*$('.selector'),*/
		$('.jumbotron')
	]);

		// SLIDE IN ===================
	addClassToArr('wow slideInLeft',[
		/*$('.selector'),*/
		/*$('.selector'),*/
		/*$('.selector'),*/
		/*$('.selector')*/
	]);
	addClassToArr('wow slideInRight',[
		/*$('.selector'),*/
		/*$('.selector')*/
	]);

		// ROTATE IN ===================
	addClassToArr('wow rotateInDownLeft',[
		/*$('.selector'),*/
		/*$('.selector'),*/
		/*$('.selector')*/
	]);

	addClassToArr('wow rotateInDownRight',[
		/*$('.selector'),*/
		$('#addCode')
	]);

		// PULSE =======================
	addClassToArr('wow pulse',[
		/*$('.selector'),*/
		/*$('.selector'),*/
		/*$('.selector'),*/
		$('.panel img')
	]);

		// FLIP ========================
	addClassToArr('wow flipInY',[
		/*$('.selector'),*/
		/*$('.selector'),*/
		$('#runAllBtn')
	]);
}
//Добре читається, зручно редагувати, теж немало додаткових символів, але є підсвічування синтаксису CSS в IDE;
//Загалом, як на мене, код має організованіший вигляд. ніж у всіх вищезгаданих варіантах.
//Мінус такого рішення - в недостатній оптимізації швидкості скрипту.

animateWow();
