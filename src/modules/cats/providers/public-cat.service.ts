import { Inject, Injectable } from '@nestjs/common';
import {
  CATS_CLASS_TOKEN,
  BarsikCatService,
  UzbekCatService,
} from './private-cat.service';

@Injectable()
export class PublicCatService {
  constructor(
    // @Inject(CATS_CLASS_TOKEN)
    // private readonly privateCatService: BarsikCatService,
    private readonly privateCatService: UzbekCatService,
  ) {}

  public getCat(): any {
    return {
      name: this.privateCatService.getCatName(),
      age: this.privateCatService.getCatAge(),
      owner: this.privateCatService.getCatOwner(),
    };
  }
}
