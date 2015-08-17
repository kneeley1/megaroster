var Megaroster = function() {
  this.veggies = ['cabbage', 'lettuce'];


  this.init = function() {
    var self = this;
    this.students = [];


    $('#new_student_form').on('submit', function (ev) {
      ev.preventDefault(); //prevents default submit action
      var student_name = $(this.student_name).val(); //access the s.name
      self.students.push(student_name);//add it to the students array
      $('#students').append('<li class="list-group-item">' + student_name + '</li>');//add to ol as an li
      $(this.student_name).val('').focus();//clears the previous student name entry & makes it the focus

    });
  };

};

var roster = new Megaroster();
roster.init();
