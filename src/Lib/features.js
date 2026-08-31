import moment from "moment"

const fileFormat = (url = '') => {

    const fileExt = url.split('.').pop()

    if (fileExt === 'mp4' || fileExt === 'webn' || fileExt === 'ogg') return 'Video'
    if (fileExt === 'mp3' || fileExt === 'wav') return 'Audio'
    if (fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'png' || fileExt === 'gif') return 'Image'

    return 'File'
}

const transformImage = (url = '', width = 100) => url

const getLast7Days = () => {

    const currentDate = moment()

    const last7Days = []

    for (let i = 0; i < 7; i++) {
        const dayDate = currentDate.clone().subtract(i, 'days').format('dddd')
        last7Days.unshift(dayDate)
    }

    return last7Days
}

export {
    fileFormat,
    transformImage,
    getLast7Days
}
