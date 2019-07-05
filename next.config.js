const dotEnvResult = require('dotenv').config()

if (dotEnvResult.error) {
    throw dotEnvResult.error
}

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    distDir: '.next',
    target: 'serverless',
    generateEtags: false,
    env: {
        DOMAIN_API_GATEWAY: 'https://apittc.tuoitre.vn',
        ASSETS_DOMAIN: isProd ? 'https://sstaticcuoi-tuoitre.cdn.vccloud.vn' : 'https://sstaticcuoi-tuoitre.cdn.vccloud.vn',
        TTC_TERM_VIDEO: process.env.TTC_TERM_VIDEO,
        TTC_TERM_DOI_CUOI: process.env.TTC_TERM_DOI_CUOI,
        TTC_TERM_TIN_TUC: process.env.TTC_TERM_TIN_TUC,
        TTC_TERM_GIAI_TRI: process.env.TTC_TERM_GIAI_TRI,
        TTC_TERM_SONG_TRE: process.env.TTC_TERM_SONG_TRE,
        TTC_TERM_THE_THAO: process.env.TTC_TERM_THE_THAO,
        TTC_TERM_BIEM_HOA: process.env.TTC_TERM_BIEM_HOA,
    }
};