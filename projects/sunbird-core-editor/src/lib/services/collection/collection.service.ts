import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService extends DataService {
/**
   * base Url for action api
   */
 public override http!: HttpClient;
 constructor(http: HttpClient) {
   super(http);
 }

 public getHierarchy(identifier: string, option: any = { params: {} }): Observable<any> {
  const req = {
    url: `content/v3/hierarchy/${identifier}`,
    param: option.params
  };
  return this.get(req).pipe(map((response: any) => {
    return response;
  }));
}

}
