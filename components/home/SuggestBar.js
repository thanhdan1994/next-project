import Link from 'next/link'
import { PureComponent } from 'react'

class SuggestBar extends PureComponent {
    render() {
        const { lists } = this.props;
        return (
            <div className="suggest-bar">
                <ul className="subMenu-bottom">
                    <li><a title="Breaking news" className="icon-direction"> </a></li>
                    {lists.map((tag, index) => (
                        <li key={index}>
                            <Link as={tag.tag_link} href={tag.tag_link}>
                                <a title={tag.tag_name}>{tag.tag_name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )

    }
}
export default SuggestBar