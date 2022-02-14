function Pet(name, age) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function () {
    if (!this.isAlive()) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3

};
Pet.prototype.walk = function () {
    if (!this.isAlive()) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    };
};
Pet.prototype.feed = function () {
    if (!this.isAlive()) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.hunger - 3) > 0) {
        this.hunger -= 3;
    } else {
        this.hunger = 0;
    };
};
Pet.prototype.checkUp = function () {
    if (!this.isAlive()) {
        throw new Error('Your pet is no longer alive :(');
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
        return "I am hungry AND I need a walk"
    };
    if (this.fitness <= 3) {
        return "I need a walk"
    };
    if (this.hunger >= 5) {
        return "I am hungry"
    } else return "I feel great!"
};
Pet.prototype.isAlive = function () {
    if (this.fitness <= 0) {
        return false
    };
    if (this.hunger >= 10) {
        return false
    };
    if (this.age >= 30) {
        return false
    } else return true
}
module.exports = Pet;