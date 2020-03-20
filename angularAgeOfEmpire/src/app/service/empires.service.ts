import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmpiresService {
    localUrl = '../../assets/age-of-empires-units.json';

    constructor(private http: HttpClient) {}


    getAllEmpires(): Observable<any> {
        return this.http.get<any>(this.localUrl);
    }
}

