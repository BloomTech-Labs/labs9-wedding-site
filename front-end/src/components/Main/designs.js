import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import styled from 'styled-components';

const DesignsContainer = styled.div`
/* margin: auto; */
/* margin-top: 200px;
margin-bottom: 80px; */
background-color: white;
width: 200%;
display:flex;
flex-wrap:nowrap;
height: 1700px;
margin:0;
padding-top:0px;
/* justify-content: space-between; */
`

const photos = [
    { src: 'https://cdn.freshdesignweb.com/wp-content/uploads/glanz-html-wedding-template.jpg', width: 1 },
    { src: 'https://cdn.freshdesignweb.com/wp-content/uploads/belle-responsive-wedding-template.jpg', width: 1 },
    { src: 'https://cdn.freshdesignweb.com/wp-content/uploads/site/newlyweds-html-wedding-template.jpg', width: 1 },
];


class Design extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.goToSignUp = this.goToSignUp.bind(this);
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
    goToSignUp() {
        let path = './signup';
        this.props.history.push(path);
    }
    render() {
        return (
            <DesignsContainer>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    onClickImage={this.goToSignUp}
                    isOpen={this.state.lightboxIsOpen}
                />
            </DesignsContainer>
        )
    }
}
export default Design
