import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gh-portfolio';
  username = '';

  constructor(private githubService: GithubService, private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.username = this.githubService.username;
    this.titleService.setTitle('GitHub portfolio app');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s GitHub portfolio`
      },
      {
        name: 'author',
        content: this.username
      }
    ]);
  }
}
