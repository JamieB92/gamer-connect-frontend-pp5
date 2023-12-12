import React, { Component } from 'react'
import CreatePostWithVideoForm from './CreatePostWithVideoForm'
import CreatePostWithImageForm from './CreatePostWithImageForm'
import styles from "../styles/CreatePostEditForm.module.css"
import btnStyles from "../styles/Button.module.css"

class PostForm extends Component{ 

    // Displats either the create post with an image form or post with a video

    constructor(props) {
        super(props);
        this.state = {
            isForm: <CreatePostWithImageForm />,
            buttonText: "Click To Upload a Video",
            pageHeader: "Upload A Image"
        };
    } 
// handles the switch to the video form
    handleChangeFormToVideo() {
        this.setState({
            isForm: <CreatePostWithVideoForm />,
            buttonText: "Video Selected",
            pageHeader: "Upload A Video Clip"
        })
    }

    render() {
        return (
            <div>
                <div className={styles.formHeaderContainer}>
                    <h2 className={styles.formHeader}>{this.state.pageHeader}</h2>
                </div>
                {this.state.isForm}
                <div className={styles.formHeaderContainer}>
                    <button className={btnStyles.btnChange} onClick={() => this.handleChangeFormToVideo()} >{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default PostForm

