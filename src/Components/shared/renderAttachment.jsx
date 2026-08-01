import React from 'react'
import { transformImage } from '../../Lib/features';
import { FileOpen as FileOpenIcon } from '@mui/icons-material';

const renderAttachment = (file, url) => {

    switch (file) {
        case 'Video':
            return <video src={url} preload='none' width={'200px'} controls />

        case 'Image':
            return <img src={transformImage(url, 200)} alt="Attachment" style={{
                width: '200px',
                height: '150px',
                objectFit: 'contain',

            }} />

        case 'Audio':
            return <audio src={url} preload='none' controls />

        default:
            return <FileOpenIcon />
    }
}

export default renderAttachment