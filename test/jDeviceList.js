// 依據裝置訊息收集冊資料

var jDeviceList = [
        {
            os: 'Win 10',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.108 Safari/537.36',
        },
        {
            os: 'Win 10',
            browser: 'Firefox',
            info: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0',
        },
        {
            os: 'Win 10',
            browser: 'Safari',
            info: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
        },
        {
            os: 'Win 10',
            browser: 'Oepra',
            info: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69',
        },
        {
            os: 'Win 10',
            browser: 'Edge',
            info: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
        },
        {
            os: 'Win 7',
            browser: 'IE',
            info: 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
        },
        {
            os: 'Win 7',
            browser: 'IE8',
            info: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)',
        },
        {
            os: 'HTC_M9pw',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (Linux; Android 5.0.2; HTC_M9pw Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.91 Mobile Safari/537.36',
        },
        {
            os: 'HTC_M9pw',
            browser: 'Oepra',
            info: 'Mozilla/5.0 (Linux; Android 5.0.2; HTC_M9pw Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Mobile Safari/537.36 OPR/34.0.2044.98679',
        },
        {
            os: 'HTC_M9pw',
            browser: 'FB WebView',
            info: 'Mozilla/5.0 (Linux; Android 5.0.2; HTC_M9pw Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/68.0.0.37.59;]',
        },
        {
            os: 'ASUS_Z002',
            browser: 'ASUSWeb',
            info: 'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_Z002 Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36',
        },
        {
            os: 'ASUS_Z002',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_Z002 Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.91 Mobile Safari/537.36',
        },
        {
            os: 'Windows',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
        },
        {
            os: 'HTC_M910x',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (Linux; Android 6.0.1; HTC_M910x Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.91 Mobile Safari/537.36',
        },
        {
            os: 'HTC_M910x',
            browser: 'HTCWeb',
            info: 'Mozilla/5.0 (Linux; Android 6.0.1; HTC_M910x Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36',
        },
        {
            os: 'HTC',
            browser: 'Firefox',
            info: 'Mozilla/5.0 (Android; Mobile; rv:34.0) Gecko/34.0 Firefox/34.0',
        },
        {
            os: 'SAMSUNG S6H',
            browser: 'SamsungBrowser',
            info: 'Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG SM-G9250 Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36',
        },
        {
            os: 'Mac',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
        },
        {
            os: 'Mac',
            browser: 'Safari',
            info: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/601.4.4 (KHTML, like Gecko) Version/9.0.3 Safari/601.4.4',
        },
        {
            os: 'iPad',
            browser: 'Safari',
            info: 'Mozilla/5.0 (iPad; CPU OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1',
        },
        {
            os: 'iPad',
            browser: 'Puffin',
            info: 'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW) AppleWebKit/537.36 (KHTML, like Gecko)  Chrome/30.0.1599.114 Safari/537.36 Puffin/4.7.3IT',
        },
        {
            os: 'iPad',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (iPad; CPU OS 9_2_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/49.0.2623.73 Mobile/13D15 Safari/601.1.46',
        },
        {
            os: 'iPhone',
            browser: 'Safari',
            info: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1',
        },
        {
            os: 'iPhone',
            browser: 'Chrome',
            info: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/48.0.2564.104 Mobile/13D15 Safari/601.1.46',
        },
        {
            os: '未紀錄',
            browser: '未知（經 Slack 轉址之中介）',
            info: 'Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)',
        },
    ];

