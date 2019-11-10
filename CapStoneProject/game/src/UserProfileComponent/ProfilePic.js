import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/artcart/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'sqcfe6ig';

const ProfileStyles = styled.div`

  .placeHolder {
    height: 200px;
    width: 200px;
    object-fit: contain;
  }
`;

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
  fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
  fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-wwww-form-urlencoded'
      },
      data: fd
    }).then(function(res) {
      console.log(res);
    })

};

 render() {
   return (

     <ProfileStyles>
       <div>
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}> Upload </button>
        <img
        className="placeHolder"
        alt="profile"
        onChange={this.state.selectedFile}></img>
       </div>
      </ProfileStyles>
   )
 }
}
