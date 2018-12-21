

# Audio


## Html5 Audio Element


```
var audio = new Audio();
audio.src = 'url.mp3';
audio.autoplay = false;
audio.muted = false;
audio.preload = 'metadata';


// play
if (audo.paused) {
    audio.play();
}

// replay
audio.pause();
audio.currentTime = 0; // reset restart
audio.play();

//
audio.ended; // play end
audio.onended = () => {}


// volume
audio.volume = 5;
audio.onvolumechange = () => {}
```


## Web Audio api

AudioContext

AudioNode:
- AudioBufferSourceNode: context.createBufferSource().buffer = buf;
- MediaElementAudioSourceNode: context.createMediaElementSource(new Audio())
- MediaStreamAudioSourceNode: context.createMediaStreamSource(stream)
....


```

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var gainNode = context.createGain(); // 音量变更接口
function init() {
    // Fix up prefixing
    fetchSound('./assets/win.mp3').then((response) => {
        context.decodeAudioData(response, function(buffer) {
            var source = context.createBufferSource(); // creates a sound source
            source.buffer = buffer;                    // tell the source which sound to play
            source.connect(gainNode);
            gainNode.connect(context.destination);       // connect the source to the context's destination (the speakers)
            source.start(0);
        }, console.error);
    });
}


function fetchSound(url) {
    return new Promise(resolve => {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.onload = function() {
           resolve(request.response);
        }
        request.send();
    });
}
```


- https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API
- https://www.html5rocks.com/en/tutorials/webaudio/intro/#toc-play


## 相关问题研究 - autoplay

- 解决 音视频自动播放 扰民问题
- 尽管 chrome 更新了 [autoplay规则] (https://docs.google.com/presentation/d/1DhW29bTLkDO6JSqp_wLUyByo00nI4krQ9laGQYQEJLU/edit#slide=id.g24637dd1e3_0_0)， safari控制 还是比chrome 更严厉。变更相关影响也可以了解下文章：http://news.mydrivers.com/1/575/575616.htm

### test


chrome: 同域跳转到页面可以自动播放. 刷新(mac 不自动播放, win 自动播放)
firefox: 跳转，刷新都可以自动播放
edge/ie: 跳转，刷新都可以自动播放
safari: 同域跳转，刷新都不能自动播放

> ps: 现场测试，当前可能已过时


chrome关于iframe:   可以增加 `allow=autoplay` 允许iframe内容自动播放 // 跨域


### safari 目前默认行为

 **  pc pad 端 由用户触发的交互调用可以播放；异步调用默认均不可以(补充：延迟在1s内可以)。 **

 pc端有个方法绕过：或者保证异步延迟在1s之内； 或者页面先通过交互主动触发一次任意sound播放(muted也可)，之后异步调用就可以播放了。
 而 pad 上，需要预先主动触发待播放的对应音频，后续调用才可以播放。

示例：
```
document.querySelector('#testBuzz').addEventListener('touchstart', () => {
    // 注意：所有待播放音频都需要预热
    sounds.dice.muted = true;
    sounds.dice.play();
    sounds.dice.pause();
    setTimeout(() => {
        sounds.dice.muted = false;
        sounds.dice.play()
    }, 5000);
});
```