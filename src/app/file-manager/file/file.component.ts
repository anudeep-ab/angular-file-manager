import { Component, OnInit, Input } from '@angular/core';
import { FileService } from '../file.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @Input() files: TreeNode[];
  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  nodeSelect(event) {
    this.fileService.broadcastNode(event.node);
  }
}
