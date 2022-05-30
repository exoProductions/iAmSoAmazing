import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpClient: HttpClient) { }

  uploadFile(fileData:any): Observable<string> {
    console.log("Message Sent!", fileData);
    return this.httpClient.post<string>(`${this.getServer()}/api/iAmSoAwesome/uploadFile.php`, fileData);
  }

  getServer(): string {
    return "https://www.exo-productions.ch";
  }
}
