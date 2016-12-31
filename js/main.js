$(document).ready(function(){
  DATA = portfolioData;
  $(function(){
		$("#type").typed({
			strings: ["design", "build","lead","write","research","jump over"],
			typeSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false
		});
	});

  $(".work-card").click(function(){
    console.log("clicked");
    id = $(this).attr("id");
    title = DATA[id].title;
    desc = DATA[id].description;
    $("#focus-title").text(title);
    $("#focus-desc").text(desc);

    $("#focus-wrapper").show(300);
  })
  $("#close").click(function(){
    $("#focus-wrapper").hide(300);
  })
  $("input[type='radio']").change(function(){
    $(".work-card").remove();
    if($(this).prop("checked") == true){
      var filter = $(this).attr("id");
      console.log(filter);
      var filteredList = [];
      for(x in DATA){
        if(DATA[x].tags.includes(filter)){
          filteredList.push(x);
        }
      }
      console.log(filteredList);
    }
    for(item in filteredList){
      item = filteredList[item]
      $(".scrollder").append("<div class='work-card' id="+item+"><div class='work-image'><img src="+DATA[item].path+"></div><div class='work-content'><h2>"+DATA[item].title+"</h2><p>"+DATA[item].blurb+"</div></div>")
    }
    $(".work-card").click(function(){
      console.log("clicked");
      id = $(this).attr("id");
      title = DATA[id].title;
      desc = DATA[id].description;
      $("#focus-title").text(title);
      $("#focus-desc").text(desc);

      $("#focus-wrapper").show(300);
    })
  })
})
