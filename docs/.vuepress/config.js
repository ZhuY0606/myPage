module.exports = {
    base:'/myPage/',
    title:'朱英',
    description:'专注于记录技术点滴',
    themeConfig: {
        nav: [
            {text: 'Android', link: '/android/'},
            {text: 'Flutter', link: '/flutter/'},
            {text: '其他', link: '/other/'},
            {text: 'Github', link: 'https://github.com/kingkadienm'},
        ],
        sidebar: {
            '/android/': [
                '',
                'custom_view',
                'aidl',
                '面试',
                '适配'
            ],
            '/flutter/': [
                '',
                'Flutter2Android_1',
                'Flutter2Android_2',
                'Flutter_plugin'
            ],
            '/python/': [
                '',
            ],
            '/goland/': [
                '',
            ],
            '/vue/': [
                '',
                'about'
            ],
            '/react/': [
                '',
                'react'
            ],
            '/js/': [
                ''
            ],
            '/css/': [
                ''
            ],
            '/other/': [
                '',
                'prettier'
            ]
        }
    },
    markdown: {
        lineNumbers: true
    }
}
