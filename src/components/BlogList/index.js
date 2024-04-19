// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="bloglist">
      {blogList.map(each => (
        <BlogItem key={each.id} blogItem={each} />
      ))}
    </ul>
  )
}

export default BlogList
