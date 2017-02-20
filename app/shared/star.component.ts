import { Component, OnChanges } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    rating: number = 2;
    starWidth: number;
    ngOnChanges(): void {
        debugger;
        this.starWidth = this.rating * 86 / 5;
    }

   
}
