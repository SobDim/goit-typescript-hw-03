class Key {
  constructor(private signature: number = Math.random()) {}
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}

class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(private key: Key) {}
  comeIn = (person: Person): void => {
    if (this.door) {
      this.tenants.push(person);
    } else {
      throw new Error('Door is closed');
    }
  };

  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    } else {
      throw new Error('Wrong key');
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    } else {
      throw new Error('Wrong key');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
