import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-file-manager-table',
  templateUrl: './file-manager-table.component.html',
  styleUrls: ['./file-manager-table.component.scss'],
})
export class FileManagerTableComponent implements OnInit {
  @Input() files: TreeNode[];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes && changes.files.currentValue)
      this.files = changes.files.currentValue;
  }
}
