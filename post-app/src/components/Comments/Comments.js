import React from "react";



export default function Comments({comments}) {

  return (
    <div>
      <div className="uk-comments">
        {comments.map((comment) => (
          <>
            <article className="uk-comment">
              <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
                <div className="uk-width-expand">
                  <h4 className="uk-comment-title uk-margin-remove">
                    <a className="uk-link-reset" href="#">
                      {comment.name}
                    </a>
                  </h4>
                  <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li>
                      <a href="#">{comment.email}</a>
                    </li>
                  </ul>
                </div>
              </header>
              <div className="uk-comment-body">
                <p>{comment.body}</p>
              </div>
            </article>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}





// export default function Comments() {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://jsonplaceholder.typicode.com/posts/1?_embed=comments&_expand=user"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setComments(data.comments);
//       });
//   }, );

//   return (
//     <div>
//       <div className="uk-comments">
//         {comments.map((comment) => (
//           <>
//             <article className="uk-comment">
//               <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
//                 <div className="uk-width-expand">
//                   <h4 className="uk-comment-title uk-margin-remove">
//                     <a className="uk-link-reset" href="#">
//                       {comment.name}
//                     </a>
//                   </h4>
//                   <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
//                     <li>
//                       <a href="#">{comment.email}</a>
//                     </li>
//                   </ul>
//                 </div>
//               </header>
//               <div className="uk-comment-body">
//                 <p>{comment.body}</p>
//               </div>
//             </article>
//             <hr />
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }
