import { Component, OnInit } from '@angular/core';
import { Postagem } from './postagem.type';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  public postagens: Array<Postagem> = [];
  constructor() {}

  ngOnInit(): void {}
}
