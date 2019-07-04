$(document).ready(function (e) {
    var xhttp = new XMLHttpRequest();
    var oid = document.getElementsByName('hidObjectId')[0].value;
    var wrapperComment = document.getElementsByClassName('wrapper-cm')[0];

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var da = JSON.parse(this.responseText);
            if (da.number > 0) {
                wrapperComment.style.display = 'block';
                var toolComment = document.getElementsByClassName('tool-comment')[0];
                var h4 = document.createElement('h4');
                h4.innerHTML = `Bình luận (${da.number})`;
                toolComment.prepend(h4);
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var l =  JSON.parse(this.responseText).data;
                        l.forEach(function (d, k) {
                            renderItem(d);
                        });
                    }
                };
                xhttp.open("GET", "https://sbetacuoi.tuoitre.vn/comment/getlist-comment?aid=15&oid="+oid+"&page=1&size=2&sort="+$("input[name=hidFilter]").val(), true);
                // xhttp.setRequestHeader("X-CSRF-TOKEN", settings.csrf);
                xhttp.send();
            } else {
                $(".wrapper-cm .plugin-comment").css('display', 'none');
            }
        }
    };
    xhttp.open("GET", "https://sbetacuoi.tuoitre.vn/comment/getcount-comment?aid=15&oid="+oid, true);
    // xhttp.setRequestHeader("X-CSRF-TOKEN", settings.csrf);
    xhttp.send();
});

$(document).on("click", '.media-body .reply', function (e) {
    $(".media-body .reply .tool-like").removeClass("active");
    if ($(this).parent(".tool-like").hasClass("active")) {
        $(this).parent(".tool-like").removeClass("active");
    } else {
        $(this).parent(".tool-like").addClass("active");
    }
});

document.getElementById('viewmorecm').onclick = function (e) {
    var m = this;
    var oid = document.getElementsByName('hidObjectId')[0].value;
    var page = this.parentNode.getAttribute('data-pagecm');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var da = JSON.parse(this.responseText).data;
            if (da.length > 0) {
                da.forEach(function (d, k) {
                    renderItem(d);
                });
            } else {
                m.style.display = 'none';
            }
        }
    };
    var pageNext = parseInt(page) + 1;
    this.parentNode.setAttribute('data-pagecm', pageNext);
    xhttp.open("GET", "https://sbetacuoi.tuoitre.vn/comment/getlist-comment?aid="+settings.appId+"&oid="+oid+"&page="+page+"&size=2&sort="+$("input[name=hidFilter]").val(), true);
    xhttp.send();
};

function renderItem(d) {
    var htmlComment = '';
    htmlComment += `<div class="comment media"><img src="${d.author_avatar}" alt="" class="mr-3">
                    <div class="media-body">
                        <div class="inner-cm">
                            <h5 class="mt-0">${d.author_name}</h5>
                            <p>${d.content_modified}</p>
                            <div class="tool-like" data-cmid="${d.id}">
                                <span class="like"><i class="fa fa-heart-o" aria-hidden="true"></i> <span class="number-like">${d.like_number}</span></span>
                                <span class="reply"><i class="fa fa-paper-plane-o" aria-hidden="true"></i> Trả lời</span>
                                <span class="count">${d.child_count} trả lời</span>
                                <div class="box-reply-cm">
                                    <textarea class="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự"></textarea>
                                    <div class="text-right">
                                        <button class="btn-comment"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>`;
    var parent_id = d.id;
    if (d.child_count > 0) {
        htmlComment += `<div id="comment_child" data-pagecm="1" data-parent="${d.id}">`;
        d.child.forEach(function (d, k) {
            htmlComment += `<div class="media mt-3">
            <img src="${d.author_avatar}" alt="" class="mr-3">
            <div class="media-body">
                <h5 class="mt-0">${d.author_name}</h5>
                <p>${d.content_modified}</p>
                <div class="tool-like" data-cmid="${d.id}" data-cmpid="${parent_id}">
                    <span class="like"><i class="fa fa-heart-o" aria-hidden="true"></i> <span class="number-like">${d.like_number}</span></span>
                </div>
             </div>
        </div>`;
        });
    }
    htmlComment += '</div>';
    if(parseInt(d.child_count) > 2) {
    htmlComment += `<a id ="viewmore" style="float:right;color: #9b9b9b" onclick="getCommentChild(this, `+d.id+`)" href="javascript:;" ><span class="icon">Xem thêm trả lời + </span></a><br>`;
}
    var c = document.getElementById('comment-render');
    var t = document.createElement('div');
    t.setAttribute('class', 'item-comment');
    t.innerHTML = htmlComment;
    var l = c.getElementsByTagName('a');
    c.insertBefore(t, l[c.getElementsByTagName('a').length - 1]);
}

