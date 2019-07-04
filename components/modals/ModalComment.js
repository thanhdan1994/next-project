import { useState } from 'react'
function ModalComment() {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    function handleSendCommentModal() {
        console.log(document.getElementsByName('hidContent')[0].value)
        alert(email + " " + name);
    }
    return (
        <div className="modal fade" id="modalCom_1" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                        <h3 className="title-modal">Bình luận</h3>
                        <form className="frm-general">
                            {/* <input type="hidden" name="hidContent"/>
                            <input type="hidden" name="hidOid"/>
                            <input type="hidden" name="hidPid"/> */}
                            <input type="hidden" name="hidCContent" />
                            <input type="hidden" name="hidCParentId" />
                            <input type="hidden" name="hidCObjectId" />
                            <input type="hidden" name="hidCObjectTitle" />
                            <input type="hidden" name="hidCTermId" />
                            <input type="hidden" name="hidCObjectUrl" />
                            <div className="form-group">
                                <label>Tên :</label>
                                {/* <input className="form-control" type="text" onChange={e => setName(e.target.value)} /> */}
                                <input className="form-control" type="text" name="inputName" />
                            </div>
                            <div className="form-group">
                                <label>Email :</label>
                                {/* <input className="form-control" type="email" onChange={e => setEmail(e.target.value)} /> */}
                                <input className="form-control" type="text" name="inputEmail" />
                            </div>
                            <div className="outer-btn-social">
                                <div className="col">
                                    {/* <a className="btn-send-1" onClick={handleSendCommentModal}>Gửi</a> */}
                                    <a className="btn-send-1">Gửi</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalComment