export const sampleChats = [
    {
        avatar: ['img'],
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
                url: 'img'
            }
        ],
        content: 'qertjkjsl sdfljsf sdlfsf',
        _id: '123',
        sender: {
            _id: '1234',
            name: 'Rohit'
        },
        chat: 'chatId',
        createdAt: new Date()
    },
    {
        attachment: [
            {
                public_Id: 'qwe',
                url: 'img'
            }
        ],
        content: 'qertjkjsl sdfljsf sdlfsf',
        _id: '123',
        sender: {
            _id: '123',
            name: 'Roshan'
        },
        chat: 'chatId',
        createdAt: new Date()
    }

]
