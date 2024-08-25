import React, { useState } from "react";

const CreatePost = ({ addPost }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      title: event.target.form[0].value ? event.target.form[0].value : null,
      content: event.target.form[1].value ? event.target.form[1].value : null,
      image: image ? image : null,
    };
    console.log(post);
    addPost(post);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label fs-1">
          Post Title
        </label>
        <input
          type="text"
          className="form-control fs-4"
          id="exampleFormControlInput1"
          placeholder="Heading"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label fs-1"
        >
          Post Content
        </label>
        <textarea
          className="form-control fs-5"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write the post content here"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label fs-1">
          Default file input example
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {image && <img src={image} className="img-fluid image" alt="..." />}
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
