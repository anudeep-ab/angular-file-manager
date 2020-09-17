import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { FileService } from './file.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss'],
})
export class FileManagerComponent implements OnInit {
  files: TreeNode[];
  selectedNode: TreeNode[];
  constructor(private file: FileService) {}

  ngOnInit(): void {
    this.file.getFiles().subscribe((files) => (this.files = files));
    this.file.node$.subscribe((node) => {
      if (node) {
        this.selectedNode = [];
        this.selectedNode.push(node);
      }
    });
  }
}
