extends layout

block content
	h3
		Students
	ul
		each student, i in studentlist
			li#student_list_item
				a(href="#") #{student.student} lives at
				#{student.street} #{student.city},#{student.state}