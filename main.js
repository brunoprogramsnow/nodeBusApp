var BusImport = require('./bus.js'); 
var prompt= require('prompt'); 

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
	if(!err){
		var theBus= new BusImport('Jim','Yellow',30); 
		theBus.studentEnter(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)
		
		for(i = 0; i < stuObj.name.length; i++){
        theBus.studentEnter(dataObj.name[i], stuObj.gender[i], stuObj.grade[i], stuObj.gpa[i], stuObj.detentions[i], stuObj.sleepingInClass[i], stuObj.catchPhrase[i])
        theBus.studentsInBus[i].canStudentHaveFun();
      }

  }else{
    console.log(error);
  }
	});

var stuObj={

	name:[],
	gender:[],
	grade:[], 
	gpa:[],
	detentions:[],
	sleepingInClass:[],
	catchPhrase:[]

} ;