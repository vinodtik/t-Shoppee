import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers:[
        MenuService
    ]
})
export class MenuComponent implements OnInit {

    menulist:string[];
    constructor(private menuservice:MenuService) { }

    ngOnInit() {

        this.menulist = this.menuservice.getMenu()

    }

}