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
		if(val.length < 1) return `Your name is too short`

		this._firstName = val;
	}

	get lastName(){
		return this._lastName
	}
	set lastName(val){
		if(val.length < 3) return `Your lastname is too short`
		this._lastName = val;
	}

	get age(){
		return this._age
	}
	set age(val){
		if(val < 10) return `Your are too young`
		this._age = val;
	}
}

let john = new Person({firstName:'John', lastName:'Petrosyan', gender: 'male', age: 19})
console.log(john.age)