import express from 'express';
import { container, resolveDependency } from './dependencyContainer.js';
import { randomUUID } from 'crypto';

const app = express();

let worldKindnessBalance = 'evil';

const isHumanKind = () => {
  if (worldKindnessBalance === 'kind') {
    worldKindnessBalance = 'evil';
    return false;
  }

  if (worldKindnessBalance === 'evil') {
    worldKindnessBalance = 'kind';
    return true;
  }
};

class Human {
  isHumanKind = isHumanKind();
  id = randomUUID();

  letDogBark() {
    return !this.isHumanKind;
  }

  throwBootIntoCat() {
    return !this.isHumanKind;
  }
}

class Dog {
  human;
  constructor() {
    this.human = resolveDependency(Human);
    console.log('dogs human', this.human.isHumanKind, this.human.id);
  }
  voice() {
    if (this.human.letDogBark()) {
      return 'Bark';
    }
  }
}

class Cat {
  dog;
  human;

  constructor() {
    this.dog = resolveDependency(Dog);

    this.human = resolveDependency(Human);
    console.log('cats human', this.human.isHumanKind, this.human.id);
  }

  isAfraid() {
    if (this.dog.voice() === 'Bark') {
      return true;
    } else {
      return this.human.throwBootIntoCat();
    }
  }
}

class App {
  cat;
  constructor() {
    this.cat = resolveDependency(Cat);
  }

  isCatAfraid() {
    return this.cat.isAfraid();
  }
}

const diApp = new App();

console.log(container);

app.get('/cat-status', (req, res) =>
  res.json({
    isAfraid: diApp.isCatAfraid(),
  }),
);

app.listen(3001, () => {
  console.log('Listening to 3001');
});
