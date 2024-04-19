// Write your JS code here
const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="list-item">
      <div className="blogs-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
