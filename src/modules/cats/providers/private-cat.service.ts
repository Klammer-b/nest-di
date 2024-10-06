import { Injectable } from '@nestjs/common';

export const CATS_VALUE_TOKEN = 'CATS_VALUE_TOKEN';
export const CATS_CLASS_TOKEN = 'CATS_CLASS_TOKEN';

interface CatService {
  getCatName(): string;
  getCatAge(): number;
  getCatOwner(): string;
}

@Injectable()
export class BarsikCatService implements CatService {
  getCatName(): string {
    //some secret logic
    return 'Barsik';
  }

  getCatAge(): number {
    return 10;
  }

  getCatOwner(): string {
    return 'Borys';
  }
}

@Injectable()
export class UzbekCatService implements CatService {
  constructor(private barsikCatService: BarsikCatService) {}
  getCatName(): string {
    console.log(this);
    //some secret logic
    return 'Uzbek';
  }

  getCatAge(): number {
    return 5;
  }

  getCatOwner(): string {
    return 'Borys';
  }
}
