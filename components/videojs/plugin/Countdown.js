import videojs from 'video.js';

const Plugin = videojs.getPlugin('plugin');

export class countdown extends Plugin {
    constructor(player, options) {
        super(player, options);
        console.log('123');
        let settings
        player.removeClass('tt-vplayer-visibility')
        let loadingCountdown
        let isCounting = false
        let isDone = false
        let isPlaying = false
        let playDone = false
        let timer = 0
        var isElementInViewport,
            checkIsVisible,
            handler,
            StartCountDown,
            cleanup,
            setup

        // var userAgent = navigator.userAgent;
        // if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i) || userAgent.match(/Android/i)) {
        // 	return;
        // }

        if (videojs.VERSION.split('.')[0] >= 5) {
            settings = videojs.mergeOptions(defaults, options)
        } else {
            settings = videojs.util.mergeOptions(defaults, options)
        }

        // Translations
        videojs.addLanguage('vi', {
            'Starts in ...': 'Tự động phát sau ',
            '{{title}} is starting in ...': '{{title}} sẽ phát sau',
        })

        setup = function () {
            let csspl = document.createElement('link'),
                cssplel = document.getElementsByTagName('link'),
                cssplnode = cssplel[cssplel.length - 1];
            csspl.href = '/static/css/scrollCountDownPlugin.css';
            csspl.type = 'text/css';
            csspl.rel = 'stylesheet';
            cssplnode.parentNode.insertBefore(csspl, cssplnode)
            let countdownText
            loadingCountdown = document.createElement('div')
            loadingCountdown.className = 'vjs-loading-countdown'
            loadingCountdown.style = 'background-color: black; opacity: 0.6; display:none;'
            let textCountdown = document.createElement('div')
            textCountdown.className = 'vjs-countdown'

            if (player.mediainfo && player.mediainfo.name && player.mediainfo.name !== '') {
                countdownText = player.localize('{{title}} is starting in ...').replace('{{title}}', player.mediainfo.name)
            } else {
                countdownText = player.localize('Starts in ...')
            }

            // textCountdown.innerHTML = '<span>' + countdownText + '</span>';
            // loadingCountdown.appendChild(textCountdown)

            let loadingDoubleRing = document.createElement('div')
            loadingDoubleRing.className = 'vjs-loading-double-ring'
            loadingDoubleRing.innerHTML = '<div></div><div></div>'

            let spanOverlaySeconds = document.createElement('span')
            spanOverlaySeconds.className = 'vjs-overlay-seconds'
            loadingCountdown.appendChild(spanOverlaySeconds)
            loadingCountdown.appendChild(loadingDoubleRing)

            player.el().appendChild(loadingCountdown)
            checkIsVisible(player.el())
        }

        checkIsVisible = function (el) {

            if (!isElementInViewport(el)) {
                if (!isCounting && isDone) {
                    isPlaying = false
                    player.pause()
                    cleanup()
                }

                if (isCounting) {
                    cleanup()
                }

            } else if (isElementInViewport(el)) {
                if (!isDone && !isCounting) {
                    if (settings.time === 0) {
                        if (settings.mute && !playDone) {
                            player.muted(true)
                        }
                        player.play()
                    } else {
                        StartCountDown()
                    }
                } else {

                }

                if (!isCounting && !isPlaying && !playDone) {
                    player.play()
                }

            }

        }

        StartCountDown = () => {
            let secondsDisplaying = loadingCountdown.querySelector('.vjs-overlay-seconds')
            let count = settings.time
            secondsDisplaying.innerHTML = count
            player.addClass('vjs-counting')
            isCounting = true
            timer = window.setInterval(() => {
                count = count - 1
                secondsDisplaying.innerText = count
                if (count === 0) {
                    if (player.play() !== undefined) {
                        player.play().then(_ => {
                            // Autoplay started
                            player.muted(false)
                        }).catch(error => {
                            // Autoplay was prevented.
                            // Show a "Play" button so that user can start playback.
                            player.muted(true)
                            player.play()
                        })
                    }
                }
            }, 1000)
        }

        cleanup = () => {
            isCounting = false
            player.removeClass('vjs-counting')
            window.clearInterval(timer)
        }

        // Add event listeners
        // TODO: If mobile attach to touchstart or something?
        player.one('loadstart', () => {
            setup()
            handler = () => {
                return checkIsVisible(player.el())
            }
            if (window.addEventListener) {
                window.addEventListener('DOMContentLoaded', handler, false)
                window.addEventListener('load', handler, false)
                window.addEventListener('scroll', handler, false)
                window.addEventListener('resize', handler, false)
            } else if (window.attachEvent) {
                window.attachEvent('onDOMContentLoaded', handler)
                window.attachEvent('onload', handler)
                window.attachEvent('onscroll', handler)
                window.attachEvent('onresize', handler)
            }

            loadingCountdown.addEventListener('click', () => {
                isDone = true
                player.muted(true)
                player.play()
                cleanup()
            })

            // Cancel if playback starts
            player.on('play', () => {
                isPlaying = true
                isDone = true
                createBtnUnmute(player)
                if (isCounting) {
                    cleanup()
                }
            })

            player.on("click", function (e) {
                if (!isPlaying && !playDone) {
                    playDone = true
                } else if (isPlaying && !playDone) {
                    playDone = true
                } else if (!isPlaying && playDone) {
                    playDone = false
                } else if (isPlaying && playDone) {
                    playDone = false
                }
            })

            player.on(['waiting', 'pause'], () => {
                isPlaying = false
            })

            player.on('ended', () => {
                playDone = true
            })

        })

        // http://stackoverflow.com/a/7557433/740233
        isElementInViewport = (el) => {
            var rect = el.getBoundingClientRect()
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            )
        }

