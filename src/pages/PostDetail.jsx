import React from 'react'
import PostsAuthor from '../components/PostsAuthor'
import { Link } from 'react-router-dom'
import thumbnail from '../Assets/thumbnail.jpg'

const PostDetail = () => {
  return (
   <section className='postdetail'>


    <div className="postdetail-header">
         <PostsAuthor/>
         <div className="details-btn">
            <Link><button className='edit'>edit</button></Link>
            <Link><button className='delete'>delete</button></Link>
          </div>


    </div>
   
    <div className="content">
      <h2>This is the title for this page </h2>
      <img src={thumbnail} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae possimus quod ad. Necessitatibus at iste laborum cumque consectetur similique, rerum consequatur error, cupiditate tempore est hic vero mollitia doloremque consequuntur molestiae architecto velit nulla recusandae aspernatur, nisi deserunt qui!

      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente. Blanditiis placeat libero deleniti odio suscipit nisi, aspernatur possimus consequatur! Vel pariatur totam eius ea voluptatibus fugiat magni iure ipsam quaerat doloribus.

      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias, corrupti architecto quos harum cum? Cupiditate pariatur aliquam, quidem et suscipit, modi magni expedita voluptatibus repudiandae nesciunt enim harum quia? Voluptates nulla praesentium iusto. Officia in ullam deleniti praesentium. Ab ipsa quae nulla nihil sapiente molestiae dignissimos tenetur voluptas corporis consequuntur laborum maiores sed neque ipsam, blanditiis exercitationem error quisquam nobis omnis. Harum deserunt itaque, consequuntur beatae delectus fugiat. Inventore recusandae iure veritatis quos, optio doloremque sunt dolorem tenetur voluptatum dolor aspernatur ducimus eaque doloribus eos temporibus praesentium cum et debitis voluptatibus nam harum dolore sed? Enim reiciendis debitis, magni nobis porro tenetur ab perspiciatis officiis culpa! Similique, fuga enim? Consectetur asperiores voluptate, praesentium atque voluptatum obcaecati laborum ab in voluptatem modi beatae!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorem iure, dolor id, laborum eos dolore esse architecto, officia at illum molestiae in magni omnis eius minima eveniet nemo? Distinctio dicta officia quam necessitatibus accusantium, iste deserunt numquam nam officiis corrupti, illum dolorum. Accusamus et consequatur dolor dignissimos unde aliquid atque quo molestiae ducimus nulla quis magni rem incidunt, aspernatur tempore eius. Alias, facilis. Est a nobis odit adipisci rem facilis error praesentium quaerat voluptates, placeat sed facere ipsum esse sit. Possimus iusto non necessitatibus accusamus vero eveniet voluptates aliquid, quae dolorum in earum culpa ex placeat itaque alias corrupti commodi harum voluptatum at. Veniam, laudantium ullam. Ducimus nemo perspiciatis repellat laboriosam earum, sequi alias harum? Reiciendis, nobis sapiente facere similique natus dignissimos earum tenetur consequatur nihil vero esse laboriosam aliquam adipisci ipsam nulla magnam voluptates illo voluptatem molestiae corporis ad! Temporibus nemo odio error asperiores fuga ea, tenetur labore similique corrupti, excepturi veritatis blanditiis, placeat minima consectetur optio porro iste accusamus impedit perspiciatis voluptatum ratione. Officiis voluptatibus ex soluta, explicabo odio minima assumenda aut facere, maxime laudantium voluptate perferendis libero consectetur consequatur illum provident iure deleniti nihil, tenetur a adipisci. Eos repellendus, expedita quos voluptatibus blanditiis ea sint libero.
      </p>

    </div>
    

   </section>
  )
}

export default PostDetail
