$(document).ready(function () {
  function score_indicate() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val()),
    ];

    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4]; 

    $("#sum_indicate").text(sum);
    let average = sum / subject_points.length
    $('#average_indicate').text(average);
  };

  function get_achievement() {
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    if(averageIndicate >= 80) {
      return "A"
    } else if(averageIndicate >= 60) {
        return "B"
      }  else if(averageIndicate >= 40) {
           return "C"   
         } else {
             return "D"
           }  
  };
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
});


