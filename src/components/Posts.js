import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Posts() {
    // const [posts, setPosts] = useState();
    const posts = [
      {
        id: 1,
        text: 'Hello, world!',
        timestamp: 'a minute ago',
        author: {
          username: 'susan',
        },
      },
      {
        id: 2,
        text: 'Second post',
        timestamp: 'an hour ago',
        author: {
          username: 'john',
        },
      },
    ];
  
    return (
      <>
        {posts === undefined ?
          <Spinner animation="border" />
        :
          posts.map(post => {
            return (
              <p key={post.id}>
                <b>{post.author.username}</b> &mdash; {post.timestamp}
                <br />
                {post.text}
              </p>
            );
          })
        }
      </>
    );
  }