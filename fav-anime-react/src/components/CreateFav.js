import React, { Component, Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});
export default withStyles(styles)(
  class CreateFav extends Component {
    state = {
      open: false,
      newFavAnime: {
        title: "",
        image_url: "",
        synopsis: "",
        score: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = title => ({ target: { value } }) => {
      this.setState({
        newFavAnime: {
          ...this.state.newFavAnime,
          [title]: value
        }
      });
      console.log(this.state.newFavAnime);
    };

    handleSubmit = () => {
      const { newFavAnime } = this.state;
      this.props.onCreate(newFavAnime);
      console.log("attempting to create function");
    };
    render() {
      console.log(this.props);
      const {
          open,
          newFavAnime: { title, image_url, synopsis, score }
        } = this.state,
        { classes } = this.props;
      return (
        <Fragment>
          <Fab onClick={this.handleToggle} mini>
            <AddIcon />
          </Fab>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Add a new Fav Anime
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                  multiline
                  className={classes.FormControl}
                />
                <br />
                <TextField
                  label="Image_url"
                  value={image_url}
                  onChange={this.handleChange("image_url")}
                  margin="normal"
                  multiline
                  className={classes.FormControl}
                />
                <br />
                <TextField
                  label="Description"
                  value={synopsis}
                  onChange={this.handleChange("synopsis")}
                  multiline
                  rows="4"
                  margin="normal"
                  variant="outlined"
                  className={classes.FormControl}
                />
                <br />
                <TextField
                  label="Score from 0-10"
                  value={score}
                  onChange={this.handleChange("score")}
                  margin="normal"
                  multiline
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                onClick={this.handleSubmit}
                variant="contained"
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
