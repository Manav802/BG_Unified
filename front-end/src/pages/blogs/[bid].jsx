import React from 'react';
import {Image} from '@chakra-ui/core'
import RecentPost from '../../components/header/whatsnew'
import { useRouter } from 'next/router';

import {BLOGS} from './blogContent'
import Head from 'next/head';
import Link from 'next/link';

//  Gets id of blog (bid) from url and use that bid to get blog content from BLOGS array.
//  url basic : /blogs/bid
//  example   : /blogs/covid-19

//Using random images for now

function Blogs(){
  const router = useRouter();
  const { bid } = router.query; //get blog id from url
  
  var blog = BLOGS.filter((blog)=>{if(blog.id==bid){return blog}})[0] || {content:""}; //Filter and get the current blog object

  var content= (blog.content.split(`\n`).map((item, i) => <p key={i}>{item} <br/></p>)); //Formating content according to line breaks
  
  return(
      <div className="article">
                <Head>
                    <title>{blog.title||""}</title>
                </Head>
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
                                    <div className="NunitoSans-Regular text-secondary">{blog.date ? <>Last Updated  <b>{blog.date}</b> </>  : ""}</div>
                                </div>
                                <div className="col-lg-8 mt-3">
                                    <div className="content-lead"> 
                                      {content}
                                    </div>
                                </div>
                                <div className="col-lg-4 px-4 mt-3">
                                    <div className="h6 mb-2 text-secondary">Recent Posts</div>
                                    <div className="py-2">
                                        <Link href="/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw"><a>BG Unified Solutions got nominated for two awards under Service and Collaboration within Revenue NSW</a></Link>
                                    </div>
                                    <div className="py-2">
                                        <Link href="/blogs/5-cisco-asa-5520-to-5525x-with-firepower-services"><a>Cisco ASA 5520 to 5525X with FirePower Services</a></Link>
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