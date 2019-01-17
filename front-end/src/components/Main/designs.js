import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: 'http://zanatlantean.com/shared/2014/02/catoandaj-sreenshot.png', width: 5, height: 3 },
    { src: 'https://media-api.xogrp.com/images/0510a356-b2c9-4e31-9a6d-5bbbe5c79f89~rs_600.h', width: 1, height: 1 },
    { src: 'https://www.wpsolver.com/wp-content/uploads/2012/10/just-married.png', width: 3, height: 4 },
    { src: 'https://withjoy.com/assets/img/hero2018/hero-brannan.png', width: 3, height: 4 },
    { src: 'http://myday.ynet.co.il/en/wp-content/blogs.dir/en/files/2013/03/Screen-shot-2013-03-17-at-9.21.04-AM.png', width: 7, height: 4 },
    { src: 'https://blog.beautheme.com/wp-content/uploads/2016/05/Wedding-Theme-Wordpress-03.jpg', width: 6, height: 3 },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sk4kYRVYyp6JCW1dCHBpTjDJffc9SwCEOOqsz1uxuaLs0a-tAg', width: 3, height: 4 },
    { src: 'https://static.wixstatic.com/media/4afcc986759fd062e04a9f06d98bb17939a12609d27ff9ce69a6ae9885a3aa62.jpg', width: 6, height: 3 },
    { src: 'http://www.an-elegant-affair.net/images/Wedding%20Website.png', width: 4, height: 3 },
    { src: 'http://zanatlantean.com/shared/2014/02/catoandaj-sreenshot.png', width: 5, height: 3 },
    { src: 'https://media-api.xogrp.com/images/0510a356-b2c9-4e31-9a6d-5bbbe5c79f89~rs_600.h', width: 1, height: 1 },
    { src: 'https://www.wpsolver.com/wp-content/uploads/2012/10/just-married.png', width: 3, height: 4 },
    { src: 'https://withjoy.com/assets/img/hero2018/hero-brannan.png', width: 3, height: 4 },
    { src: 'http://myday.ynet.co.il/en/wp-content/blogs.dir/en/files/2013/03/Screen-shot-2013-03-17-at-9.21.04-AM.png', width: 7, height: 4 },
    { src: 'https://blog.beautheme.com/wp-content/uploads/2016/05/Wedding-Theme-Wordpress-03.jpg', width: 6, height: 3 },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sk4kYRVYyp6JCW1dCHBpTjDJffc9SwCEOOqsz1uxuaLs0a-tAg', width: 3, height: 4 },
    { src: 'https://static.wixstatic.com/media/4afcc986759fd062e04a9f06d98bb17939a12609d27ff9ce69a6ae9885a3aa62.jpg', width: 6, height: 3 },
    { src: 'http://www.an-elegant-affair.net/images/Wedding%20Website.png', width: 4, height: 3 }
];


class Design extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        return (
            <div>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}
export default Design
