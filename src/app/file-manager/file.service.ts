import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private readonly path = 'assets/files.json';
  private _node: BehaviorSubject<any>;
  node$: Observable<any>;
  constructor(private _http: HttpClient) {
    this._node = new BehaviorSubject<any>(null);
    this.node$ = this._node.asObservable();
  }

  getFiles() {
    return this._http.get<TreeNode>(this.path).pipe(map((files) => files.data));
  }

  broadcastNode(node: TreeNode) {
    this._node.next(node);
  }
}
