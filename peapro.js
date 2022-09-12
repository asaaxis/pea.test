$(document).ready(function () {
  function get_achievement() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val()),
    ];

    let sum = sum + subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4]; 

    $("#sum_indicate").text(sum);
  }

  function get_achievement() {
    let avarageIndicate = $("#average_indicate").text();
    console.log(avarageIndicate)
    if(avarageIndicate >= 80) {
      return "A"
    } else if(avarageIndicate >= 60) {
        return "B"
      }  else if(avarageIndicate >= 40) {
           return "C"   
         } else {
             return "D"
           }  
  };
});