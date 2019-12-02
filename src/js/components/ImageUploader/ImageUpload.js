import React from "react";
import { Button, Avatar, Grid } from "@material-ui/core";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      file: ""
    };
  }

  reader = new FileReader();

  getBase64(file, cb) {
    this.reader.readAsDataURL(file);
    this.reader.onload = () => {
      cb(this.reader.result);
    };
    this.reader.onerror = error => console.err("Error: ", error);
  }

  handleImageChange = e => {
    e.preventDefault();
    let file = e.target.files[0];

    this.getBase64(file, result => {
      this.setState({
        file: result
      });
       this.props.image(result)
    });
  };

  openFile = () => {
    this.textInput.current.click();
  };

  render() {
    return (
      <div>
        <input
          ref={this.textInput}
          type="file"
          onChange={this.handleImageChange}
          accept="image/x-png,image/gif,image/jpeg"
          style={{ display: "none" }}
        />

        <div>
          {!this.state.file && (
            <Button onClick={this.openFile} variant="contained">
              UPLOAD IMAGE
            </Button>
          )}
          <Grid xs={12} md={9} item>
            {this.state.file && (
              <Avatar
                alt="Remy Sharp"
                src={this.state.file}
                style={{
                  width: "130px",
                  height: "130px"
                }}
              />
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
