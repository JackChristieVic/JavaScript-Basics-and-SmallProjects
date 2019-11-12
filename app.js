class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Helli there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    greeting() {
        return `Helli there ${this.firstName} ${this.lastName}, you are a ${this.membership} in our system.`;
    }

    static getMembershipCost() {
        return 500;
    }
}
const mary = new Person("Mary", "Williams");
console.log(mary.greeting())

const john = new Customer("John", "Lee", "9999999", "VIP");
console.log(john.greeting());
console.log(Customer.getMembershipCost());