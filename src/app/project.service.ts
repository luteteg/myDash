import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  //urlPrefix: string = "http://localhost:9091";
  constructor(private httpClient: HttpClient) {}
  getAllProjects(): Observable<Project[]> {
    return this.httpClient
      .get<Project[]>('http://localhost:9090/api/projects', {
        responseType: 'json',
      })
      .pipe(
        map((data: Project[]) => {
          for (let i = 0; i < data.length; i++) {
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        })
      );
    // return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects", { responseType: "json" });
  }
  insertProjects(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      'http://localhost:9090/api/projects',
      newProject,
      { responseType: 'json' }
    );
    // return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects", { responseType: "json" });
  }

  updateProject(existingProjec: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      'http://localhost:9090/api/projects',
      existingProjec,
      { responseType: 'json' }
    );
  }
  deleteProject(ProjectId: number): Observable<string> {
    return this.httpClient.delete<string>(
      'http://localhost:9090/api/projects?ProjectID=' + Project
    );
  }
  searchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      'http://localhost:9090/api/projects/search/' +
        searchBy +
        '/' +
        searchText,
      { responseType: 'json' }
    );
  }
}
