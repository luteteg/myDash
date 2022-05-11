import { Injectable } from '@angular/core';

// @Injectable({
// providedIn: 'root'
// })
@Injectable()
export class DashBoardServiceService {

  getTeamMembersSummary():any[]
  {
    var TeamMembersSummary=[
      {Region:'East',TeamMembersCount:250,TemporarilyUnavailableMembers:41},
      {Region:'West',TeamMembersCount:17,TemporarilyUnavailableMembers:0},
      {Region:'South',TeamMembersCount:20,TemporarilyUnavailableMembers:1},
      {Region:'North',TeamMembersCount:28,TemporarilyUnavailableMembers:4},
    ];
    return TeamMembersSummary;

  }
}
