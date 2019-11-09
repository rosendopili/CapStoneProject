import React, {Component} from 'react';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/artcart/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'artcart';

export default class ProfilePic extends Component {
  state = {
    selectedFile: null
  }

fileSelectedHandler = e => {
  this.setState({
    selectedFile: e.target.files[0]
  })
}

fileUploadHandler = () =>{
  const fd = new FormData();
  fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
  fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  fetch('https://api.cloudinary.com/v1_1/artcart/image/upload', {
     method: 'POST',
     body: fd,
   })
    .then(res=> {
      console.log(res);
    })
}

 render() {
   return (

       <div>
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}> Upload </button>
       </div>
   )
 }
}
