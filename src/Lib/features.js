const fileFormat = (url = '') => {

    const fileExt = url.split('.').pop()

    if (fileExt === 'mp4' || fileExt === 'webn' || fileExt === 'ogg') return 'Video'
    if (fileExt === 'mp3' || fileExt === 'wav') return 'Audio'
    if (fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'png' || fileExt === 'gif') return 'Image'

    return 'File'
}


const transformImage = (url = '', width = 100) => url

export {
    fileFormat,
    transformImage
}
