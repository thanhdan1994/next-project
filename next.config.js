const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    distDir: '.next',
    target: 'serverless',
    generateEtags: false,
    env: {
        DOMAIN_API_GATEWAY: 'https://apittc.tuoitre.vn',
        ASSETS_DOMAIN: isProd ? 'https://sstaticcuoi-tuoitre.cdn.vccloud.vn' : 'https://sstaticcuoi-tuoitre.cdn.vccloud.vn'
    }
};