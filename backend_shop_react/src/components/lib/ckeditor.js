import React, { Component } from "react";
import { connect } from 'react-redux';

import SEVER_CONFIG from '../../config/severConfig';

class CKEditor extends Component {
    constructor(props) {
        super(props);
        this.elementName =this.props.name;
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        let configuration = {
            toolbar: 'Basic',
            cloudServices_tokenUrl: SEVER_CONFIG.urlCkeditor+'/addProduct',
            cloudServices_uploadUrl: SEVER_CONFIG.urlCkeditor+'/public/image/'
        };
        window.CKEDITOR.replace(this.elementName, configuration);
        window.CKEDITOR.instances[this.elementName].on("change", function () {
            let data = window.CKEDITOR.instances[this.elementName].getData();
            this.props.onChange(data);
        }.bind(this));
        window.CKEDITOR.instances[this.elementName].setData();
    }
    render() {
        return (
            <textarea name={this.elementName} value={this.props.value} onChange={this.props.onChange}></textarea>
        )
    }
}
export default connect()(CKEditor);