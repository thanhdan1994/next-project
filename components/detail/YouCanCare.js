function YouCanCare(props) {
    return (
        <div className="list-enter">
            <h3 className="title-style">Có thể bạn quan tâm</h3>
            <div className="row">
                {props.lists.map((object, index) => (
                    <div className="col" key={index}>
                        <article className="art-enter-s"><a href="#"><img src={object.thumb_link} /></a>
                            <h3><a href="#">{object.title}</a></h3>
                        </article>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default YouCanCare