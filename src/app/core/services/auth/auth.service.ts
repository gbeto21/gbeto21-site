import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjVmNTllYTExZDFhNjU1YWM2OGQwNDUiLCJlbWFpbCI6ImR1bW15QGR1bW15LmNvbSIsImlhdCI6MTYwMDE3MzA1NywiZXhwIjoxNjAwMjU5NDU3fQ.-cVYDsufbLRF2O8beICP8t4PF2oRpew7eEiDqTG9JzE"

  constructor() { }

  getToken(){
    return this.token
  }

}
