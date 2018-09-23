import React, { Component } from 'react'
import { Carousel,WhiteSpace,Flex} from 'antd-mobile';
export default class Slider extends Component {
    state = {
        data: [
            {
                val: "1",
                items: [
                    {
                        img: 'meishi',
                        title: "美食"
                    },
                    {
                        img: 'dianying',
                        title: "电影"
                    },
                    {
                        img: 'jiudian',
                        title: "酒店"
                    },
                    {
                        img: 'yule',
                        title: "娱乐"
                    },
                    {
                        img: 'waimai',
                        title: "外卖"
                    },
                    {
                        img: 'ktv',
                        title: "ktv"
                    },
                    {
                        img: 'zhoubianyou',
                        title: "周边游"
                    },
                    {
                        img: 'liren',
                        title: "丽人"
                    },
                    {
                        img: 'xiaochi',
                        title: "小吃"
                    },
                    {
                        img: 'jipiao',
                        title: "机票"
                    }
                ]
            }, {
                val: "2",
                items: [
                    {
                        img: 'meishi',
                        title: "美食"
                    },
                    {
                        img: 'dianying',
                        title: "电影"
                    },
                    {
                        img: 'jiudian',
                        title: "酒店"
                    },
                    {
                        img: 'yule',
                        title: "娱乐"
                    },
                    {
                        img: 'waimai',
                        title: "外卖"
                    },
                    {
                        img: 'ktv',
                        title: "ktv"
                    },
                    {
                        img: 'zhoubianyou',
                        title: "周边游"
                    },
                    {
                        img: 'liren',
                        title: "丽人"
                    }
                ]
            }
        ],
        imgHeight: 210,
    }
    componentDidMount() {
        // simulate img loading
    }
    render() {
        return (
            <Carousel
            className="slider-bar"
            autoplay={false}
            infinite
          ><div
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <WhiteSpace size="lg" />
            <Flex wrap="wrap">
              
            </Flex>
          </div> 
           {this.state.data.map(val => (
                <div
                    key={val.val}
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                </div>
            ))}
            </Carousel>
        )
    }
}
