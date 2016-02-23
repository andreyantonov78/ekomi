	function testAnim(el, x) {
    $(el).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };

	function precheck()
	{
		var sitename = $('#sitename').val();
		var n = sitename.indexOf(".");
		
		if(n<0)
		{	
			console.log(1);
			// $('#entry-elements').addClass( "shake animated" );
			testAnim('#entry-elements', 'shake');
			$('#entry-elements').addClass( "shake animated" );

			$("#sitenameerr").fadeIn();
		}
		else
		{
			console.log(2);
			$("#sitenameerr").fadeOut();
			check();
		}
		console.log(sitename);

	}
	
	function check()
	{
		var sitename = $('#sitename').val();
		sitename = sitename.replace("http://", "");
		sitename = sitename.replace("www.", "");
		
		$("#header").animate({ "margin-top": "50px" }, 600 );
		$("#index-slide").fadeOut(300);
		$("#not-reviewed-slide").show();
		
		$.ajax({
			url: 'call.php?q='+sitename,
			type: 'GET',
			crossDomain: true,
			dataType: 'json',
			contentType: 'application/javascript; charset=utf-8',
			complete: function(data) {
				var rating = $(data.responseText).find('#rating').text();
				console.log(data);
				if(rating=="")
				{
					$("#loading-slide").hide();
					$("#sitename-notfound span").html(sitename);
					$("#not-reviewed-slide").show();
				}
				else
				{
					$("#loading-slide").hide();
					
					//sitename from result
					var result_sitename = $(data.responseText).find('#ps-reviews-top h2').text();
					$("#sitename span").html(result_sitename);
					
					//showing reviewes
					var reviewes_bar =  $(data.responseText).find('#ps-reviews-top').html();
					reviewes_bar = $(reviewes_bar).last().html();
					
					//showing score
					$("#result-score span").html(rating);
					
					reviewes_bar = reviewes_bar.replace("/images/shopping/", "");
					$("#result-reviewes").html(reviewes_bar);
					
					//showing histogram
					var reviewes_histogram = $(data.responseText).find('#rating-histogram').html();
					$("#result-histogram").html("<table id='rating-histogram'>" + reviewes_histogram + "</table>");
					
					//review-count
					var review_count = $(data.responseText).find('#review-count').html();
					$("#result-review-count").html(review_count);
					
					$('#result-slide').show();	
				}
				
			}
		});
	}
	
	$(function(){
		$("#sitename").keyup(function (e){
			if (e.which == 13) {
				precheck(e);
			e.preventDefault();

			}
		 });
	});
