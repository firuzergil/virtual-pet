function Pet(name, age) {
    this.name = name;
    this.age = 0;
};

Pet.prototype.growUp = function () {
    this.age += 1;
};
module.exports = Pet;