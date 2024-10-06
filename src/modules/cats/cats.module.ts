import { Module } from '@nestjs/common';
import {
  CATS_CLASS_TOKEN,
  CATS_VALUE_TOKEN,
  BarsikCatService,
  UzbekCatService,
} from './providers/private-cat.service';
import { PublicCatService } from './providers/public-cat.service';

@Module({
  // imports: [DogModule],
  providers: [
    PublicCatService,
    UzbekCatService,
    BarsikCatService,
    {
      provide: CATS_VALUE_TOKEN,
      useValue: 'some_text',
    },
    // {
    //   provide: CATS_CLASS_TOKEN,
    //   useClass:
    //     process.env.TOWN === 'Sumy' ? UzbekCatService : BarsikCatService,
    // },
    // {
    //   provide: CATS_CLASS_TOKEN,
    //   useValue: new PrivateCatService(),
    // },
    // {
    //   provide: CATS_CLASS_TOKEN,
    //   useFactory: (): BarsikCatService => new BarsikCatService(),
    //   inject: [CATS_VALUE_TOKEN],
    // },
  ],
  exports: [PublicCatService],
})
export class CatsModule {}
