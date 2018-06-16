import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SectionHeader from '../layout/sectionHeader';
import { requestGet } from '../../api/apiRequest';
import SEVER_CONFIG from '../../config/severConfig';
import CKEditor from '../lib/ckeditor';

class EditProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            listCategory: [],
            txtNameProduct: '',
            valueCategory: -1,
            txtUrlImage:'',
            txtOldImage: '',
            txtPrice: '',
            txtdesc: '',
            valueStatus: 1,
            isAddSuccess: false,
            errorNameProduct: '',
            errorvalueCategory: '',
            errortxtPrice: '',
            errortxtdesc: '',
            errortxtUrlImage: '',
            isLoading: true
        }
    }
    componentWillMount() {
        const token=localStorage.getItem('_token');
        const url=`${SEVER_CONFIG.url}/listCategory?token=${token}`;
        requestGet(url)
        .then(res=>{
            this.setState({
                listCategory: res.data
            })
        })
        
    }
    componentDidMount(){
        const token=localStorage.getItem('_token');
        const id=this.props.match.params.id;
        const url2=`${SEVER_CONFIG.url}/getProductById?id=${id}&token=${token}`;
        requestGet(url2)
        .then(res=>{
            let data=res.data;
            this.setState({
                txtNameProduct: data.name,
                valueCategory: data.id_category,
                txtOldImage: data.img,
                txtPrice: data.price,
                txtdesc: data.desc,
                valueStatus: data.status,
                isLoading: false
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
    handleCkeditorChange=(data)=>{
        this.setState({
            txtdesc: data
        })
    }
    changeImage=()=>{
        var file = this.refs.image_upload.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);//Bắt buộc có nó mới chạy
        reader.onloadend = () => {
            this.setState({
                txtUrlImage: reader.result
            })
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let { txtNameProduct, valueCategory, txtPrice, txtdesc, valueStatus }= this.state;
        this.setState({
            errorNameProduct: '',
            errorvalueCategory: '',
            errortxtPrice: '',
            errortxtdesc: '',
            errortxtUrlImage: '',
        })
        if(txtNameProduct===''){
            return this.setState({
                errorNameProduct: 'Tên sản phẩm k được bỏ trống'
            })
        }
        if(valueCategory===-1){
            return this.setState({
                errorvalueCategory: 'Bạn chưa chọn loại'
            })
        }
        if(txtPrice===''){
            return this.setState({
                errortxtPrice: 'Bạn chưa nhập giá'
            })
        }
        if(txtdesc===''){
            return this.setState({
                errortxtdesc: 'Bạn chưa nhập mô tả'
            })
        }
        const token=localStorage.getItem('_token');
        var input = document.querySelector('input[type="file"]');
        const id=this.props.match.params.id;
        var form = new FormData();
        form.append('id', id);
        form.append('_method', 'PUT');
        form.append('txtNameProduct', txtNameProduct);
        form.append('valueCategory', valueCategory);
        form.append('txtPrice', txtPrice);
        form.append('txtdesc', txtdesc);
        form.append('valueStatus', valueStatus);
        form.append('token',token);
        form.append('file',input.files[0]);
        const url=`${SEVER_CONFIG.url}/editProduct`;
        fetch(url,{
            method: 'POST',
            body: form
        })
        .then(res=>res.json())
        .then(resjson=>{
            if(resjson.status==='success'){
                this.setState({
                    isAddSuccess: true
                })
            }else if(resjson.errors){
                this.setState({
                    errorNameCate: resjson.errors.txtNameCate[0]
                })
            }
            else{
                alert('Có lỗi xảy ra, vui lòng liên hệ quản trị viên');
            }
        })
        .catch(error=>{
            alert('Có lỗi xảy ra, vui lòng liên hệ quản trị viên');
        })
    }
	render() {
        const url=SEVER_CONFIG.baseUrl;
        let { isAddSuccess, isLoading }=this.state;
        if(isLoading){
            return true;
        }
        if(isAddSuccess){
            return <Redirect to={{ 
                pathname: '/listProduct',
                state: {
                    msgStatus: 'success',
                    msgTitle: 'Thông báo',
                    msgContent: 'Cập nhập loại thành công!!!'
                }
            }} />
        }
        const { listCategory }=this.state;
        const renderCategory=listCategory.map(e=>
            <option key={e.id} value={e.id}>{e.name}</option>
        )
		return (
           <div className="content-wrapper">
                <SectionHeader title='Sản phẩm' start='Admin' to='Cập nhập sản phẩm'/>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Cập nhập sản phẩm</h3>
                                </div>
                                <form className="form-horizontal" onSubmit={this.handleSubmit} encType="multipart/form-data">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Tên sản phẩm</label>
                                            <div className="col-sm-10">
                                                <input name="txtNameProduct" type="text" className="form-control" placeholder="Tên sản phẩm" value={this.state.txtNameProduct} onChange={this.handleInputChange}/>
                                                <span className="error">{this.state.errorNameProduct}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Loại</label>
                                            <div className="col-sm-10">
                                                <select name="valueCategory" value={this.state.valueCategory} className="form-control select2" style={{width: '100%'}} onChange={this.handleInputChange}>
                                                    <option key={-1} value={-1}>--Chọn loại sản phẩm--</option>
                                                    {renderCategory}
                                                </select>
                                                <span className="error">{this.state.errorvalueCategory}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Giá</label>
                                            <div className="col-sm-10">
                                                <input name="txtPrice" type="number" className="form-control" id="price" placeholder="Giá sản phẩm" value={this.state.txtPrice} required step="0.01" onChange={this.handleInputChange}/>
                                                <span className="error">{this.state.errortxtPrice}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Hình</label>
                                            <div className="col-sm-10">
                                                <input ref="image_upload" name="txtUrlImage" type="file" id="imgInp" onChange={this.changeImage}/>
                                                <br />
                                                <span className="error">{this.state.errortxtUrlImage}</span>
                                                <img id="blah" src={this.state.txtUrlImage===''?url+'/public/images/product/'+this.state.txtOldImage:this.state.txtUrlImage} alt="Hình ảnh sản phẩm" width="122px" height="133px" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Mô tả</label>
                                            <div className="col-sm-10">
                                                <CKEditor name={'txtdesc'} value={this.state.txtdesc} onChange={this.handleCkeditorChange}/>
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
                                        <button type="submit" className="btn btn-success btn-block">Cập nhập</button>
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
export default connect()(EditProduct);