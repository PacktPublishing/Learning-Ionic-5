import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {

    @Input() images: Array<string>;

    public slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    constructor() {
    }

    ngOnInit() {
    }

}
