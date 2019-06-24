import * as Constant from './Constant';

export const echoThumbnail = (size, thumb_link) => {
    let thumb = Constant.ORIGIN_ASSETS + "/ttc/i/" + size + "/" + thumb_link;
    if (size === 'r') {
        thumb = Constant.ORIGIN_ASSETS + "/ttc/" + size + "/" + thumb_link;
    }
    return thumb;
}

export const buildLinkObject = (slug, id) => {
    var page = 'post';
    if (slug.search('/video/') !== -1) {
        page = 'video-detail';
    }
    return `/${page}?id=${id}`;
}