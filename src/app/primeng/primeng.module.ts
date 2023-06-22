import { NgModule } from '@angular/core';
import {RippleModule} from "primeng/ripple";
import {TieredMenuModule} from "primeng/tieredmenu";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {BadgeModule} from "primeng/badge";



@NgModule({

  exports: [
    RippleModule,
    TieredMenuModule,
    DialogModule,
    ButtonModule,
    CardModule,
    BadgeModule
  ]
})
export class PrimengModule { }
