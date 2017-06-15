'use strict';

$(function () {

	var allCodes = '', count = 0;

	var $codeContainer = $('#codeContainer');
	$('#addCode').on('click', function () {
		addCodeArea()
	});

	addCodeArea
		("var target = document.getElementById('test'),\n" +
		"    element = document.createElement('div');\n" +
		"element.innerHTML = 'Hello, world!';\n" +
		"target.append(element);");


	$('#runAllBtn').on('click', function () {
		$('html, body').animate({ scrollTop: $('.jumbotron').offset().top }, 500);
		eval(allCodes);
	});


	function addCodeArea(val) {
		var code;

		var $codePanel = $('<section>')
			.addClass('panel')
			.appendTo($codeContainer);

		var $codePanelBody = $('<div>')
			.addClass('panel-body')
			.appendTo($codePanel);

		var $codeArea = $('<textarea>')
			.addClass('form-control code-area')
			.attr('rows', '5')
			.attr('title', 'code')
			.val(val)
			.on('keydown blur', function (event) {
				if (event.type === 'keydown' && event.which === 9) {
					event.preventDefault();
					$codeArea.insertAtCaret('    ');
				}
			})
			.appendTo($codePanelBody)
			.focus();

		var $img = $('<img src="img/js.png">')
			.appendTo($codePanelBody);


		var $saveBtn = $('<button>')
			.attr('type','button')
			.addClass('btn btn-success pull-right')
			.text('Сохранить ')
				.on('click', function () {
					code = $codeArea.val();
					if (code === null || code === '' || code.trim() === '') {
						return
					}
					count++;
					allCodes += code + ' ';

					$codeArea.replaceWith('<pre>' + code + '</pre>');
					$img.replaceWith('<img src="img/js1.png">');
					$saveBtn.replaceWith($runBtn);
					$cancelBtn.remove();
					if (count === 2) {
						$('#runAllBtn').removeClass('hidden')
					}
				})
			.appendTo($codePanelBody);

		var $runBtn = $('<button>')
			.attr('type','button')
			.addClass('btn btn-warning pull-right')

			.text('Запустить ')
			.on('click', function () {
				eval(code);
			});

		var $cancelBtn = $('<button>')
			.attr('type','button')
			.addClass('btn btn-danger pull-right')
			.text('Отмена ')
			.on('click', function () {
				$codePanel.remove()
			})
			.appendTo($codePanelBody);

		$('html, body').animate({ scrollTop: ($codePanel).offset().top }, 500);

		animateWow()
	}

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

});
