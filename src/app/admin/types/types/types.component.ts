import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/core/services/types/types.service';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types = []
  isLoading = false
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private typeService: TypesService) { }

  ngOnInit(): void {
    this.fetchTypes()
  }

  onDelete(event: Event){

  }

  private fetchTypes() {
    this.typeService
      .getTypes()
      .subscribe(response => {
        this.types = response.data.types
        TypesService.types = this.types
      })
  }

}
