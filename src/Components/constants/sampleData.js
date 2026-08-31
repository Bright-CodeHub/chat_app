export const sampleChats = [
    {
        avatar: ['img', 'img'],
        name: 'Orange',
        _id: '1',
        groupChat: false,
        members: ['1', '2']
    },
    {
        avatar: ['img', 'img', 'img'],
        name: 'Apple',
        _id: '2',
        groupChat: true,
        members: ['1', '2']
    },
    {
        avatar: ['img', 'img', 'img',],
        name: 'Grapes',
        _id: '3',
        groupChat: true,
        members: ['1', '2']
    },
    {
        avatar: ['img', 'img', 'img', 'img', 'img'],
        name: 'Banana',
        _id: '4',
        groupChat: true,
        members: ['1', '2', '3']
    },

]

export const sampleUsers = [
    {
        avatar: 'avatar1',
        name: 'user 1',
        _id: 1
    },
    {
        avatar: 'avatar2',
        name: 'user 2 222222222222222222',
        _id: 2
    },
]

export const sampleNotification = [
    {
        sender: {
            avatar: 'avatar1',
            name: 'user 1',
        },
        _id: 1
    },
    {
        sender: {
            avatar: 'avatar2',
            name: 'user 2',
        },
        _id: 2
    }
]

export const sampleMessage = [
    {
        attachment: [
            {
                public_Id: 'qwe',
                url: 'img.jpg'
            }
        ],
        content: 'qertjkjsl sdfljsf',
        _id: '123',
        sender: {
            _id: '1234',
            name: 'Rohit'
        },
        chat: 'chatId',
        createdAt: new Date(new Date().setDate(new Date().getDate() - 2))
    },
    {
        attachment: [
            {
                public_Id: 'qwe',
                url: 'img.mp3'
            }
        ],
        content: 'qertjkjsl sdfljsf sdlfsf',
        _id: '123',
        sender: {
            _id: '123',
            name: 'Roshan'
        },
        chat: 'chatId',
        createdAt: new Date(new Date().setHours(new Date().getHours() - 5))
    }

]

export const dashboardData = {
    user: [
        {
            name: 'user 1',
            avatar: 'avatar1',
            _id: '1',
            username: 'user_1',
            friends: 5,
            groups: 2
        },
        {
            name: 'user 2',
            avatar: 'avatar1',
            _id: '2',
            username: 'user_2',
            friends: 10,
            groups: 4
        },
    ],

    chats: [
        {
            name: 'Group 1',
            avatar: ['avatar 1'],
            _id: '1',
            groupChat: true,
            members: [{ _id: '1', avatar: 'avatar 1' }, { _id: '2', avatar: 'avatar 2' }],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: 'user 1',
                avatar: 'avatar 1'
            }
        },
        {
            name: 'Group 2',
            avatar: ['avatar 2'],
            _id: '2',
            groupChat: true,
            members: [{ _id: '1', avatar: 'avatar 1' }, { _id: '2', avatar: 'avatar 2' }],
            totalMembers: 2,
            totalMessages: 40,
            creator: {
                name: 'user 2',
                avatar: 'avatar 1'
            }
        }
    ],

    messages: [
        {
            attachments: [
                {
                    id: '1',
                    url: 'avatar 1'
                }
            ],
            content: 'qwkld jfdfjf sdfksdflks',
            _id: '1',
            sender: {
                avatar: 'avatar 1',
                name: 'user 1'
            },
            chat: 'chatId',
            groupChat: false,
            createdAt: Date.now()
        },
        {
            attachment: [],
            content: 'qwkld jfdfjf ',
            _id: '2',
            sender: {
                avatar: 'avatar 2',
                name: 'user 2'
            },
            groupChat: false,
            chat: 'chatId',
            createdAt: Date.now()
        },
    ]
}

