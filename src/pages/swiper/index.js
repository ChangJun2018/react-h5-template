import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {swiperAnimateCache,swiperAnimate} from './assets/js/swiper.animate1.0.3.min.js'
import './style.scss'

class SwiperPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="swiper-container">
                <div  className="swiper-wrapper">
                    <div className="swiper-slide p1">
                    <h1 className="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                        This is react-h5-demo
                    </h1>
                    </div>
                    <div className="swiper-slide p2">
                    <h1 className="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                        React+Swiper+Animate
                        </h1>
                    </div>
                </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        const mySwiper = new Swiper(".swiper-container", {
          direction: "vertical", 
          mousewheel: true, 
          grabCursor: true, 
          effect: "slide", 
          on:{
            init: function(){
              swiperAnimateCache(this); //隐藏动画元素 
              swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionEnd: function(){ 
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            } 
          }  
        });
        console.log(mySwiper.progress)
      }


}

export default SwiperPage;