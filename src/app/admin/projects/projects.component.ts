import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectService } from 'src/app/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteProject: Project = new Project();
  deleteIndex: any = null;
  searchBy: string = 'ProjectName';
  searchText: string = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((response: Project[]) => {
      this.projects = response;
    });
  }
  onSaveClick() {
    this.projectService.insertProjects(this.newProject).subscribe(
      (response) => {
        //add project
        var p: Project = new Project();
        p.dateOfStart = response.dateOfStart;
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.teamSize = response.teamSize;
        this.projects.push(p);
        //clearing data
        this.projects.push(this.newProject);
        this.newProject.dateOfStart = null;
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.teamSize = null;
      },
      (error) => {}
    );
  }
  onEditClick(event: any, index: number) {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }
  onUpdate() {
    this.projectService.updateProject(this.editProject).subscribe(
      (response: Project) => {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] = p;

        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
      },
      () => {}
    );
  }
  onDeleteClick(event: any, index: number) {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
  }
  ondeleteConfirmClick() {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.teamSize = null;
        this.deleteProject.dateOfStart = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSearchClick() {
    this.projectService
      .searchProjects(this.searchBy, this.searchText)
      .subscribe(
        (response: Project[]) => {
          this.projects = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
