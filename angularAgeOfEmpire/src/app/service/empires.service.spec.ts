import {TestBed} from '@angular/core/testing';
import {EmpiresService} from './empires.service';

describe('EmpiresService', () => {
    let service: EmpiresService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmpiresService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
