$(function () {
	var editId;
	var currentPerson;

	$.ajax({
		url: "http://localhost:3200/persons",
		dataType: "json",
		type: "GET",
		success: function(data, status, jqXHR) {
			for (var i = 0; i < data.length; i++) {
				$('table').append('<tr><td>' +  data[i].id + '</td><td>' + data[i].firstName + '</td><td>' + data[i].lastName + '</td><td>' + data[i].age + '</td><td class="button-td"><button class="edit">Edit</buttond></td><td class="button-td"><button class="delete">Delete</buttond></td></tr>')
			}
			
		}
	});


	$('button.add').click(function() {
		hide('.read', '.create');
		$('[name="firstName"]:eq(0)').val('');
		$('[name="lastName"]:eq(0)').val('');
		$('[name="age"]:eq(0)').val('');
	});


	$('#add').click(function() {
		var person = {
			firstName: $('[name="firstName"]:eq(0)').val(),
			lastName: $('[name="lastName"]:eq(0)').val(),
			age: $('[name="age"]:eq(0)').val(),
		};
		$.ajax({
			url: "http://localhost:3200/persons",
			dataType: "json",
			type: "POST",
			data: person
		});	
		$.ajax({
			url: "http://localhost:3200/persons",
			dataType: "json",
			type: "GET",
			success: function(data, status, jqXHR) {
				$('table').append('<tr><td>' +  data[data.length-1].id + '</td><td>' + person.firstName + '</td><td>' + person.lastName + '</td><td>' + person.age + '</td><td class="button-td"><button class="edit">Edit</buttond></td><td class="button-td"><button class="delete">Delete</buttond></td></tr>')
			}
		});
		hide('.create', '.read');
	});


	$('#back').click(function() {
		hide('.create', '.read');
	});


	$('#back1').click(function() {
		hide('.update', '.read');	
	});


	$('table').on('click', '.delete', function() {
		var	id = $(this).parent().siblings()[0].textContent;
		$.ajax({
			url: "http://localhost:3200/persons/" + id,
			type: "DELETE"
		});	
		var parent = $(this).parent().parent();
		parent.hide(1000, function() {
			parent.remove();
		});
	});


	$('table').on('click', '.edit', function() {
		hide('.read', '.update');
		editId = +$(this).parent().siblings()[0].textContent;
		currentPerson = $(this).parent().parent();
		$('[name="firstName"]:eq(1)').val($(this).parent().siblings()[1].textContent);
		$('[name="lastName"]:eq(1)').val($(this).parent().siblings()[2].textContent);
		$('[name="age"]:eq(1)').val($(this).parent().siblings()[3].textContent);
	});

		$('#change').click(function() {
			var person = {
				firstName: $('[name="firstName"]:eq(1)').val(),
				lastName: $('[name="lastName"]:eq(1)').val(),
				age: $('[name="age"]:eq(1)').val(),
			};
			$.ajax({
				url: "http://localhost:3200/persons/" + editId,
				dataType: "json",
				type: "PUT",
				data: person, 
				success: function() {
					$.ajax({
						url: "http://localhost:3200/persons/" + editId,
						dataType: "json",
						type: "GET",
						success: function(data, status, jqXHR) {
							currentPerson.after('<tr><td>' +  data.id + '</td><td>' + data.firstName + '</td><td>' + data.lastName + '</td><td>' + data.age + '</td><td class="button-td"><button class="edit">Edit</buttond></td><td class="button-td"><button class="delete">Delete</buttond></td></tr>');
							currentPerson.remove();
						}
					});
				}
			});
			hide('.update', '.read');
		});
	function hide(hide, show) {
		$(hide).slideUp(1000, function() {
			$(show).slideDown(1000);
		});	
	};
});