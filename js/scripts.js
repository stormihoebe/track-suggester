$(function(){
  $("#epicodusForm").submit(function(){
    event.preventDefault();
      var firstName = $(".firstName").val();
      var companyType = $("#companyType").val();
      var system = $("input:radio[name=system]:checked").val();
      var jobType = $("#jobType").val();
      var experience = $("input:radio[name=experience]:checked").val();

      $("#results div").hide();

      if(firstName) {
        $(".moreButton").show();
        if(companyType === "neither" || jobType === "none"){
          $(".none").show();
          $(".studentName").text(firstName);
        } else if (companyType === "creative" || jobType === "design") {
          $(".cssDesign").show();
          $(".studentName").text(firstName);
        } else if ( jobType === "apps"){
          $(".javaAndroid").show();
          $(".studentName").text(firstName);
        } else if (companyType === "larger" && system === "windows" || companyType === "larger" && jobType === "software" || system === "windows" && jobType === "software") {
          $(".cNet").show();
          $(".studentName").text(firstName);
        } else if ( jobType === "content") {
          $(".phpDrupal").show();
          $(".studentName").text(firstName);
        } else if (jobType === "interactive"){
          $(".rubyRails").show();
          $(".studentName").text(firstName);
        } else {
          $(".any").show();
          $(".studentName").text(firstName);
        }
      } else {
        alert("Please enter your first name before submitting.");
      };
  });

  $("#selectLanguage").submit(function(){
    event.preventDefault();
    var language = $("#language").val();

    $("#languageQuizzes div").hide();
    
    if (language === "java") {
      $(".javaQuiz").show();
    }

  });
  $("#javaQuiz").submit(function(){
    event.preventDefault();
    var answer = $("#javaTF").val();
    $("#languageQuizzes div").hide();

    if (answer){
      if (answer === "true") {
        $(".javaResults").text("You got: 0/1 correct. Try again");
      } else {
        $(".javaResults").text("You got: 1/1 correct. Great Job!");
      };
    };
  });

});
