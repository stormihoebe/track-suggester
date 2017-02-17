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
    } else if (language === "css"){
      $(".bad").show(); //I was having trouble with the naming the class of this, it wouldn't let me use logical names, but "bad" seemed to work...smh. I must have it defined elsewhere, I just can't find it.
    } else if (language === "javaScript") {
      $(".javaScriptQuiz").show();
    } else if (language === "c"){
      $(".cQuiz").show();
    } else if (language === "php") {
      $(".phpQuiz").show();
    } else if (language === "drupal") {
      $(".drupQuiz").show();
    }
  });

  $("#javaQuiz").submit(function(){
    event.preventDefault();
    var answer = $("#javaTF").val();

    if (answer){
      if (answer === "true") {
        $(".javaResults").text("You got: 0/1 correct. Try again");
      } else {
        $(".javaResults").text("You got: 1/1 correct. Great Job!");
      };
    };
  });

  $("#cssQuiz").submit(function(){
    event.preventDefault();
    var answer = $("#cssTF").val();

    if (answer){
      if (answer === "true") {
        $(".cssResults").text("You got: 0/1 correct. Try again");
      } else {
        $(".cssResults").text("You got: 1/1 correct. Great Job!");
      };
    };
  });

  $("#jsQuiz").submit(function(){
    event.preventDefault();
    var answer = $("#jsTF").val();

    if (answer){
      if (answer === "false") {
        $(".jsResults").text("You got: 0/1 correct. Try again");
      } else {
        $(".jsResults").text("You got: 1/1 correct. Great Job!");
      };
    };
  });

  $("#cSharpQuiz").submit(function(){
    event.preventDefault();
    var answer = $("#cTF").val();

    if (answer){
      if (answer === "false") {
        $(".cResults").text("You got: 0/1 correct. Try again");
      } else {
        $(".cResults").text("You got: 1/1 correct. Great Job!");
      };
    };
  });

  $("#pQuiz").submit(function(){
    event.preventDefault();
    var answer = $("#phpTF").val();

    if (answer){
      if (answer === "false") {
        $(".phpResults").text("You got: 0/1 correct. Try again");
      } else {
        $(".phpResults").text("You got: 1/1 correct. Great Job!");
      };
    };
  });

  $("#drupalQuiz").submit(function(){
    event.preventDefault();
    var answer = $("#drupalTF").val();

    if (answer){
      if (answer === "true") {
        $(".drupalResults").text("You got: 0/1 correct. Try again");
      } else {
        $(".drupalResults").text("You got: 1/1 correct. Great Job!");
      };
    };
  });

});
