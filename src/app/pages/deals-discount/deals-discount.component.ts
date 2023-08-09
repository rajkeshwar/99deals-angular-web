import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-deals-discount',
  standalone: true,
  imports: [CommonModule,CardModule,InputTextModule,SelectButtonModule,CarouselModule],
  templateUrl: './deals-discount.component.html',
  styleUrls: ['./deals-discount.component.scss']
})
export class DealsDiscountComponent {
 
  
//   justifyOptions: any[] = [
//     { icon: 'pi pi-align-left', justify: 'Left' },
//     { icon: 'pi pi-align-right', justify: 'Right' },
//     { icon: 'pi pi-align-center', justify: 'Center' },
    
// ];
value!: number;
    
    paymentOptions: any[] = [
        { name: 'Today Deals', value: 1 },
        { name: 'Discount', value: 2 },
        { name: 'Coupans', value: 3 }
    ];
}
