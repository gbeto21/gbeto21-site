import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjVmNTllYTExZDFhNjU1YWM2OGQwNDUiLCJlbWFpbCI6ImR1bW15QGR1bW15LmNvbSIsImlhdCI6MTYwMDA4NTMxNiwiZXhwIjoxNjAwMTcxNzE2fQ.xIW7WknZprFJpJG_KcRtBmPUHpIME2zWwx-r4zUOzoc"

  constructor() { }

  getToken(){
    return this.token
  }

}
