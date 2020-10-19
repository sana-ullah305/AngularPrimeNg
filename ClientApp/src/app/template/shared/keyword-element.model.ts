export class KeywordElement {
    Id:number;
    ValueStr:string;
    ValueNum?:string;
    ComparisonType:string;
    LogicalOperator:string;
    TemplateKeywordId?:number;
    ElementId?:number;
    Weight:number;
    // [MaxLength(100)]
    //     public string ValueStr { get; set; }
    //     public double? ValueNum { get; set; }
    //     [MaxLength(20)]
    //     public string ComparisonType { get; set; } // equals, contains, is_any_number, greater_than, less_then
    //     public string LogicalOperator { get; set; } // AND , OR
    //     public float Weight { get; set; }
    //     public int? ElementId { get; set; }
    //     public int? TemplateKeywordId { get; set; }
}