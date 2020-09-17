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

  onDelete(skillId: string){
    let typeDelete = this.types.find(sk => sk._id === skillId)
    if (confirm(`Are sure you want to delete the type: ${typeDelete.name}`)) {
      this.typeService
        .deleteType(typeDelete._id)
        .subscribe(res => {
          this.fetchTypes()
        })
    }
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
