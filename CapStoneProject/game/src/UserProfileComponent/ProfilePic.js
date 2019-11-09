import React, {Component} from 'react';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'ml_default';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/artcart/upload';

export default class ProfilePic extends Component {
  constructor (props) {
  super(props);
  this.state = {
    uploadedFileCloudinaryUrl: ''
  };
}

onImageDrop(files) {
  this.setState({
    uploadedFile: files[0]
  });

  this.handleImageUpload(files[0]);
}

handleImageUpload(file) {
   let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('ml_default', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);

   upload.end((err, response) => {
     if (err) {
       console.error(err);
     }

     if (response.body.secure_url !== '') {
       this.setState({
         uploadedFileCloudinaryUrl: response.body.secure_url
       });
     }
   });
 }

 render() {
   return (
     <form>
       <div className="FileUpload">

       </div>

       <div>
         {this.state.uploadedFileCloudinaryUrl === '' ? null :
         <div>
           <p>{this.state.uploadedFile.name}</p>
           <img src={this.state.uploadedFileCloudinaryUrl} />
         </div>}
       </div>
     </form>
   )
 }
}
