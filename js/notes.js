var Megaroster = function() {
  var self = this;

  this.save = function(){
    //first makes sure browser supports local storage before we use it
    try{
      return (localStorage.students = JSON.stringify(self.students));//tries to save the entire student array to local storage after converting to strings
      //then it returns the result
    }
    catch(err){
      return false;
    }
  };

  this.load = function(){
    try{
      self.students = JSON.parse(localStorage.students);//gets student array from local memory
      $.each(self.students, function(index, student_name){//what you want to pass in, what to do to each,
          self.appendToList(student_name);
      } );
    }
    catch(err){
      return false;
    }

  };
  this.appendToList = function(){
    $('#students').append('<li class="list-group-item">' + student_name + '</li>');//add to ol as an li
  };

  this.addStudent = function(student_name){
    self.students.push(student_name);//add it to the students array
    self.appendToList(student_name);
    self.save(); //calls save to save to local storage
  };

  this.init = function() {
    self.students = [];//students is a property of the object self, declare a new arrary
    self.load();//loads the page, load is a method because of the way it is invoked


    $('#new_student_form').on('submit', function (ev) { //anonymous function, gets called when submit event happens
      ev.preventDefault(); //prevents default event handler for the submit action
      var student_name = $(this.student_name).val(); //access the s.name

      self.addStudent(student_name);

      $(this.student_name).val('').focus();//clears the previous student name entry & makes it the focus

    });
  };

};

var roster = new Megaroster();
roster.init();
