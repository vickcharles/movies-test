import React from "react";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      cb(reader.result);
    };
    reader.onerror = (error) => console.err("Error: ", error);
  }

  handleImageChange = e => {
    e.preventDefault();
    let file = e.target.files[0];

    this.getBase64(file, result => {
      this.setState({
        file: result
      });
      console.log(result);
    });
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="uploader" />;
    }

    return (
      <div>
        <input type="file" onChange={this.handleImageChange} />
        {$imagePreview}
      </div>
    );
  }
}

export default ImageUpload;
