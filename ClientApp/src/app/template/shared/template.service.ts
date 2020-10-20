import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IdentifyingElement } from './identifying-element.model';
import { KeywordElement } from './keyword-element.model';
import { Keyword } from './keyword.model';
import { Template } from './template.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService implements ITemplateService {
  // Template CRUD Functionality
  showHideTemplateModel:boolean = false;
  templateList:Template[];
  templateFormData: Template = {
    Id:0,
    TemplateName:null, DocIdentifier:null, SenderName:null, PictureFileName:null,
    FlgDeleted:null,UpdatedOnUtc:null
  };
  // Keyword CRUD Functionlity
  showHideKeywordModel:boolean = false;
  keywordList:Keyword[];
  templateId:number;
  keywordFormData: Keyword = {
    Id:0, Keyword:null, SchemaId:null,
    AwsBlock:null, TemplateId:null,
  };

  // Keyword Element CRUD Functionality
  showHideKeywordEelementsModel:boolean = false;
  keywordId:number;
  keywordElementList:KeywordElement[];
  keywordEelementFormData: KeywordElement = {
    Id:0,
    ValueStr:null,
    ValueNum:null,
    ComparisonType:null,
    LogicalOperator:null,
    TemplateKeywordId:null,
    ElementId:null,
    Weight:0,
  }

  /// Identifying Element List
  identifyingElementList: IdentifyingElement[];
  selectedIdentifying: IdentifyingElement;

  comparisonTypeList:IComparisonType[];
  selectedComparisonType:IComparisonType;

  logicalOperatorList:ILogicalOperator[];
  selectedLogicalOperator:ILogicalOperator;
  loading:boolean = true;
  

  ///Other Controls For Keyword Elements
  dialogPosition: 'top';

  constructor(private http: HttpClient) { }

  ///Templates
  getAllTemplates() {
    this.http.get<Template[]>(environment.baseURL + 'Template/GetTemplateList').toPromise().then(res => this.templateList = res);
    debugger;
    // console.log(this.templateList);
  }
  saveTemplate() {
    return this.http.post(environment.baseURL +'Template/SaveTemplate', this.templateFormData);
  }

  // Keyword
  getKeywords() {
    return this.http.get<Keyword[]>(environment.baseURL + 'Template/GetTemplateKeywordList?templateId=' + this.templateId).toPromise().then(res => this.keywordList = res);
  }
  saveKeyword() {
    return this.http.post('Template/SaveTemplateKeyword', this.keywordFormData);
  }

  // Keyword Element
  getKeywordElementList() {
    return this.http.get<KeywordElement[]>(environment.baseURL + 'Template/GetKeywordElementList?templateKeywordId=' + this.keywordId).toPromise().then(res => this.keywordElementList = res);
  }
  saveKeywordElement() {
    return this.http.post(environment.baseURL + 'Template/SaveKeywordElement', this.keywordEelementFormData);
  }
 
//DDL Call for Identification Element
  getIdentifyingElementList() {
    return this.http.get<IdentifyingElement[]>('Template/GetIdentifyingElementList?').toPromise().then(res => this.identifyingElementList = res);
  }


  loadComparisonTypeDDL(){
    // equals, contains, is_any_number, greater_than, less_then
  this.comparisonTypeList = [
    {ComText: 'Select Comparison Type', ComValue: null},
    {ComText: 'equals', ComValue: 'equals'},
    {ComText: 'contains', ComValue: 'contains'},
    {ComText: 'is_any_number', ComValue: 'is_any_number'},
    {ComText: 'greater_than', ComValue: 'greater_than'},
    {ComText: 'less_then', ComValue: 'less_then'}
];
console.log(this.comparisonTypeList);
}
loadLogicalOperatorDDL(){
// AND , OR
this.logicalOperatorList = [
{LogText: 'Select Logical Type', LogValue: null},
{LogText: 'AND', LogValue: 'AND'},
{LogText: 'OR', LogValue: 'OR'},
];
}
}

interface ITemplateService{
  getAllTemplates();
  saveTemplate();

  getKeywords();
  saveKeyword();

  getKeywordElementList();
  saveKeywordElement();

  //DDL Call for Identification Element
  getIdentifyingElementList();
  
  loadLogicalOperatorDDL();
  loadComparisonTypeDDL();
}

interface ILogicalOperator{
  LogValue:string;
  LogText:string;
}
interface IComparisonType{

  ComValue: string;
  ComText: string;
}