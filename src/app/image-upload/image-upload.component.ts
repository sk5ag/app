import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilesHandlerService } from 'src/app/shared/files-handler.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  fileselected: any = null ;
  filename: string = '';
  filetype: string = '';


  constructor(
    public dialog: MatDialog,
    public storage: FilesHandlerService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

    console.log('file:', event.target.files[0] );
    this.fileselected = event.target.files[0];
    this.filename = this.fileselected.name;
    this.filetype = this.fileselected.type;
    console.log('Selected file: ', this.fileselected.name);
    // this.uploadFile();

}

async uploadFile(){
  await this.storage.uploadFile(this.fileselected, this.filename, this.filetype);
  this.dialog.closeAll()
}

}
