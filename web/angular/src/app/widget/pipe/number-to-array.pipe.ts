/*
 * Copyright (c) 2019, JavaFamily Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
   name: "numberToArray"
})
export class NumberToArrayPipe implements PipeTransform {
   transform(value: number): number[] {
      if(value < 0) {
         throw new RangeError();
      }

      return new Array(value).fill(0).map((_, i) => i);
   }
}