import { Injectable } from '@angular/core';
import { Storage } from 'aws-amplify';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class FilesHandlerService {

  authUserId = '';

  constructor(
    private auth: AuthService
  ) {
    this.getAuthenticatedUser();
   }

  getFile(){
    Storage.get('NewProfileImage/6596b7df-bfa7-4e93-8131-aec4e4baa6b5.jpg', { level: 'private' })
    .then ( (result) => { 
      console.log('get file method returned: ',result); 
   
    })
    .catch( (err) => { 
      console.log(err);
    });
  }
  listStorages(){
    Storage.list('/', { level: 'public' })
      .then ( (result) => { 
        console.log(result); 
      })
      .catch( (err) => { 
        console.log(err);
      });
  }

  uploadFile(file: any, filename:string, filetype:string){

    console.log('ALAN ',filename.split('.').pop());

    Storage.put('NewProfileImage/'+this.authUserId + '.' + filename.split('.').pop(), file,  { level: 'private' })
    .then ( (result) => { 
      console.log(result); 
    })
    .catch( (err) => { 
      console.log(err);
    });
  }

  async getAuthenticatedUser() {

    await this.auth.whichUser().then(event => {
      this.authUserId = event.attributes.sub;
    }).catch(err => {
      console.log(err);
    });
  }
}


