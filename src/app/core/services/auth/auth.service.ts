import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjVmNTllYTExZDFhNjU1YWM2OGQwNDUiLCJlbWFpbCI6ImR1bW15QGR1bW15LmNvbSIsImlhdCI6MTYwMDM0NDAyOCwiZXhwIjoxNjAwNDMwNDI4fQ.B-Kjb9shkeOrM9P4MQgEMBt_-MwB9csudpiB-ihwOY4"

  constructor() { }

  getToken(){
    return this.token
  }

}
