//select second <p> tag and add button directly after it
$(document.getElementsByTagName("p")[1]).after("<button name='quickfix' id='quickfix_button' class='orangebutton' onmouseover=\"hesk_btn(this,'orangebuttonover');\" onmouseout=\"hesk_btn(this,'orangebutton');\" >Toggle QuickFix Mode</button>")

//Flag for determinig if button has been previously pressed
var clicker = true
$('#quickfix_button').click(function(){

	if(clicker)
	{
		//Set category to Serve
		$("select[name= category]").val('27')

		//Hide priority
		$("select[name=priority").parent().parent().css('display', 'none')

		//Hide Search Bar
		$("input[name=txtsearch]").css('display', 'none')

		//Select specific table to make go away
		$(document.getElementsByTagName('table')[7]).css('display','none')

		//Hide requisition feild
		$("input[name=custom1]").parent().parent().css('display', 'none')

		//Hide bottom two tables
		$(document.getElementsByTagName('table')[10]).css('display','none')
		
		//Hide the extra options field and make sure show is checked
		$("input[name=show]").prop('checked', "checked")
		$("input[name=show]").parent().parent().css('display', 'none')

		//hide stupid lines
		$('hr').css('display', 'none')

		//Add quickfix text into message box
		$("textarea[name=message").val("\nQUICKFIX")

		clicker = false
	}

	else
	{

        //undo Hide priority
		$("select[name=priority").parent().parent().css('display', 'table-row')

		//undo Hide Search Bar
		$("input[name=txtsearch]").css('display', 'block')

		//undo Select specific table to make go away
		$(document.getElementsByTagName('table')[7]).css('display','block')

		//undo Hide requisition feild
		$("input[name=custom1]").parent().parent().css('display', 'block')

		//undo Hide bottom two tables
		$(document.getElementsByTagName('table')[10]).css('display','block')
		$("input[name=show]").parent().parent().css('display','block')

		//undo hide stupid lines
		$('hr').css('display', 'block')

		clicker = true
	}
})