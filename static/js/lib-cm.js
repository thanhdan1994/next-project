var settings = {
    appId: 15,
};

/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function() {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer().then(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function(reason) {
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

getUserIP(function(ip){
    $("input[name=hidUserIp]").val(ip);
});

function setCookie(cname, cvalue, exminute) {
    var d = new Date();
    d.setTime(d.getTime() + (exminute*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function isEmail(email)
{
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isValidInfo(n, e)
{
    if (n.length > 0 && isEmail(e)) {
        return true;
    } else {
        return false;
    }
}

function isValidContent(c)
{
    if (c.length > 10) {
        return {
            'success' : true,
            'message' : false
        };
    } else {
        if (c.length <= 10 && c) {
            return {
                'success' : false,
                'message' : 'Nội dùng bình luận phải lớn hơn 10 kí tự'
            };
        } else {
            return {
                'success' : false,
                'message' : 'Bạn chưa nhập nội dung bình luận'
            };
        }
    }
}

function isLogin()
{
    if (getCookie('infoUser')) {
        return true;
    } else {
        return false;
    }
}
// function p(n) {
//     if (n !== null) {
//         var r = n.comment_count
//             , u = n.object_id
//             , t = $("a[data-comment='" + u + "']");
//         if (r > 0) {
//             t.parent().find(".number").text(r);
//             t.parent().find(".outer-icon").show();
//         }
//     }
// }
//
// i = $("a[data-comment]");
// n = [];
// i.each(function() {
//     var t = $(this).data("comment"), i;
//     n.indexOf(t) === -1 && n.push(t);
//     i = $(this)
// });
// n.length > 0 ? $.ajax({
//     url: appSettings.domainApi + "/comment/getcountcomment-listobject",
//     data: {
//         ids: n.join(",")
//     },
//     type: "POST",
//     success: function(n) {
//         var t = n, i;
//         if (t.Success) {
//             if (t.Data.length > 0)
//                 for (i = 0; i < t.Data.length; i++)
//                     p(t.Data[i])
//         } else
//             console.log(res)
//     },
//     error: function(n) {
//         console.log(n)
//     }
// }) : i.removeAttr("data-comment")

var scm = function (o, t, e, c, co, p, u, b) {
    $.ajax({
        url: 'http://pc.tuoitrecuoi.vn/comment/sendcomment',
        type: 'POST',
        dataType: 'json',
        data: {
            object_id: o,
            app_id: settings.appId,
            object_title: t,
            object_url: e,
            term_id: c,
            parent_id: p,
            content: co,
            author_ip: u,
        },
        success: function (data) {
            alert(data.message + '. Cám ơn!');
            b.val('');
        },
        error : function () {
            alert("Hệ thống bình luận đang được bảo trì, bạn vui lòng quay lại sau!");
        }
    });
}, lcm = function (o, c, u, t) {
    var n = t.text();
    var na = 'like_'+o+'_'+c;
    if (getCookie(na) !== "") {
        alert('Bạn đã like bình luận này rồi. Cám ơn!');
    } else {
        $.ajax({
            url: 'http://pc.tuoitrecuoi.vn/comment/likecomment',
            type: 'POST',
            data: {
                'c': c,
                'app_id': settings.appId,
                'object_id': o,
                'author_ip': u,
            },
            dataType: 'json',
            success: function (data) {
                if (data.success === true) {
                    t.text(parseInt(n) + 1);
                    setCookie(na, na, 1440); // 1 ngày
                }
            }
        });
    }
}, scmg = function () {
    $.ajax({
        url: 'http://pc.tuoitrecuoi.vn/comment/sendcomment/reactjs',
        type: 'POST',
        dataType: 'json',
        data: {
            object_id: $("input[name=hidCObjectId]").val(),
            app_id: settings.appId,
            object_title: $("input[name=hidCObjectTitle]").val(),
            object_url: $("input[name=hidCObjectUrl]").val(),
            term_id: $("input[name=hidCTermId]").val(),
            author_name: $("input[name=inputName]").val(),
            author_email: $("input[name=inputEmail]").val(),
            parent_id: $("input[name=hidCParentId]").val(),
            content: $("input[name=hidCContent]").val(),
            author_ip: $("input[name=hidUserIp]").val(),
        },
        success: function (data) {
            alert(data.message + '. Cám ơn!');
            $('#modalCom_1').modal('hide');
            $("textarea").val('');
        },
        error : function () {
            alert("Hệ thống bình luận đang được bảo trì, bạn vui lòng quay lại sau!");
            $('#modalCom_1').modal('hide');
        }
    });
};

$(document).on("click", '.btn-send-1', function () {
    var n = $("input[name=inputName]").val(), t = $("input[name=inputEmail]").val();
    if (isValidInfo(n, t)) {
        scmg();
    } else {
        alert("Tên hoặc email không đúng");
    }
});
