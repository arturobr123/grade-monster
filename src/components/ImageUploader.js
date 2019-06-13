import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ImageUploader extends Component {

  render() {
    return (
      <div>
        <FileUploader
          accept="image/*"
          name="avatar"
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadError={this.props.handleUploadError}
          onUploadSuccess={this.props.handleUploadSuccess}
          onChange={this.props.handleChangeImage}
          ref={instance => { this.props.fileUploader = instance; } }
        />
      </div>
    );
  }
}

export default ImageUploader;