        function createBtnUnmute(player) {
            if (!player.muted() && isPlaying && !player.increaseVolumeInterval && player.increaseVolume === undefined) {
                player.volume(0.3)
                player.increaseVolumeInterval = setInterval(() => {
                    if (player.volume() <= 0.7) {
                        var volume = player.volume() * 1000 + 11
                        player.volume(volume / 1000)
                    } else {
                        clearInterval(player.increaseVolumeInterval)
                        player.increaseVolumeInterval = 0
                    }
                }, 100)
                player.increaseVolume = true
            } else if (player.muted() && player.increaseVolumeInterval) {
                clearInterval(player.increaseVolumeInterval)
                player.increaseVolumeInterval = 0
                player.volume(0)
                player.increaseVolume = false
            }
        }
    }

}

export const countdown1 = videojs.extend(Plugin, {
    constructor: function (player, options) {
        console.log(123123);
        let settings
        player.removeClass('tt-vplayer-visibility')
        let loadingCountdown
        let isCounting = false
        let isDone = false
        let isPlaying = false
        let playDone = false
        let timer = 0
        var isElementInViewport,
            checkIsVisible,
            handler,
            StartCountDown,
            cleanup,
            setup

        // var userAgent = navigator.userAgent;
        // if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i) || userAgent.match(/Android/i)) {
        // 	return;
        // }

        if (videojs.VERSION.split('.')[0] >= 5) {
            settings = videojs.mergeOptions(defaults, options)
        } else {
            settings = videojs.util.mergeOptions(defaults, options)
        }

        // Translations
        videojs.addLanguage('vi', {
            'Starts in ...': 'Tự động phát sau ',
            '{{title}} is starting in ...': '{{title}} sẽ phát sau',
        })

        setup = function () {
            let csspl = document.createElement('link'),
                cssplel = document.getElementsByTagName('link'),
                cssplnode = cssplel[cssplel.length - 1];
            csspl.href = '/static/css/scrollCountDownPlugin.css';
            csspl.type = 'text/css';
            csspl.rel = 'stylesheet';
            cssplnode.parentNode.insertBefore(csspl, cssplnode)
            let countdownText
            loadingCountdown = document.createElement('div')
            loadingCountdown.className = 'vjs-loading-countdown'
            loadingCountdown.style = 'background-color: black; opacity: 0.6; display:none;'
            let textCountdown = document.createElement('div')
            textCountdown.className = 'vjs-countdown'

            if (player.mediainfo && player.mediainfo.name && player.mediainfo.name !== '') {
                countdownText = player.localize('{{title}} is starting in ...').replace('{{title}}', player.mediainfo.name)
            } else {
                countdownText = player.localize('Starts in ...')
            }

            // textCountdown.innerHTML = '<span>' + countdownText + '</span>';
            // loadingCountdown.appendChild(textCountdown)

            let loadingDoubleRing = document.createElement('div')
            loadingDoubleRing.className = 'vjs-loading-double-ring'
            loadingDoubleRing.innerHTML = '<div></div><div></div>'

            let spanOverlaySeconds = document.createElement('span')
            spanOverlaySeconds.className = 'vjs-overlay-seconds'
            loadingCountdown.appendChild(spanOverlaySeconds)
            loadingCountdown.appendChild(loadingDoubleRing)

            player.el().appendChild(loadingCountdown)
            checkIsVisible(player.el())
        }

        checkIsVisible = function (el) {

            if (!isElementInViewport(el)) {
                if (!isCounting && isDone) {
                    isPlaying = false
                    player.pause()
                    cleanup()
                }

                if (isCounting) {
                    cleanup()
                }

            } else if (isElementInViewport(el)) {
                if (!isDone && !isCounting) {
                    if (settings.time === 0) {
                        if (settings.mute && !playDone) {
                            player.muted(true)
                        }
                        player.play()
                    } else {
                        StartCountDown()
                    }
                } else {

                }

                if (!isCounting && !isPlaying && !playDone) {
                    player.play()
                }

            }

        }

        StartCountDown = () => {
            let secondsDisplaying = loadingCountdown.querySelector('.vjs-overlay-seconds')
            let count = settings.time
            secondsDisplaying.innerHTML = count
            player.addClass('vjs-counting')
            isCounting = true
            timer = window.setInterval(() => {
                count = count - 1
                secondsDisplaying.innerText = count
                if (count === 0) {
                    if (player.play() !== undefined) {
                        player.play().then(_ => {
                            // Autoplay started
                            player.muted(false)
                        }).catch(error => {
                            // Autoplay was prevented.
                            // Show a "Play" button so that user can start playback.
                            player.muted(true)
                            player.play()
                        })
                    }
                }
            }, 1000)
        }

        cleanup = () => {
            isCounting = false
            player.removeClass('vjs-counting')
            window.clearInterval(timer)
        }

        // Add event listeners
        // TODO: If mobile attach to touchstart or something?
        player.one('loadstart', () => {
            setup()
            handler = () => {
                return checkIsVisible(player.el())
            }
            if (window.addEventListener) {
                window.addEventListener('DOMContentLoaded', handler, false)
                window.addEventListener('load', handler, false)
                window.addEventListener('scroll', handler, false)
                window.addEventListener('resize', handler, false)
            } else if (window.attachEvent) {
                window.attachEvent('onDOMContentLoaded', handler)
                window.attachEvent('onload', handler)
                window.attachEvent('onscroll', handler)
                window.attachEvent('onresize', handler)
            }

            loadingCountdown.addEventListener('click', () => {
                isDone = true
                player.muted(true)
                player.play()
                cleanup()
            })

            // Cancel if playback starts
            player.on('play', () => {
                isPlaying = true
                isDone = true
                createBtnUnmute(player)
                if (isCounting) {
                    cleanup()
                }
            })

            player.on("click", function (e) {
                if (!isPlaying && !playDone) {
                    playDone = true
                } else if (isPlaying && !playDone) {
                    playDone = true
                } else if (!isPlaying && playDone) {
                    playDone = false
                } else if (isPlaying && playDone) {
                    playDone = false
                }
            })

            player.on(['waiting', 'pause'], () => {
                isPlaying = false
            })

            player.on('ended', () => {
                playDone = true
            })

        })

        // http://stackoverflow.com/a/7557433/740233
        isElementInViewport = (el) => {
            var rect = el.getBoundingClientRect()
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            )
        }

        function createBtnUnmute(player) {
            if (!player.muted() && isPlaying && !player.increaseVolumeInterval && player.increaseVolume === undefined) {
                player.volume(0.3)
                player.increaseVolumeInterval = setInterval(() => {
                    if (player.volume() <= 0.7) {
                        var volume = player.volume() * 1000 + 11
                        player.volume(volume / 1000)
                    } else {
                        clearInterval(player.increaseVolumeInterval)
                        player.increaseVolumeInterval = 0
                    }
                }, 100)
                player.increaseVolume = true
            } else if (player.muted() && player.increaseVolumeInterval) {
                clearInterval(player.increaseVolumeInterval)
                player.increaseVolumeInterval = 0
                player.volume(0)
                player.increaseVolume = false
            }
        }
    }
})