import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestPut, requestGet } from '../../api/apiRequest';
import SEVER_CONFIG from '../../config/severConfig';
import SectionHeader from '../layout/sectionHeader';

class EditCategory extends Component {
    constructor(props){
        super(props);
        this.state={
            txtNameCate: '',
            valueStatus: 1,
            errorNameCate: '',
            isAddSuccess: false,
            isDetailError: false
        }
    }
    componentDidMount() {
        const id=this.props.match.params.id;
        const token=localStorage.getItem('_token');
        const url=`${SEVER_CONFIG.url}/getCateById?id=${id}&token=${token}`;
        requestGet(url)
        .then(res=>{
            if(res.status==='success'){
                let data=res.data;
                this.setState({
                    txtNameCate: data.name,
                    valueStatus: data.status
                })
            }else{
                alert('Có lỗi xảy ra vui lòng liên hệ quản trị viên!!');
            }
        })
        .catch(error=>{
            this.setState({
                isDetailError: true
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
    handleSubmit=(event)=>{
        event.preventDefault();
        let { txtNameCate, valueStatus }= this.state;
        const id=this.props.match.params.id;
        if(txtNameCate===''){
            return this.setState({
                errorNameCate: 'Tên loại k được bỏ trống'
            })
        }
        const token=localStorage.getItem('_token');
        let dataPost={
            txtNameCate: txtNameCate,
            valueStatus: valueStatus,
            token: token,
            id: id
        };
        const url=`${SEVER_CONFIG.url}/editCategory`;
        requestPut(url,dataPost)
        .then(res=>{
            if(res.status==='success'){
                this.setState({
                    isAddSuccess: true
                })
            }else if(res.errors){
                this.setState({
                    errorNameCate: res.errors.txtNameCate[0]
                })
            }
            else{
                alert('Có lỗi xảy ra, vui lòng liên hệ quản trị viên');
            }
        })
        .catch(err=>{
            console.log(err);
            alert('Có lỗi xảy ra, vui lòng liên hệ quản trị viên');
        })
    }
	render() {
        let { isAddSuccess, isDetailError }=this.state;
        if(isDetailError){
            return <Redirect to={{ 
                pathname: '/category',
                state: {
                    msgStatus: 'danger',
                    msgTitle: 'Lỗi',
                    msgContent: 'Dữ liệu không hợp lệ!!!'
                }
            }} />
        }
        if(isAddSuccess){
            return <Redirect to={{ 
                pathname: '/category',
                state: {
                    msgStatus: 'success',
                    msgTitle: 'Thông báo',
                    msgContent: 'Cập nhập loại thành công!!!'
                }
            }} />
        }
		return (
           <div className="content-wrapper">
                <SectionHeader title='Loại sản phẩm' start='Admin' to='Cập nhập loại'/>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Cập nhập loại</h3>
                                </div>
                                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Tên loại</label>
                                            <div className="col-sm-10">
                                                <input name="txtNameCate" type="text" className="form-control" placeholder="Tên loại" value={this.state.txtNameCate} onChange={this.handleInputChange}/>
                                                <span className="error">{this.state.errorNameCate}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Trạng thái</label>
                                            <div className="col-sm-10">
                                                <select name="valueStatus" value={this.state.valueStatus} onChange={this.handleInputChange} className="form-control select2" style={{width: '100%'}}>
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
export default connect()(EditCategory);