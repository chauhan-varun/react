import { useState } from "react";

function FeedPost(){
  const [posts, setPosts] = useState([]);

  const postComponent = posts.map(post => <PostComponent
  image={post.image}
  title={post.title}
  discription={post.discription}
  subtitle={post.subtitle}
  />)
  console.log(postComponent);
  
  
  function addPost(){
    setPosts([...posts, {
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHUdcUe__gPFA/profile-displayphoto-shrink_100_100/B4DZTMBBamGkAU-/0/1738589627833?e=1744848000&v=beta&t=OpsVPC_rbGS77MAl0eXuecESWXyFLp1XV8lo1z6G6zI",
      title: "Varun Chauhan",
      subtitle: "10M followers",
      discription: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }
  return (<>
    <button onClick={addPost} >new Post</button>
    <div>{postComponent}</div>
  </>)
}

function PostComponent({title, subtitle, image, discription}){
  return (
    <div style={{backgroundColor: "ghostwhite" , borderRadius: 10, margin: 100, padding: 10}}>
      <div style={{display: "flex"}}>
        <img width={35} height={35} style={{borderRadius: 20}} src={image} />
        <div>
          <b>{title}</b>
          <div>{subtitle}</div>
        </div>
      </div>
      <p>{discription}</p>
    </div>
  )
}

export default FeedPost
