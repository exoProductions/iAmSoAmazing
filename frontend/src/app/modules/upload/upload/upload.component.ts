import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  fileName = '';
  file_data: any = ''

  uploadIcon = faUpload;

  fileUploadWorked: boolean = false;
  fileUploaded: boolean = false;

  constructor(private http: HttpClient, private apiService: ApiService, private navigationService: NavigationService,private router:Router) {
  }

  ngOnInit(): void {
    this.navigationService.currentPage = this.navigationService.pages[1];
  }

  goHome():void{
    this.router.navigate(["./home"]);
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      //get file information such as name, size and type
      console.log('finfo', file.name, file.size, file.type);
      //max file size is 4 mb
      if ((file.size / 1048576) <= 10) {
        let formData = new FormData();
        let info = { id: 2, name: 'raja' }
        formData.append('file', file, file.name);
        formData.append('id', '2');
        formData.append('tz', new Date().toISOString())
        formData.append('update', '2')
        formData.append('info', JSON.stringify(info))
        this.file_data = formData


        this.apiService.uploadFile(this.file_data).subscribe((path: string) => {
          console.log("uploaded: ", path);
          this.fileUploadWorked = path.length>0;
          this.navigationService.fileName=path;

          this.fileUploaded = true;
        });
      } else {
        //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
      }
    }
  }



}
