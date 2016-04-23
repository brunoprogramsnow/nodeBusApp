
var studentImport= require('./student.js');


var Bus= function(driverName, color, gas){
	this.studentsInBus= []; 
	this.driverName= driverName; 
	this.color = color; 
	this.gas = parseInt(gas); 

	this.studentEnter= function(name, gender, grade, gpa, detentions,sleepingInClass,catchPhrase){
		this.studentsInBus.push(new studentImport(name, gender,grade,gpa,detentions,sleepingInClass,catchPhrase))
	}  
	this.busChatter = function(){
		for (i=0; i<studentsInBus.length; i++){
			console.log(studentsInBus[i].catchPhrase);
		}
	}

} 
module.exports= Bus; 