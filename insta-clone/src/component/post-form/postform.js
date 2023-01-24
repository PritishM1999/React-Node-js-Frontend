// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/header";
import "./post-form.css";
import { useState } from "react";

const Post = () => {
    const [name, setAuther] = useState('');
    const [location, setLocation] = useState('');
    const [imagefile, setImageFile] = useState('');
    const [description, setDescription] = useState('');

    const uploadPost = () => {
      const formData = new FormData() // formData is like Map takes the data in key value data

      formData.append("name", name)
      formData.append("location", location)
      formData.append("imagefile", imagefile)
      formData.append("description", description)

      // console.log(formData);
      formData.forEach((val, key) => {
        console.log(val, key);
      })

      fetch("http://localhost:8080/api", {
            method: 'POST',
            body: formData
      })
      // files: [], body: {}


      // Test API
      // fetch("http://localhost:8080/api", {
      //     method: 'POST',
      //     headers:{
      //         'Content-Type': 'application/json',
      //         'Accept': 'application/json',
      //     },
      //     body: JSON.stringify({
      //         name: "Pritish Mendhekar",
      //         password: "myPass@123",
      //         file: imagefile
              
      //     })
      //   })
    }

    return (
        <>
        <Header/>
        <section className="post-form">
            <div>
              <form>
                <div>
                  <input type="file" id="myFile" accept="image/*"
                                      onChange={(e) => setImageFile(e.target.files[0])} />
                </div>
                <div>
                  <div className="R-L">
                    <input type="text" id="author" placeholder="Author" value={name} 
                                       onChange={(e) => setAuther(e.target.value)} />
                  </div>
                  <div className="R-L">
                    <input type="text" id="location" placeholder="Location" value={location} 
                                        onChange={(e) => setLocation(e.target.value)} />
                  </div>
                </div>
                <div>
                  <input type="text" id="description" placeholder="Description" value={description} 
                                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <Link to={"/post-view"}>
                <input type="submit" id="newpost" value="Post" alt="view-post" onClick={uploadPost}/>
                </Link>
              </form>
            </div>
          </section>
          <div className="warn">
            <h3>Please reload/refresh the page after posting new posts...</h3>
          </div>
        </>
    )
}

export default Post;