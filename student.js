var Student= function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
	this.name=name;
	this.gender=gender; 
	this.grade=grade; 
	this.gpa=gpa; 
	this.detentions=detentions; 
	this.sleepingInClass=sleepingInClass; 
	this.catchPhrase=catchPhrase; 

	function canStudentHaveFun(err,result){
		if (this.detentions> 10 && this.gpa>2){
			console.log(this.name + 'is not on probation')
		}else console.log(this.name + 'is on probation')
	}

}
module.exports=Student;	
