import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SectionHeader from '../layout/sectionHeader';
import { requestGet, requestDelete } from '../../api/apiRequest';
import SEVER_CONFIG from '../../config/severConfig';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            listCategory: [],
            txtNameProduct: '',
            valueCategory: -1,
            txtUrlImage:'',
            txtPrice: 0,
            txtdesc: '',
            valueStatus: 1,

            errorNameProduct: '',
            errortxtPrice: '',
            errortxtdesc: ''
        }
    }
    componentDidMount() {
        const token=localStorage.getItem('_token');
        const url=`${SEVER_CONFIG.url}/listCategory?token=${token}`;
        requestGet(url)
        .then(res=>{
            this.setState({
                listCategory: res.data
            })
        })
    }
    handleInputChange=(event)=>{
        let target=event.target;
        let name=target.name;
        let value=target.value;
        this.setState({
            [name]: value
        })
    }
	render() {
        const { listCategory }=this.state;
        const renderCategory=listCategory.map(e=>
            <option key={e.id} value={e.id}>{e.name}</option>
        )
		return (
           <div className="content-wrapper">
                <SectionHeader title='Sản phẩm' start='Admin' to='Thêm sản phẩm'/>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Thêm sản phẩm</h3>
                                </div>
                                <form className="form-horizontal" action="{{route('add_product')}}" method="POST" encType="multipart/form-data">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Tên sản phẩm</label>
                                            <div className="col-sm-10">
                                                <input name="txtNameProduct" type="text" className="form-control" placeholder="Tên sản phẩm" defaultValue={this.state.txtNameProduct} required onChange={this.handleInputChange}/>
                                                <span className="error">{this.state.errorNameProduct}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Loại</label>
                                            <div className="col-sm-10">
                                                <select name="category" className="form-control select2" style={{width: '100%'}} onChange={this.handleInputChange}>
                                                    <option key={-1} value={-1}>--Chọn loại sản phẩm--</option>
                                                    {renderCategory}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Giá</label>
                                            <div className="col-sm-10">
                                                <input name="txtPrice" type="text" className="form-control" id="price" placeholder="Giá sản phẩm" defaultValue={this.state.txtPrice} required step="0.01" onChange={this.handleInputChange}/>
                                                <span className="error">{this.state.errortxtPrice}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Hình</label>
                                            <div className="col-sm-10">
                                                <input name="image" type="file" id="imgInp" />
                                                {/* <span className="error">Lỗi</span> */}
                                                <br />
                                                <img id="blah" src={this.state.txtUrlImage===''?'../image/not_found_image.jpg':this.state.txtUrlImage} alt="Hình ảnh sản phẩm" width="122px" height="133px" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Mô tả</label>
                                            <div className="col-sm-10">
                                                <textarea id="desc" name="txtdesc" className="form-control" rows={10} placeholder="Sơ lược về bài đăng" required defaultValue={this.state.txtdesc} onChange={this.handleInputChange}/>
                                                <span className="error">{this.state.errortxtdesc}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Trạng thái</label>
                                            <div className="col-sm-10">
                                            <select name="valueStatus" value={this.state.valueStatus} className="form-control select2" style={{width: '100%'}} onChange={this.handleInputChange}>
                                                <option value={1}>Hiện</option>
                                                <option value={0}>Ẩn</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-success btn-block">Thêm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

		);
	}
}
export default connect()(AddProduct);