$(document).on("click", '.comment-write .btn-comment', function () {
    var boxContent = $(this.parentNode).siblings("textarea");
    var content = boxContent.val();
    var o = $("input[name=hidObjectId]").val(), t = $("input[name=hidObjectTitle]").val(),
        c = $("input[name=hidTermId]").val(), u = $("input[name=hidUserIp]").val(),
        p = $(this).parents('.tool-like').attr("data-cmid"), co = content, b = boxContent,
        e = window.location.href;
    var validContent = isValidContent(co);
    if (validContent.success === true) {
        if (isLogin()) {
            scm(o, t, e, c, co, p, u ,b);
        } else {
            $('#modalCom_1').modal('show');
            $("input[name=hidCContent]").val(co);
            $("input[name=hidCParentId]").val(p);
            $("input[name=hidCObjectId]").val(o);
            $("input[name=hidCObjectTitle]").val(t);
            $("input[name=hidCTermId]").val(c);
            $("input[name=hidCObjectUrl]").val(e);
        }
    } else {
        alert(validContent.message);
    }
});

$(document).on("click", '.tool-like .like', function () {
    var t = $(this).find('.number-like'),c = $(this).parents('.tool-like').attr("data-cmid"),
        o = $("input[name=hidObjectId]").val(), u = $("input[name=hidUserIp]").val();
    lcm(o, c, u, t);
});

$(document).on("click", '.box-reply-cm .btn-comment', function () {
    var boxContent = $(this.parentNode).siblings("textarea");
    var content = boxContent.val();
    var o = $("input[name=hidObjectId]").val(), t = $("input[name=hidObjectTitle]").val(),
        c = $("input[name=hidTermId]").val(), u = $("input[name=hidUserIp]").val(),
        p = $(this).parents('.tool-like').attr("data-cmid"), co = content, b = boxContent,
        e = window.location.href;
    var validContent = isValidContent(co);
    if (validContent.success === true) {
        if (isLogin()) {
            scm(o, t, e, c, co, p, u ,b);
        } else {
            $('#modalCom_1').modal('show');
            $("input[name=hidCContent]").val(co);
            $("input[name=hidCParentId]").val(p);
            $("input[name=hidCObjectId]").val(o);
            $("input[name=hidCObjectTitle]").val(t);
            $("input[name=hidCTermId]").val(c);
            $("input[name=hidCObjectUrl]").val(e);
        }
    } else {
        alert(validContent.message);
    }
});

$(".tool-comment a").on('click', function () {
    $(".tool-comment a").removeClass('active');
    $(this).addClass('active');
    var fi = $(this).attr('data-filter'), o = $("input[name=hidObjectId]").val();
    $("input[name=hidFilter]").val(fi);
    $("#comment-render div").remove('.item-comment');
    $.ajax({
        url: '/comment/getlist-comment',
        type: 'GET',
        dataType: 'json',
        headers: {
            'X-CSRF-TOKEN': settings.csrf
        },
        data: {
            aid: settings.appId,
            oid: o,
            page: 1,
            size: 2,
            sort: fi,
        },
        success: function (da) {
            da.data.forEach(function (d, k) {
                renderItem(d);
            });
        }
    })
    $("#viewmorecm").show();
    $("#comment-render").attr('data-pagecm', 2);
});
function getCommentChild(e, id) {
    var oid = document.getElementsByName('hidObjectId')[0].value;
    var pid = $("#comment_child").attr("data-parent");
    var page = $("#comment_child").attr("data-pagecm");
    var xhttp = new XMLHttpRequest();
    page = parseInt(page) + 1;
    if(page > 1) {
        xhttp.open("GET", "/comment/getlist-comment?aid="+settings.appId+"&oid="+oid+"&page="+page+"&pid="+pid+"&size=2&sort="+$("input[name=hidFilter]").val(), true);
        xhttp.send();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                var da = JSON.parse(this.responseText).data;
                if (da.length > 0) {
                    da.forEach(function (d, k) {
                        renderItemChild(d, id);
                    });
                } else {
                   $("#viewmore").hide();
                }
            }
        };
        $("#comment_child").attr('data-pagecm', page);
    }
}
function renderItemChild(d, id) {
    var htmlComment = '';
    htmlComment +=`<div class="media mt-3">
            <img src="${d.author_avatar}" alt="" class="mr-3">
            <div class="media-body">
                <h5 class="mt-0">${d.author_name}</h5>
                <p>${d.content_modified}</p>
                <div class="tool-like" data-cmid="${d.id}" data-cmpid="${d.parent_id}}">
                    <span class="like"><i class="fa fa-heart-o" aria-hidden="true"></i> <span class="number-like">${d.like_number}</span></span>
                </div>
             </div>
        </div>`;
$("#comment_child").append(htmlComment);
}
