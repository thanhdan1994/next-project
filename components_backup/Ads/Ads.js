import React, {Component} from 'react'

class Ads extends Component {
    componentDidMount() {
        var zoneTag = document.createElement('zone');
        zoneTag.id = this.props.code
        document.getElementById(`${this.props.id}`).appendChild(zoneTag)
        var scriptTag = document.createElement('script');
        scriptTag.text = `arfAsync.push(${this.props.code})`
        document.getElementById(`${this.props.id}`).appendChild(scriptTag)
    }
    render() {
        return (
            <div className="block-bar block-qc" id={this.props.id}>
                {/* <zone id="jmvf5po0"></zone>
                <script>arfAsync.push("jmvf5po0")</script> */}
            </div>
        )
    }
}

export default Ads