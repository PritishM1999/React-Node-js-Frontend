import { useEffect, useState } from 'react';
import React from 'react';
import Card from '../../card';
import Header from '../header/header'


const PostView = () => {
    const [serverResponse, setServerResponse] = useState(null)

    const AllPost = async ()=>{
        const show = await fetch("http://localhost:8080/all")
        setServerResponse(await show.json())
    }


    useEffect(()=>{
        AllPost()
    }, [])

    if(serverResponse == null){
        return <h2>Loading...</h2>
    }

    return (
        <>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <div className='post-container'>
            {posts.map((post, i)=>{
                    return(
                        <Card post={post} key={i}/>
                    )
                })}
            </div> */}

            <div className='post-container'>
                {serverResponse.result?.map((post, i)=>{
                    return <Card prop={post} key={i} />
                })}
            </div>
        </>
    )
}

export default PostView;

// ------------------------------------------------------------------


// import { useEffect, useState } from 'react';
// import React from 'react';
// import Card from '../../card';
// import Header from '../header/header'
// const PostView = () => {
//     const [posts, setPost] = useState([]);
//     useEffect(()=>{
//         fetch("http://localhost:3004/user").then((res)=>res.json()).then((data)=>{
//             setPost(data);

//         }).catch((err)=>{
//             if(err){
//                 console.log(err);
//             }
//         })
//  }, []);
//     return (
//         <>
//             <Header/>
//             <div className='post-container'>
//             {posts.map((post, i)=>{
//                     return(
//                         <Card post={post} key={i}/>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default PostView;


