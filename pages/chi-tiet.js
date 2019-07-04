import fetch from 'isomorphic-unfetch';
import HeadHome from '../components/home/HeadHome';

function ChiTiet(props) {
    function handleSendComment(e) {
        fetch('/comment/sendcomment', {
            method: 'POST',
            body: JSON.stringify({oid: '123', title: 'day la title', name: 'day la name'})

        }).then(res => console.log(res))
    }
    const ldJson = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "ttc.vn - Tin tức 24h, hình ảnh ấn tượng",
        "alternateName": "Cập nhật tin tức mới và nóng nhất về Đời sống - Xã hội, Kinh tế, Thế giới, Thể thao, Giải trí, Công nghệ và nhiều lĩnh vực khác…",
        "dateModified": "",
        "url": ""
      }
    return (
        <>
            <button className="btn btn-success" onClick={e => handleSendComment(e)}>Send Comment</button>
        </>
    )
}
ChiTiet.getInitialProps = async function () {
    const headers = {
        'authorization': 'Bearer jx76-VNClfMIEZL9sewMJgz0boOHyOJvakUER8ne',
        'req-from': 'frontend',
    }

    var apiRequest1 = fetch('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=1', {headers}).then(function (response) {
        return response.json()
    });
    var apiRequest2 = fetch('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=2', {headers}).then(function (response) {
        return response.json()
    });
    var combinedData = { "apiRequest1": {}, "apiRequest2": {} };
    await Promise.all([apiRequest1, apiRequest2]).then(function (values) {
        console.log(values[0])
        combinedData["apiRequest1"] = values[0];
        combinedData["apiRequest2"] = values[1];
    });
    return combinedData

}
export default ChiTiet