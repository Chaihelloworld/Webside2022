import React, { Component, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import Image1 from "../public/1.png"
import Image2 from "../public/2.jpg"
import Image from 'next/image'

const items = [
    {
        id: 1,
        src: Image1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        id: 2,
        src: Image2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    }
    // ,
    // {
    //     id: 2,
    //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //     altText: 'Slide 2',
    //     caption: 'Slide 2'
    // },
    // {
    //     id: 3,
    //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //     altText: 'Slide 3',
    //     caption: 'Slide 3'
    // }
];

function Example() {
    const [state, setState] = useState({ activeIndex: 0 });
    // const [next,setnext]= useState();
    // const [previous,setprevious]= useState();
    // const [goToIndex,setgoToIndex]= useState();
    // const [onExitings,setonExiting]= useState();
    // const [onExited,setonExited]= useState();
    const [animating, setAnimating] = useState(false);

    const onExiting = () => {
        setAnimating(true)
    }

    const onExited = () => {

        setAnimating(false)
    }

    const next = () => {
        if (animating)
            return;
        const nextIndex = state.activeIndex === items.length - 1 ? 0 : state.activeIndex + 1;
        setState({ activeIndex: nextIndex });
    }

    const previous = () => {
        if (animating)
            return;
        const nextIndex = state.activeIndex === 0 ? items.length - 1 : state.activeIndex - 1;
        setState({ activeIndex: nextIndex });
    }

    const goToIndex = (newIndex: any) => {
        if (animating) return;
        setState({ activeIndex: newIndex });
    }

    // const render = () => {
    const { activeIndex } = state;

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.id}
            >
                {/* <img src={item.src} alt={item.altText} /> */}
                <Image
                    src={item.src}
                    alt="Picture of the author"
                width={1500}
                height={600}
                />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
    // }
}


export default Example;