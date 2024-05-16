import type { MetaFunction } from "@remix-run/node";
// import { Link } from "@remix-run/react";

import blogSvgItem from '~/assets/images/blog-svg-item.svg';
import postImage from '~/assets/images/posts/blog_img_13.jpg';
// import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  // const user = useOptionalUser();
  return (
    <div>
      <div className="container">
        <div className="flex flex-wrap mx-[-12px]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft" }}>
            <div className="title-style-five mb-[65px] lg:mb-5 md:mb-5 sm:mb-5 xsm:mb-5">
              <div className="sc-title-two italic relative text-[17px] text-pink-400 mb-5 pl-10 before:content-[''] before:absolute before:w-6 before:h-px before:left-0 before:top-3.5 before:bg-pink-500]">Blog</div>
              <h2 className="main-title font-medium text-black dark:text-white text-[72px] leading-[1.25em] 2xl:text-[58px] lg:text-[50px] md:text-[35px] sm:text-[35px] xsm:text-[35px]">Check our inside news &amp; update.</h2>
            </div>
          </div>
        </div>
        <img src={blogSvgItem} alt="blog-svg-item" className="lazy-img shapes shape-two absolute z-[-1] right-[17%] 2xl:right-[8%] lg:right-[6%] md:!hidden sm:!hidden xsm:!hidden top-[4%]" />
      </div>
      {/* Blog section */}
      <div className="blog-section-five mt-[70px]  lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
        <div className="container">
          <div className=" border-b-[#f1f1f1] border-b border-solid pb-[130px]  lg:pb-[60px] md:pb-[60px] sm:pb-[60px] xsm:pb-[60px]">
            <div className="flex flex-wrap xl:mx-[-24px]">
              {/* Start Blog Posts */}
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                {/* Start article */}
                <div className="blog-meta-wrapper xxl:!pr-[3rem] ">
                  <article className="blog-meta-three mb-20  lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10 wow fadeInUp">
                    <figure className="post-img !m-0 overflow-hidden rounded-[10px]"><a href="blog-details.html" className="w-full block"><img src={postImage} alt="" className="lazy-img w-full tran4s" /></a></figure>
                    <div className="post-data mt-10  lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
                      <div className="post-date opacity-75 uppercase text-[14px] tracking-[1px] lg:text-[12px] md:text-[12px] sm:text-[12px] xsm:text-[12px] ">23 Apr, 2023</div>
                      <a href="blog-details.html" className="mt-[10px] mb-[25px]  xl:mb-5 lg:mb-5 md:mb-5 sm:mb-5 xsm:mb-5"><h4 className="tran3s blog-title xl  text-black  leading-[1.53em] text-[32px] lg:text-[24px] md:text-[24px] sm:text-[24px] xsm:text-[24px]  hover:text-[color:var(--prime-five)]">Print, publishing qui visual ux quis layout mockups.</h4></a>
                      <div><a href="blog-details.html" className="read-btn-two font-medium tran3s  leading-[45px] border border-pink-500 text-pink-500 p-[0_32px] rounded-[23px] border-solid hover:text-white hover:bg-pink-800 sm:leading-[43px] sm:text-[15px] sm:p-[0_28px] xsm:leading-[43px] xsm:text-[15px] xsm:p-[0_28px]">Read More</a></div>
                    </div>
                  </article>
                  {/* End article */}
                </div>
              </div>
              {/* End Blog Posts */}
              {/* Start Blog Sidebar */}
              <div className="xl:w-4/12 lg:w-4/12 md:w-8/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                <div className="blog-sidebar md:mt-[70px] sm:mt-[70px] xsm:mt-[70px]">
                  {/* Search bar */}
                  <div className="blog-sidebar-search mb-[55px] md:mb-10 sm:mb-10 xsm:mb-10 ">
                    <form action="#" className=" h-[65px] relative">
                      <input className=" w-full h-full text-[17px] pl-5 pr-[60px] py-0 rounded-[5px] border-0  bg-[#F4F4F4]" type="text" placeholder="Search.." />
                      <button className=" absolute w-[60px] text-black right-0 inset-y-0"><i className="bi bi-search"></i></button>
                    </form>
                  </div>
                </div>
              </div>
              {/* End Blog Sidebar */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
