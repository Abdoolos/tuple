'use client';

import BlogV1Data from '@/assets/jsonData/BlogV1Data.json';
import SingleBlogV1 from './SingleBlogV1';
import Animate from '../animation/Animate';
import { useLocale } from '@/hooks/useLocale';

const BlogV1 = () => {
    const { locale } = useLocale();

    const content = {
        en: {
            subtitle: 'News & Events',
            title: 'Check out our blog posts'
        },
        no: {
            subtitle: 'Nyheter & Arrangementer',
            title: 'Sjekk ut våre blogginnlegg'
        }
    };

    const t = content[locale];

    return (
        <>
            <div className="blog-area home-blog default-padding bg-gray bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">{t.subtitle}</h5>
                                <h2 className="title">{t.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogV1Data.slice(0, 3).map(blog =>
                            <Animate className="animate__animated animate__fadeInUp" delay={blog.animationDelay} key={blog.id}>
                                <div className="col-xl-4 col-md-6 mb-30">
                                    <SingleBlogV1 blog={blog} />
                                </div>
                            </Animate>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;