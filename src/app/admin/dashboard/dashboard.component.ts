import { Component, OnInit } from '@angular/core';
import { DashBoardServiceService } from 'src/app/dash-board-service.service';
//import { timeStamp } from 'console';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 

// ngOnInit initialise the properties of the component
  Designation:string=" " ;
  Username:string=" ";
  NoOfTeamMembers:number=0;
  TotalCostofAllProjects:number=0;
  PendingTask:number=0;
  UpComingProjects:number=0;
  currentExpenses:number=0;
  AvailableFunds:number=0;
  Today: Date = new Date() ;

    Client:string[]=[];
    Projects:string[]=[];
    Years: number[]=[];
    TeamMembersSummary:any=[];
    TeamMembers:any=[];
    constructor(private dashboard: DashBoardServiceService) {
    
    }
  ngOnInit() {

    this.Designation="Team Leader";
    this.Username="Gloire Lutete";
    this.NoOfTeamMembers=45;
    this.TotalCostofAllProjects=5846;
    this.PendingTask=45;
    this.UpComingProjects=0.2;
    this.currentExpenses=50;
    this.AvailableFunds=2654;
    this.Today=new Date();
    this.Client=[
      "ABC Infotech",
      "Infosys",
      "GhI you work here",
      "yahoo"
    ];
    this.Projects=[
      "Project C",
      "Project E",
      "Project D",
      "Project A",
      "Project B",

    ];
    // this.Years=[
    //   2018,
    //   2019,
    //   2020,
    //   2021,
    //   2022,
    //   1992 you can also do it this way
    // ]

    for(var i=2022; i>=2015;i--){
      this.Years.push(i);
    }
    // this.TeamMembersSummary=[
    //   {Region:'East',TeamMembersCount:250,TemporarilyUnavailableMembers:41},
    //   {Region:'West',TeamMembersCount:17,TemporarilyUnavailableMembers:0},
    //   {Region:'South',TeamMembersCount:20,TemporarilyUnavailableMembers:1},
    //   {Region:'North',TeamMembersCount:28,TemporarilyUnavailableMembers:4},
    // ];
    this.TeamMembersSummary=this.dashboard.getTeamMembersSummary();
    this.TeamMembers=[
      {
         Region:'East',Members:[
      {ID:1,Name:'Gloire',Status:'Besy'},
      {ID:2,Name:'Lutete',Status:'Besy'},
      {ID:3,Name:'Merdy',Status:'Unavailable'},
      {ID:4,Name:'ngai',Status:'Available'}
    ]
  },
    { 
      Region:'West',Members:[
      {ID:1,Name:'jack',Status:'Besy'},
      {ID:2,Name:'Lutete',Status:'Available'},
      {ID:3,Name:'Merdy',Status:'Unavailable'},
      {ID:4,Name:'ngai',Status:'Available'}
    ]
  },
    { 
      Region:'North',Members:[
      {ID:1,Name:'Toao',Status:'Available'},
      {ID:2,Name:'Lutete',Status:'Available'},
      {ID:3,Name:'Kimpep',Status:'Unavailable'},
      {ID:4,Name:'ngai',Status:'Besy'}
    ]},
    { 
      Region:'south',Members:[
      {ID:1,Name:'Koat',Status:'Available'},
      {ID:2,Name:'Lutete',Status:'Besy'},
      {ID:3,Name:'Kiop',Status:'Unavailable'},
      {ID:4,Name:'ngai',Status:'Besy'}
    ]
  }
      
    ];
  }
  onProjectChange($event:any){
    if($event.target.innerHTML=== "Project A"){
      this.UpComingProjects=84;
      this.currentExpenses=50;
      this.AvailableFunds=2654;
    }
    else if ($event.target.innerHTML=== "Project B"){
      this.UpComingProjects=54;
      this.currentExpenses=520;
      this.AvailableFunds=894;
    }
    else if ($event.target.innerHTML=== "Project C"){
      this.UpComingProjects=47;
      this.currentExpenses=720;
      this.AvailableFunds=94;
    }
    else if ($event.target.innerHTML=== "Project D"){
      this.UpComingProjects=89;
      this.currentExpenses=1526;
      this.AvailableFunds=985;
    }
    else if ($event.target.innerHTML=== "Project E"){
      this.UpComingProjects=20;
      this.currentExpenses=150;
      this.AvailableFunds=945;
    }
  }
}
