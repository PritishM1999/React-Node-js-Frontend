// import React, { useEffect, useState } from "react";
// import {Link} from "react-router-dom"
// // import "./Postview.css"
// import Card from "./card";
// import Header from "./component/header/header";


// const Showpost = ()=>{

//     const [serverResponse, setServerResponse] = useState(null)

//     const AllPost = async ()=>{
//         const show = await fetch("http://localhost:8080/all")
//         setServerResponse(await show.json())
//     }

//     useEffect(()=>{
//         AllPost()        
//     }, [])

//     if(serverResponse == null){
//         return <h2>Loading...</h2>
//     }

//     return <>

//         {/* NAVBAR SECTION */}

//             <Header/>

//         {/* POST SHOWING */}
//         <div>
//             {serverResponse.result?.map((post, idx)=>{
//                 return <Card prop={post} key={idx} />
//             })}
//         </div>
    
//     </>
// }
// export default Showpost;

// // import { useState, useEffect } from "react";

// // export const ShowPosts = () => {
// //     const [serverResponse, setServerResponse] = useState(null);

// //     const fetchAllPosts = async () => {
// //         const resp = await fetch('http://localhost:8080/all')
// //         setServerResponse(await resp.json())
// //     }

// //     useEffect(() => { 
// //         fetchAllPosts()
// //     }, [])

// //     if(serverResponse === null){
// //         return <h1>Loading ...</h1>
// //     }
// //     return (
// //         <div>
// //             {
// //                 serverResponse?.result?.map?.((post, index) => {
// //                     return <img src={`http://localhost:8080/images/${post.imagefile}`} key={index} />
// //                 })
// //                 // JSON.stringify(serverResponse) 
// //                 // return <img {}/>
// //                 // return (
// //                 //     <img></img>
// //                 // )
// //             }
// //         </div>
// //     )
// // }