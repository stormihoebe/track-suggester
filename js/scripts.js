$(function(){
  $("#epicodusForm").submit(function(){
    event.preventDefault();
      var firstName = $(".firstName").val();
      var companyType = $("#companyType").val();
      var system = $("input:radio[name=system]:checked").val();
      var jobType = $("#jobType").val();
      var experience = $("input:radio[name=experience]:checked").val();

      $("#results div").hide();

      if(companyType === "neither" || jobType === "none"){
        $(".none").show();
      } else if (companyType === "creative" || jobType === "design") {
        $(".cssDesign").show();
      } else if ( jobType === "apps"){
        $(".javaAndroid").show();
      } else if (companyType === "larger" && system === "windows" || companyType === "larger" && jobType === "software" || system === "windows" && jobType === "software") {
        $(".cNet").show();
      } else if ( jobType === "content") {
        $(".phpDrupal").show();
      } else if (jobType === "interactive"){
        $(".rubyRails").show();
      } else {
        $(".any").show();
      }










  });
});
