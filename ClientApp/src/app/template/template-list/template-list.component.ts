import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Template } from '../shared/template.model';
import { TemplateService } from '../shared/template.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {
  @ViewChild('dt') table: Table;
  templateList:Template[];
  constructor(public templateService: TemplateService, private messageService: MessageService) { }
  ngOnInit(): void {
    debugger;
    this.templateService.getAllTemplates();
    this.templateService.loading = false;
    this.templateList = this.templateService.templateList
    console.log(this.templateList);
  }

  loadKeywordListData(templateId){
    this.templateService.templateId = templateId;
    this.templateService.keywordId = 0;
    this.templateService.showHideKeywordEelementsModel = false;
    this.templateService.showHideKeywordModel = false;
    this.templateService.getKeywords();
    this.templateService.getKeywordElementList(); 
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.templateService.templateFormData = {
      Id: 0,
      TemplateName: '',
      DocIdentifier: '',
      SenderName: '',
      PictureFileName: '',
      FlgDeleted:null,
      UpdatedOnUtc:null,
    }
  }
  onSubmit(form: NgForm) {
    debugger;
    if (this.templateService.templateFormData.Id === null || this.templateService.templateFormData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.templateService.saveTemplate().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Saved', detail: 'Saved Successfully' });
        debugger;
        this.resetForm(form);
        this.templateService.getAllTemplates();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.templateService.saveTemplate().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Updated Successfully' });
        this.resetForm(form);
        this.templateService.getAllTemplates();
      },
      err => {
        console.log(err);
      }
    )
  }
  confirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  populateForm(pd: Template) {
    debugger;
    this.templateService.templateFormData = Object.assign({}, pd);

    this.templateService.showHideTemplateModel = true;
    this.templateService.showHideKeywordEelementsModel = false;
    this.templateService.showHideKeywordModel = false;
    console.log(this.templateService.templateFormData);
  }

  reloadTemplateTable(){
    debugger;
    this.templateService.getAllTemplates();
    this.templateList = this.templateService.templateList;
  }

  addNewTemplate(){
    debugger;
    this.resetForm();
    this.templateService.showHideTemplateModel = true;
  }
}
