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
			console.log(`Please provide correct name`)
			return;
		}
		this._name = value;
	}

	get balance(){
		return this._balance;
	}

	set balance(val){
		if(val < 0){
			console.log(`Balance should greater than 0`)
			return;
		}
		this._balance = val;
	}

	credit(amount){
		if(amount < 0) return `You shouldn't use negative number`
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

let kikos = new Account({id:1, name:'Kikos', balance: 5000})
let giqor = new Account({id:2, name:'Giqor', balance: 1000})