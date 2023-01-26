import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {
  from_filter : string = "NONE";
  to_filter : string = "NONE";
  officialFilter : boolean;
  @Output() onApplyFilter: EventEmitter<any> = new EventEmitter()
  @Output() onReset: EventEmitter<any> = new EventEmitter()
  // @Input() reset:any;
  // @Output() public from_filterChange = new EventEmitter<string>();
  // @Output() public to_filterChange= new EventEmitter<string>();

  constructor() { }

  submit(){
    this.onApplyFilter.emit([this.from_filter,this.to_filter,this.officialFilter]);
  }

  reset(){
    // console.log("reset in date-fliter")
    this.onReset.emit();
  }


  ngOnInit(): void {
  }

}
