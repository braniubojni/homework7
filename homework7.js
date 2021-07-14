class Account {
	static identifyAccounts(accountFirst, accountSecond){
		return accountFirst?.id === accountSecond?.id
	}

	constructor({id, name, balance} = {}){
		this._id = id;
		this.name = name;
		this.balance = balance;
	}

	get id(){
		return this._id;
	}

	get name(){
		return this._name;
	}

	set name(value){
		if(value.length < 0){
			return `Please provide correct name`;
		}
		this._name = value;
	}

	get balance(){
		return this._balance;
	}

	set balance(val){
		if(val < 0){
			return `Balance should greater than 0`;
		}
		this._balance = val;
	}

	credit(amount){
		if(amount < 0) {
			return `You shouldn't use negative number`;
		}
		return this.balance += +amount
	}

	debit(amount){
		if(amount <= this.balance) {
			this.balance -= amount
			return amount
		}
		return `Amount exceeded balance.`;
	}

	transferTo(anotherAccount, amount){
		anotherAccount.balance += this.debit(amount)
		return anotherAccount.balance;
	}
}

// let kikos = new Account({id:1, name:'Kikos', balance: 5000})
// let giqor = new Account({id:2, name:'Giqor', balance: 1000})

class Person {
	constructor({firstName, lastName, gender, age} = {}){
		this.firstName = firstName;
		this.lastName = lastName;
		this._gender = gender;
		this.age = age;
	}
	get gender(){
		return this._gender
	}
	get firstName(){
		return this._firstName
	}
	set firstName(val){
		// if(val.length < 1) return `Your name is too short`

		this._firstName = val;
	}

	get lastName(){
		return this._lastName
	}
	set lastName(val){
		// if(val.length < 3) return `Your lastname is too short`
		this._lastName = val;
	}

	get age(){
		return this._age
	}
	set age(val){
		// if(val < 10) return `Your are too young`
		this._age = val;
	}

	toString(){
		return JSON.stringify(this)
	}
}

class Student extends Person {
	_allProgramms = []
	constructor({programms, year, fee, ...args} = {}){
		super(args);
		this.programms = programms;
		this.year = year;
		this.fee = fee;	
	}
	get allProgramms(){
		return this._allProgramms
	}
	get programms(){
		return this._programms
	}
	set programms(value){
		if(!this._programms){
			this._programms = [value];
		}
		// this._programms = [value];
		this._programms = value;
	}
	get year(){
		return this._year;
	}
	set year(val){
		if(val < 2000) return console.log(`You are too old`)
		this._year = val;
	}
	get fee(){
		return this._fee;
	}
	set fee(val){
		if(val < 0) return console.log(`You can't have negative fee`)
		this._fee = val;
	}
	passExam(program, grade){
		this.programms.forEach(subject => {
			if(subject.hasOwnProperty(program)){
				subject[program] = grade
			}
		})
		if(!this.programms.filter(item => Object.values(item)[0] === 0).length){

			this.year += 1
			this.allProgramms.push(...this.programms)
			this.programms = []
		}
	}
	toString(){
		return JSON.stringify(this)
	}
}

let john = new Person({firstName:'John', lastName:'Petrosyan', gender: 'male', age: 19,})

let giqor = new Student({
	firstName: "Giqor", 
	lastName: "Smith", 
	gender: 'male', 
	programms: [{'Liric':0},{'History':0}, {'Math':0}],
	age: 35, 
	year: 2019,
	fee: 450000,
})

giqor.passExam('Liric', 55)
giqor.passExam('History', 55)
giqor.passExam('Math', 75) // uncomment me and run the code please!!!
// giqor.programms.push({'biology':0}, {'physical education': 0})

console.log(giqor)