// 第一屏幕图片滚动
ScrollTrigger.create({
  trigger: '.section1',
  start: 'top top',
  end: '+=1000',
  scrub: true,
  animation:
    // gsap.fromTo('.kv-content', { scale: 1 }, { scale: 0.5 })
    // 第一屏幕的图片由大变小
    gsap.timeline().fromTo('.kv-content', { scale: 1 }, { scale: 0.5 })
      // 第二屏幕的视频由小变大
      .fromTo('.summary-content', { width: '50%', height: '50vh' }, { width: '100%', height: '100vh' }, '<')

})

// 第二屏幕滚动
ScrollTrigger.create({
  trigger: '.section2',
  start: 'top top',
  end: '+=5000',
  scrub: true,
  // 固定屏幕
  pin: true,
  // 滚动滚动条的时候，自动播放视频
  // 视频播放的进度和滚动条的距离链接一起的
  // onUpdate ScrollTrigger 的进度更改（意味着滚动位置更改）时都会调用的回调
  onUpdate(self) {
    // 播放视频
    const summary = document.querySelector('.summary')
    try {
      // 视频的播放进度随着滚动条变化
      // self.progress 整体进度  0~1 
      // summary.duration 视频的总时长
      // console.log(self.progress)
      summary.currentTime = self.progress * summary.duration
    }
    catch (e) {
      console.log(e)
    }
  },

  // 文字1 显示  top: 20rem 看得见，然后 在 top 0 看不见
  // 文字2 显示  top: 27rem 看得见，然后 在 top 24rem 看不见
  animation:
    gsap.timeline()
      .to('.text1', { top: '20rem', opacity: 1 })
      .to('.text1', { top: 0, opacity: 0 })
      .to('.text2', { top: '27rem', opacity: 1 })
      .to('.text2', { top: '24rem', opacity: 0 })

})


// 第三屏幕动画
ScrollTrigger.create({
  trigger: '.section3',
  start: 'top top',
  end: '+=1000',
  pin: true,
  // markers: true

})
ScrollTrigger.create({
  trigger: '.color-img',
  start: 'top-=500 top',
  end: '+=3000',
  scrub: true,
  animation: gsap.timeline()
  .fromTo('.color1', {'margin-left': '90em', opacity: 0}, {'margin-left': 0, opacity: 1}, '<')
  .fromTo('.color2', {'margin-left': '100em', scale: 1.3}, {'margin-left': 0, scale: 1},'<')
  .fromTo('.color3', {'margin-left': '110em', scale: 1.6}, {'margin-left': 0,  scale: 1},'<')
  .fromTo('.color4', {'margin-left': '120em', scale: 1.9}, {'margin-left': 0,  scale: 1},'<')
  .fromTo('.color1', {'margin-left': '0', opacity: 1}, {'margin-left': '-120em', opacity: 1}, '>')
  .fromTo('.color2', {'margin-left': '0', scale: 1}, {'margin-left': '-110em', scale: 1.3},'<')
  .fromTo('.color3', {'margin-left': '0', scale: 1}, {'margin-left': '-100em',  scale: 1.6},'<')
  .fromTo('.color4', {'margin-left': '0', scale: 1}, {'margin-left': '-90em',  scale: 1.9},'<')
})

// 第四屏幕动画
// 固定第四屏幕
ScrollTrigger.create({
  trigger: '.section4',
  start: 'top top',
  end: '+=3000',
  pin: true,
  // markers: true
})
// 滚动到目标位置做动画
ScrollTrigger.create({
  trigger: '.parallel',
  start: 'top top',
  end: '+=3000',
  scrub: true,
  animation: gsap.timeline()
  .fromTo('.title', {opacity: 1}, {opacity: 0})
  // page1里面的视频动画
  .fromTo('.video1', {'margin-top': '100%'}, {'margin-top': 0,
  onStart(){
    // onStart：在动画开始时调用
    const video1 = document.querySelector('.page1 .video1')
    video1.currentTime = 0  // 从开头播放
    video1.play()  // 播放视频
  }

})
  .fromTo('.info', {opacity: 0}, {opacity: 1})
  .fromTo('.page1', {'left': 0}, {'left': '-128em'}, '>')
  .fromTo('.page2', {'left': '128em'}, {'left': 0, 
  onStart(){
    // onStart：在动画开始时调用
    const video2 = document.querySelector('.page2 .video2')
    video2.currentTime = 0  // 从开头播放
    video2.play()  // 播放视频
  }
}, '<')
})


// 第五屏动画
// 固定第四屏幕
ScrollTrigger.create({
  trigger: '.section5',
  start: 'top top',
  end: '+=3000',
  pin: true,
  // markers: true
})

ScrollTrigger.create({
  trigger: '.rom-content',
  start: 'top+=500 top',
  end: '+=2000',
  scrub: true,
  animation: gsap.timeline()
  .fromTo('.rom-txt', {opacity: 1, 'margin-top': 0}, {opacity: 0, 'margin-top': '-7em' })
  .fromTo('.pic4', { width: '18.75em' }, { width: '16.75em' })
  .fromTo('.pic1', { left: '55.125em ' }, { left: '14.3em' }, "<")
  .fromTo('.pic7', { right: '55.125em ' }, { right: '14.3em' }, "<")
  .fromTo('.pic2', { left: '55.125em ' }, { left: '26.1em' }, "<")
  .fromTo('.pic6', { right: '55.125em ' }, { right: '26.1em' }, "<")
  .fromTo('.pic3', { left: '55.125em ' }, { left: '39.8em' }, "<")
  .fromTo('.pic5', { right: '55.125em ' }, { right: '39.8em' }, "<")

})


