import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TemplateService } from '../shared/template.service';

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.css']
})
export class KeywordListComponent implements OnInit {

  constructor(public templateService: TemplateService, private messageService: MessageService) { }

  ngOnInit(): void {
  }
  loadKeywordElementTableData(keywordId){
    this.templateService.keywordId = keywordId;
    this.templateService.getKeywordElementList();
  }
}
