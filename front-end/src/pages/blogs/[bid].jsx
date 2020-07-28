import React from 'react';
import {Image} from '@chakra-ui/core'
import RecentPost from '../../components/header/whatsnew'
import { useRouter } from 'next/router';

import {BLOGS} from './blogContent'

//  Gets id of blog (bid) from url and use that bid to get blog content from BLOGS array.
//  url basic : /blog/bid
//  example   : /blog/covid-19

//Using random images for now

function Blogs(){
  const router = useRouter();
  const { bid } = router.query; //get blog id from url
  
  var blog = BLOGS.filter((blog)=>{if(blog.id==bid){return blog}})[0] || {content:""}; //Filter and get the current blog object

  var content= (blog.content.split(`\n`).map((item, i) => <p key={i}>{item} <br/></p>)); //Formating content according to line breaks
  
  return(
      <div className="article">
            <div className="container-fluid p-0 overflow-hidden position-absolute">
                    <img src="/assets/images/backgrounds/top_red_triangle.svg" className="divider-topred-with-margin w-100 layer-2" alt=""/>
                 </div>
                <div className="layer-2">
                    <div className="section">
                        <div className="container p-0">
                            <div className="py-5 mt-5 row">
                                <div className="col-12">
                                    <div className="rounded-8 cover-image shadow-lg">
                                        <Image className="w-100" src={blog.image || "https://source.unsplash.com/1600x900/?IT,technology"} ></Image>
                                    </div>
                                </div>
                                <div className="col-12 mt-5 pb-3 border-bottom">
                                    <div className="display4">{blog.title}</div>
                                    <div className="NunitoSans-Regular text-secondary">Last Updated <b>{blog.date}</b></div>
                                </div>
                                <div className="col-lg-8 mt-3">
                                    <div className="content-lead"> 
                                      {content}
                                    </div>
                                </div>
                                <div className="col-lg-4 px-4 mt-3">
                                    <div className="h6 mb-2 text-secondary">Recent Posts</div>
                                    <div className="py-2">
                                        <a href="" className="">Complete VDI/RDS As A Service</a>
                                    </div>
                                    <div className="py-2">
                                        <a href="" className="">Complete VDI/RDS As A Service</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Blogs