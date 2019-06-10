import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import validator from 'validator';

class Comment extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.handleClose = this.handleClose.bind(this);
        this.handleSendComment = this.handleSendComment.bind(this);
        this.handleSendCommentModal = this.handleSendCommentModal.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.state = {
            showModal: false,
            name: '',
            email: '',
        };
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleSendComment() {
        const { cookies } = this.props;
        cookies.get('isLogin') ? '' : this.setState({ showModal: true })
    }

    handleSendCommentModal() {
        let name = this.state.name;
        let email = this.state.email;
        if (validator.isAlpha(name) && validator.isEmail(email)) {
            fetch('https://mywebsite.com/endpoint/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstParam: 'yourValue',
                    secondParam: 'yourOtherValue',
                }),
            });
        } else {
            alert("Invalid")
        }
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
                {this.state.showModal ? "hehe" : "hihi"}
                <div className="comment-write">
                    <h4>Viết bình luận</h4>
                    <textarea className="box-reply-cm" data-toggle="modal" data-target="#modalCom_1" placeholder="Viết bình luận của bạn ở đây" />
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
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <button onClick={this.handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <Modal.Body>
                        <h3 className="title-modal">Bình luận</h3>

                        <form className="frm-general">
                            <div className="form-group">
                                <label>Tên :</label>
                                <input className="form-control" onChange={this.handleChangeName} type="text" />
                            </div>
                            <div className="form-group">
                                <label>Email :</label>
                                <input className="form-control" onChange={this.handleChangeEmail} type="email" />
                            </div>
                            <div className="outer-btn-social">
                                <div className="col">
                                    <a className="btn-send-1" onClick={this.handleSendCommentModal}>Gửi</a>
                                </div>
                            </div>
                        </form>

                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default withCookies(Comment)