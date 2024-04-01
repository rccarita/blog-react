import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import thumbnail from '../assets/img/blog5.jpg'

const PostDetail = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor />
                    <div className="post-detail__buttons">
                        <Link to={'/posts/wewer/edit'} className='btn sm primary' >Edit</Link>
                        <Link to={'/posts/wewer/delete'} className='btn sm danger' >Delete</Link>
                    </div>
                </div>
                <h1>This is the post title</h1>
                <div className="post-detail__thumbnail">
                    <img src={thumbnail} alt="" />
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repellat ipsam harum distinctio magni ratione sunt facilis voluptatum eveniet at? Animi harum, suscipit molestias nihil temporibus consequuntur repellendus necessitatibus nostrum facilis modi eum at, fugit, repellat velit ut officia molestiae.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In qui repellendus doloribus sapiente libero maxime quae natus voluptatibus ducimus. Libero modi dignissimos aliquam magnam iste quasi praesentium vel, voluptatem, debitis, quo sint soluta neque hic doloremque maxime tempore nesciunt ipsam iusto nemo cumque deleniti quod unde provident omnis. Quisquam, tempora?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In architecto optio beatae saepe eum magnam autem excepturi obcaecati. Ea accusantium voluptatem temporibus inventore unde, nobis ab odio! Laborum ratione pariatur illum natus, ipsum provident accusantium unde officia aut ut at hic impedit, velit magnam quod quo dignissimos fugiat ad mollitia accusamus fuga nesciunt? Illo asperiores quae, nihil hic necessitatibus illum iure quos natus vero quia ea obcaecati expedita! Dignissimos quos consequuntur magni nulla aliquid quis eos adipisci! Quidem quaerat maiores molestias placeat eligendi porro exercitationem tempore quia cum eveniet incidunt numquam rerum culpa, fugiat mollitia saepe consequatur rem sint? Quos impedit consectetur fugit unde deleniti cupiditate laboriosam. Laborum non ipsam alias.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In architecto optio beatae saepe eum magnam autem excepturi obcaecati. Ea accusantium voluptatem temporibus inventore unde, nobis ab odio! Laborum ratione pariatur illum natus, ipsum provident accusantium unde officia aut ut at hic impedit, velit magnam quod quo dignissimos fugiat ad mollitia accusamus fuga nesciunt? Illo asperiores quae, nihil hic necessitatibus illum iure quos natus vero quia ea obcaecati expedita! Dignissimos quos consequuntur magni nulla aliquid quis eos adipisci! Quidem quaerat maiores molestias placeat eligendi porro exercitationem tempore quia cum eveniet incidunt numquam rerum culpa, fugiat mollitia saepe consequatur rem sint? Quos impedit consectetur fugit unde deleniti cupiditate laboriosam. Laborum non ipsam alias.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In architecto optio beatae saepe eum magnam autem excepturi obcaecati. Ea accusantium voluptatem temporibus inventore unde, nobis ab odio! Laborum ratione pariatur illum natus, ipsum provident accusantium unde officia aut ut at hic impedit, velit magnam quod quo dignissimos fugiat ad mollitia accusamus fuga nesciunt? Illo asperiores quae, nihil hic necessitatibus illum iure quos natus vero quia ea obcaecati expedita! Dignissimos quos consequuntur magni nulla aliquid quis eos adipisci! Quidem quaerat maiores molestias placeat eligendi porro exercitationem tempore quia cum eveniet incidunt numquam rerum culpa, fugiat mollitia saepe consequatur rem sint? Quos impedit consectetur fugit unde deleniti cupiditate laboriosam. Laborum non ipsam alias.
                </p>
            </div>
        </section>
    )
}

export default PostDetail