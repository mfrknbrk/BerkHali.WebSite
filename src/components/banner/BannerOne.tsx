import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Col, Row } from 'react-bootstrap'

const BannerOne = () => {
    return (
        <>
            <section className="section-banner-one padding-tb-50">
                <div className="container">
                    <Row className="mb-minus-24">
                        <Col lg={6} className="mb-24 col-12">
                            <Fade triggerOnce direction='up' duration={1000} delay={400}>
                                <div className="banner-box bg-box-color-one">
                                    <div className="inner-banner-box">
                                        <div className="side-image">
                                            <img src="/assets/img/banner-one/one.png" alt="one" />
                                        </div>
                                        <div className="inner-contact">
                                            <h5>Avantajlı Halılar</h5>
                                            <p>Sınırlı stok, özel indirimler sizi bekliyor.</p>
                                            <Link href="/shop-left-sidebar-col-3" className="bb-btn-1">Keşfet</Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={6} className="mb-24 col-12">
                            <Fade triggerOnce direction='up' duration={1000} delay={400}>
                                <div className="banner-box bg-box-color-two">
                                    <div className="inner-banner-box">
                                        <div className="side-image">
                                            <img src="/assets/img/banner-one/two.png" alt="two" />
                                        </div>
                                        <div className="inner-contact">
                                            <h5>Uzman dokunuşlarla tamamladığımız uygulamalar</h5>
                                            <p>Zeminlerinizi estetik ve dayanıklılıkla buluşturuyoruz.</p>
                                            <Link href="/shop-left-sidebar-col-3" className="bb-btn-1">İncele</Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </section>        
        </>
    )
}

export default BannerOne
