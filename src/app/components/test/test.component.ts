import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    users$: Observable<any>;
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.users$ = this.http.get('/api/users');
    }

}
