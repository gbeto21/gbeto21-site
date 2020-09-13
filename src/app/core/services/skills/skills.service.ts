import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Subscription } from "rxjs";

const GET_SKILLS = gql`query{
  skills{
    _id
    name
    description
    percent
  }
}`

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills = [
    { id: '1', name: 'JavaScript', description: 'An common language.', percent: 25 },
    { id: '2', name: 'Flask', description: 'An popular Framework.', percent: 15 }
  ]
  private querySubscription: Subscription

  constructor(private apollo: Apollo) { }

  getSkills() {

    this.querySubscription = this.apollo.query<any>({
      query: GET_SKILLS
    })
      //.valueChanges
      .subscribe(({ data, loading }) => {

        this.skills = data.skills

        console.log('This skills');
        console.log(this.skills);
        return this.skills

      })

    return this.skills
  }

  getSkill(id: string) {

    return this.skills.find(sk => sk.id === id)
  }

}
