$(function(){
  $("#epicodusForm").submit(function(){
    event.preventDefault();
      var firstName = $(".firstName").val();
      var companyType = $("#companyType").val();
      var system = $("input:radio[name=system]:checked").val();
      var jobType = $("#jobType").val();
      var experience = $("input:radio[name=experience]:checked").val();

      $("#results div").hide();

      if(companyType === neither)










  });
});
