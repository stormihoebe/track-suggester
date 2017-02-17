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
});
