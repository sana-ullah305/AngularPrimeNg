import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TemplateService } from '../shared/template.service';

@Component({
  selector: 'app-keyword-element-list',
  templateUrl: './keyword-element-list.component.html',
  styleUrls: ['./keyword-element-list.component.css']
})
export class KeywordElementListComponent implements OnInit {

  constructor(public templateService: TemplateService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
