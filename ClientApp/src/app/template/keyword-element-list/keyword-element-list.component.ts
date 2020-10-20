import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { KeywordElement } from '../shared/keyword-element.model';
import { TemplateService } from '../shared/template.service';

@Component({
  selector: 'app-keyword-element-list',
  templateUrl: './keyword-element-list.component.html',
  styleUrls: ['./keyword-element-list.component.css']
})
export class KeywordElementListComponent implements OnInit {

  constructor(public templateService: TemplateService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.templateService.loadLogicalOperatorDDL();
    this.templateService.loadComparisonTypeDDL();
    this.templateService.getIdentifyingElementList();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.templateService.keywordEelementFormData = {
      Id: 0,
      ValueStr:'',
      ValueNum:'',
      ComparisonType:'',
      LogicalOperator:'',
      TemplateKeywordId:0,
      ElementId:0,
      Weight:0,
    }
  }
  onSubmit(form: NgForm) {
    debugger;
    if (this.templateService.keywordEelementFormData.Id === null || this.templateService.keywordEelementFormData.Id === 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.templateService.saveKeywordElement().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Saved', detail: 'Saved Successfully' });
        debugger;
        this.resetForm(form);
        this.templateService.getKeywordElementList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.templateService.saveKeywordElement().subscribe(
      res => {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Updated Successfully' });
        this.resetForm(form);
        this.templateService.getKeywordElementList();
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

  populateForm(ke: KeywordElement) {
    debugger;
    this.templateService.keywordEelementFormData = Object.assign({}, ke);
    this.templateService.showHideKeywordModel = false;
    this.templateService.showHideTemplateModel = false;
    this.templateService.showHideKeywordEelementsModel = true;
    console.log(this.templateService.keywordFormData);
  }

  reloadKeywordElementTable(){
    debugger;
    this.templateService.getKeywordElementList();
  }

  addNewKeywordElement(){
    debugger;
    this.resetForm();
    this.templateService.showHideKeywordEelementsModel = true;
    this.templateService.showHideTemplateModel = false;
    this.templateService.showHideKeywordModel = false;
  }
}
