import React from "react";
const PostDetails = props => {
  let post = props.post.filter((post, index) => {
    return post.id == props.match.params.id;
  });

  console.log('props',props);
  return (
    
    <div>
      {post.map((post, index) => {
        return (
          <div key={post.id} className="main_two2">


          {
            /* first div start */}
          <div className="owner">
              
                  
                   {/* <img className="owner-pic img-responsive" src="../images/ali.jpg" alt="techer1"/> */}
               <div className="owner-pic"></div>
               <p className="teacher">Teacher</p>
            <p className=" author"><strong>{post.author.username}</strong></p>
            </div>

          {/* 2nd Div start */}
            <div className="owner2">
              <div>
                   {/* <div className="owner_pic2">{post.author.img}</div> */}
                   <div className="set_icon fa fa-bookmark">
                   
                   </div>
               </div>
               <p className="teacher2">{post.catagory}</p>
              <p className="author2"><strong>{post.media}</strong></p>
         
               {/* <p className="teacher">Teacher</p>
            <p className=" author"><strong>{post.author.username}</strong></p> */}
            </div>


         



           <img className="img_set" src={`${post.post.img}`} alt=" post image" />

            <h1 className="heading1">{post.post.title}</h1>
            <h6 className="desc_heading">{post.post.descriptionHeading}</h6>
            <h3 className="heading_3">{post.post.desc}</h3>
            <h5 className="detail_heading">Detail</h5>
            <h4 className="details_para">{post.post.details}</h4>

            <div className="white"></div>
          <br/><br/><br/><br/><br/><br/>

            {/* Comment Div Start  */}
            <form action="">
          <div className="cmnt">
            <h1 className="cmnt-heading">ADD YOURS COMMENTS</h1>
            <input className="input1" placeholder="Comment" type="text" name="Name" id=""/>
            {/* <input className="input2" placeholder="Email" type="email" name="email" id=""/> */}
            {/* <textarea className="input3" placeholder="Message...." name="" id="" cols="30" rows="10"></textarea> */}
          <button className="btn1" type="submit">SUBMIT</button>
          
          </div>
          </form>

          <div className="cmnt2">
            <h1 className="cmnt-heading2">{post.post.comments.length} Comments</h1>
          
            {post.post.comments.map((comment, index) => {
              return (
                <div className="cmnt-inner" key={index} >
                  <p className="comment">{comment.comment}</p>
                <p className="post_date">{comment.author.postAt}</p>
                  <div className="cmnt_img1">
                    <img className="image"  src={comment.author.img} alt=""/>
                  </div>
                  <p className="name1"><strong>{comment.author.username}</strong></p>

                <ul className="ul2">
                  <li className="fa fa-thumbs-up li1">32</li>
                  <li className="li2 fa fa-thumbs-down">2</li>
                  <li className="fa fa-reply li3"></li>
                </ul>


                </div>

                
              );
            })}
            {/* 2nd dev start */}
            {post.post.comments.map((comment, index) => {
              return (
                <div className="cmnt-inner2" key={index} >
                  <p className="comment">{comment.comment}</p>
                  <p className="post_date">{comment.author.postAt}</p>
                  <div className="cmnt_img1">
                    <img className="image"  src={comment.author.img} alt=""/>
                  </div>
                  <p className="name1"><strong>{comment.author.username}</strong></p>

                <ul className="ul2">
                  <li className="fa fa-thumbs-up li1">32</li>
                  <li className="li2 fa fa-thumbs-down">2</li>
                  <li className="fa fa-reply li3"></li>
                </ul>


                </div>

                
              );
            })}
            {/* Third Div */}

            {post.post.comments.map((comment, index) => {
              return (
                <div className="cmnt-inner3" key={index} >
                  <p className="comment">{comment.comment}</p>
                  <p className="post_date">{comment.author.postAt}</p>
                  <div className="cmnt_img1">
                    <img className="image"  src={comment.author.img} alt=""/>
                  </div>
                  <p className="name1"><strong>{comment.author.username}</strong></p>

                <ul className="ul2">
                  <li className="fa fa-thumbs-up li1">32</li>
                  <li className="li2 fa fa-thumbs-down">2</li>
                  <li className="fa fa-reply li3">Reply</li>
                </ul>


                </div>

                
              );
            })}
             
            
            
          
          </div>
           


            {/* <p className="updated_date"><b>{post.updatedAt}</b></p> */}
            {/* <div className="likes"> 
            <span>Likes {post.post.likes}</span>

            </div>
             */}
            
            {/* <p>share</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default PostDetails;
