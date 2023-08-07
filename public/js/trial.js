$(".btn").click(function() {
  
    var lable = $(".btn").text().trim();
 
    if(lable == "bySize") {
      $(".btn").text("Show");
      $(".content").bySize();
    }
    else {
      $(".btn").text("bySize");
      $(".content").show();
    }
     
   });
 
 
 
 