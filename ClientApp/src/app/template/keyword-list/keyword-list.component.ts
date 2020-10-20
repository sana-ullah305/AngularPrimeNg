import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Keyword } from '../shared/keyword.model';
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
    this.templateService.showHideKeywordEelementsModel = false;
    this.templateService.showHideTemplateModel = false;
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.templateService.keywordFormData = {
      Id: 0,
      Keyword:'', SchemaId:'',
      AwsBlock:'', TemplateId:0,
    }
  }
  onSubmit(form: NgForm) {
    debugger;
    if (this.templateService.keywordFormData.Id === null || this.templateService.keywordFormData.Id)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.templateService.saveKeyword().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Saved', detail: 'Saved Successfully' });
        debugger;
        this.resetForm(form);
        this.templateService.getKeywords();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.templateService.saveKeyword().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Updated Successfully' });
        this.resetForm(form);
        this.templateService.getKeywords();
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

  populateForm(pw: Keyword) {
    debugger;
    this.templateService.keywordFormData = Object.assign({}, pw);
    this.templateService.showHideKeywordModel = true;
    this.templateService.showHideTemplateModel = false;
    this.templateService.showHideKeywordEelementsModel = false;
    console.log(this.templateService.keywordFormData);
  }

  reloadKeywordTable(){
    debugger;
    this.templateService.getKeywords();
  }

  addNewKeyword(){
    this.resetForm();
    this.templateService.showHideTemplateModel = false;
    this.templateService.showHideKeywordEelementsModel = false;
    this.templateService.showHideKeywordModel = true;
  }
}
