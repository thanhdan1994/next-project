import React, { Component } from 'react'
// import { Modal } from 'react-bootstrap';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import validator from 'validator';
import axios from 'axios';

class Comment extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.handleSendComment = this.handleSendComment.bind(this);
        this.handleSendCommentModal = this.handleSendCommentModal.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.state = {
            name: '',
            email: '',
        };
    }

    handleSendComment() {
        const { cookies } = this.props;
        // cookies.get('isLogin') ? '' : $('#modalCom_1').modal('show')

        $.ajax({
            method: 'POST',
            url: "http://pc.tuoitrecuoi.vn/comment/sendcomment",
            // data: {
            //     object_id: 300,
            //     app_id: 15,
            //     // object_title: 'Ăn đất, ăn tất, ăn như xáng xúc',
            //     // object_url: 'https://sbetacuoi.tuoitre.vn/ttc/tin-tuc/doi-cuoi/20190523/an-dat-an-tat-an-nhu-xang-xuc/522.html',
            //     // term_id: 2,
            //     // author_name: name,
            //     // author_email: email,
            //     // content: 'hihi',
            //     // author_ip: '192.168.60.152',
            // },
            success: function(data) {
                console.log(data)
            }
        })
    }

    handleSendCommentModal(e) {
        let name = this.state.name;
        let email = this.state.email;
        $.ajax({
            method: 'POST',
            url: "http://pc.tuoitrecuoi.vn/comment/sendcomment",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: {
                object_id: 300,
                app_id: 15,
                // object_title: 'Ăn đất, ăn tất, ăn như xáng xúc',
                // object_url: 'https://sbetacuoi.tuoitre.vn/ttc/tin-tuc/doi-cuoi/20190523/an-dat-an-tat-an-nhu-xang-xuc/522.html',
                // term_id: 2,
                // author_name: name,
                // author_email: email,
                // content: 'hihi',
                // author_ip: '192.168.60.152',
            },
            success: function(data) {
                console.log(data)
            }
        })
        $('#modalCom_1').modal('hide')
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value })
    }

    handleChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    render() {
        return (
            <div className="block-comment">
                <div className="comment-write">
                    <h4>Viết bình luận</h4>
                    <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây" />
                    <div className="text-right">
                        <button className="btn-comment" onClick={this.handleSendComment}><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Gửi bình luận</button>
                    </div>
                </div>
                <div className="block-comment">
                    <div className="wrapper-cm">
                        <div className="plugin-comment">
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalCom_1" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <h3 className="title-modal">Bình luận</h3>
                                <form className="frm-general">
                                    <div className="form-group">
                                        <label>Tên :</label>
                                        <input className="form-control" type="text" onChange={this.handleChangeName} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email :</label>
                                        <input className="form-control" type="email" onChange={this.handleChangeEmail} />
                                    </div>
                                    <div className="outer-btn-social">
                                        <div className="col">
                                            <a className="btn-send-1" onClick={this.handleSendCommentModal}>Gửi</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withCookies(Comment)