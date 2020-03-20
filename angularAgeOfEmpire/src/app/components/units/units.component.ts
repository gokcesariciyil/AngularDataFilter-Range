import {Component, OnInit} from '@angular/core';
import {EmpiresService} from '../../service/empires.service';
import {Options} from 'ng5-slider';

interface RangeSliderModel {
    minValue: number;
    maxValue: number;
    options: Options;
}

@Component({
    selector: 'app-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    title = 'Units';
    name: string;

    activeMenuItem = '';

    ages: string[] = ['All', 'Dark', 'Feudal', 'Castle', 'Imperial'];
    costs: string[] = ['Wood', 'Food', 'Gold'];

    empires: any[] = [];
    empiresFiltered: string[] = [];
    ageValue: string;
    costTypes: string[] = [];
    costValues: string[] = [];
    costOptions: string[] = [];

    constructor(private empiresService: EmpiresService) {
    }

    ngOnInit() {
        this.getAllEmpires();
        this.createSlideOptions();
    }

    setActive(menuItem) {
        this.activeMenuItem = menuItem;
        console.log('activemenuitem', this.activeMenuItem);
    }

    createSlideOptions() {
        this.costs.forEach(costName => {
            this.costOptions[costName] = Object.assign({}, this.rangeSlider.options);
        });
        console.log('this.costOptions::', this.costOptions);
    }

    rangeSlider: RangeSliderModel = {
        minValue: 0,
        maxValue: 200,
        options: {
            floor: 0,
            ceil: 200,
            animate: false,
            step: 10,
            showTicks: true,
            disabled: true
        }
    };

    getAllEmpires() {
        this.empiresService.getAllEmpires()
            .subscribe((res) => {
                Object.values(res['units']).forEach((val) => {
                    this.empires.push(val);
                });
            }, (err) => {
                console.log(err);
            });
    }

    changeAge(event) {
        this.ageValue = event.target.value;
        this.transform();
    }

    changeCost(event) {
        if (event.currentTarget.checked == true) {
            this.costTypes.push(event.target.value);
            this.costOptions[event.target.value] = Object.assign({}, this.costOptions[event.target.value], {disabled: false});
        } else {
            const index = this.costTypes.indexOf(event.target.value);

            if (index > -1) {
                this.costTypes.splice(index, 1);
                this.costOptions[event.target.value] = Object.assign({}, this.costOptions[event.target.value], {disabled: true});
            }
        }

        this.transform();
    }

    changeCostValue(name, deger) {
        console.log('DEGER:::', name, '-', deger);
    }

    transform() {
        const currentAge = this.ageValue;
        const currentcostTypes = this.costTypes;

        this.empiresFiltered = this.empires.filter(function(o) {
            return currentAge === 'All'
                || (currentAge !== 'All'
                    && typeof o.age !== undefined
                    && o.age === currentAge);
        });

        if (currentcostTypes.length > 0) {
            this.empiresFiltered = this.empiresFiltered.filter(function(o) {
                return typeof o['cost'] !== undefined
                    && o['cost'] !== null
                    && Object.keys(o['cost']).some(
                        (willBeCheck) => {
                            return currentcostTypes.includes(willBeCheck);
                        });
            });
        }

    }
}
