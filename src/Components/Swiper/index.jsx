import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import Request from "@/http/request";
import { Swiper } from "@/config/uri";
/* import Swiper1 from "@/assets/swiper/swiper-1.png";
import Swiper2 from "@/assets/swiper/swiper-2.jpeg";
import Swiper3 from "@/assets/swiper/swiper-3.jpeg"; */

export default class index extends Component {
    state = {
        data: [],
        imgHeight: 176,
        flag: false,
    };

    async componentDidMount() {
        try {
            let ret = await Request.get(Swiper);
            if (ret.data.code === 0) {
                this.setState((state, props) => {
                    return {
                        data: ret.data.data,
                        flag: true,
                    };
                });
            }
        } catch (err) {}
    }

    render() {
        return (
            <>
                {/* 如果this.state.flag为假则后面的不会执行,反之执行 */}
                {this.state.flag && (
                    <Carousel autoplay={true} infinite>
                        {this.state.data.map((val, index) => (
                            <img
                                key={index}
                                src={val.img}
                                alt=""
                                style={{ width: "100%", verticalAlign: "top" }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event("resize"));
                                    this.setState({ imgHeight: "auto" });
                                }}
                            />
                        ))}
                    </Carousel>
                )}
            </>
        );
    }
}
