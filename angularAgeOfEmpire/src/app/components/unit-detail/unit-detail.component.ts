import {Component, OnInit} from '@angular/core';
import {EmpiresService} from '../../service/empires.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-unit-detail',
    templateUrl: './unit-detail.component.html',
    styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {
    title = 'Detail';

    details: string[] = [];
    id: number;

    constructor(private route: ActivatedRoute, private empiresService: EmpiresService) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: { id: string }) => {
                this.id = +params.id;
            }
        );

        this.getDetail();
    }

    getDetail() {
        this.empiresService.getAllEmpires()
            .subscribe((res) => {
                this.details.push(res.units[this.id - 1]);
                console.log(res.units[this.id - 1]);
                console.log(this.details);

            }, (err) => {
                console.log(err);
            });
    }
}
