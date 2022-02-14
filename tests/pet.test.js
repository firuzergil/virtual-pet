const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});
describe('constructor', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });
});
describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
    it('hunger increases 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('fitness decreases 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });


    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decrease hunger level by 3', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkup', () => {
    it('if fitness <= 3 returns I need a walk', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;
        pet.checkUp();
        expect("I need a walk");
    });
    it('if hunger >= 5 returns I am hungry', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.checkUp();
        expect("I am hungry");
    });
    it('if hunger >= 5 and fitness <= 3 returns I am hungry AND I need a walk', () => {
        const pet = new Pet('fido');
        pet.fitness = 3;
        pet.hunger = 5;
        pet.checkUp();
        expect("I am hungry AND I need a walk");
    });
    it('if hunger <= 5 and fitness >= 3 returns I feel great!', () => {
        const pet = new Pet('fido');
        pet.fitness = 10;
        pet.hunger = 0;
        pet.checkUp();
        expect("I feel great!");
    });
});
describe('isAlive', () => {
    it('if fitness <= 0 returns false', () => {
        const pet = new Pet('fido');

        pet.fitness = 0;
        pet.isAlive();
        expect(false);
    });
    it('if hunger >= 10 returns false', () => {
        const pet = new Pet('fido');

        pet.hunger = 10;
        pet.isAlive();
        expect(false);
    });
    it('if age >=30 returns false', () => {
        const pet = new Pet('fido');
        pet.age = 30;
        pet.isAlive();
        expect(false);
    });
    it('if hunger >= 10 and fitness <= 0 and age <=30 returns true', () => {
        const pet = new Pet('fido');
        pet.fitness = 10;
        pet.hunger = 0;
        pet.age = 0
        pet.isAlive();
        expect(true);
    });
});
