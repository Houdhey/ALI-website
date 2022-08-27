import { Component, OnInit } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public fireStorage: Storage) {}

  ngOnInit(): void {}

  file: any;

  fileChanged(event) {
    this.file = event.target!.files[0];
    /*    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    };
    fileReader.readAsDataURL(this.file);*/
  }

  uploadFile() {
    console.log('this file? ', this.file.name);
    const storageRef = ref(this.fireStorage, this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '%done');
      },
      (error) => {
        console.log('Firebase Storage error ', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at ' + downloadURL);
        });
      }
    );
  }
}
