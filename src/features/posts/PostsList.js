import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <p>{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`}>
        View post
      </Link>
    </article>
  ))

return (
  <section>
    <h2>Posts</h2>
    {renderedPosts}    
  </section>
)
}