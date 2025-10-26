import React from 'react'
import Categories from './blog-category/Categories'
import { Fade } from 'react-awesome-reveal'
import Link from 'next/link'

const Articles = ({
    selectedCategory,
}: any) => {
    return (
        <>
            <div className="bb-blog-sidebar">
                <Fade triggerOnce direction='up' duration={1000} delay={200}>
                    <div className="blog-inner-contact">
                        <div className="blog-sidebar-title">
                            <h4>Recent Articles</h4>
                        </div>
                        <div className="blog-sidebar-card">
                            <div className="inner-image">
                                <img src="/assets/img/blog/7.jpg" alt="blog" />
                            </div>
                            <div className="blog-sidebar-contact">
                                <span>Karo Halı Rehberi</span>
                                <h4><Link href="/blog-detail-left-sidebar">Karo Halı Nedir? Avantajları ve Kullanım Alanları?</Link></h4>
                                <p>February 10, 2025</p>
                            </div>
                        </div>
                        <div className="blog-sidebar-card">
                            <div className="inner-image">
                                <img src="/assets/img/blog/8.jpg" alt="blog" />
                            </div>
                            <div className="blog-sidebar-contact">
                                <span>Dayanıklılık & Performans</span>
                                <h4><Link href="/blog-detail-left-sidebar">En Dayanıklı Karo Halı Türleri ve Özellikleri?</Link></h4>
                                <p>Jan 1, 2024</p>
                            </div>
                        </div>
                        <div className="blog-sidebar-card">
                            <div className="inner-image">
                                <img src="/assets/img/blog/9.jpg" alt="blog" />
                            </div>
                            <div className="blog-sidebar-contact">
                                <span>Karo Halı Bakımı</span>
                                <h4><Link href="/blog-detail-left-sidebar">Karo Halı Temizliği ve Bakımı Nasıl Yapılır?</Link></h4>
                                <p>Jun 02, 2024</p>
                            </div>
                        </div>
                        <div className="blog-sidebar-card">
                            <div className="inner-image">
                                <img src="/assets/img/blog/10.jpg" alt="blog" />
                            </div>
                            <div className="blog-sidebar-contact">
                                <span>Kurulum ve Uygulama</span>
                                <h4><Link href="/blog-detail-left-sidebar">Karo Halı Döşeme Süreci: Adım Adım Uygulama Rehberi</Link></h4>
                                <p>May 20, 2024</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Categories selectedCategory={selectedCategory} />
            </div>
        </>
    )
}

export default Articles
