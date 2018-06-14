import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestGet, requestDelete } from '../../api/apiRequest';
import SEVER_CONFIG from '../../config/severConfig';
import SectionHeader from '../layout/sectionHeader';

class ListCategory extends Component {
    constructor(props){
        super(props);
        this.state={
            listCategory: [],
            isLoading: true,
            resetRender: true
        }
    }
    componentDidMount() {
        const token=localStorage.getItem('_token');
        const url=`${SEVER_CONFIG.url}/listCategory?token=${token}`;
        requestGet(url)
        .then(res=>{
            this.setState({
                listCategory: res.data,
                isLoading: false
            })
        })
    }
    deleteCategory(id){
        const token=localStorage.getItem('_token');
        let dataPost={
            token: token,
            id: id
        };
        const url=`${SEVER_CONFIG.url}/deleteCategory`;
        requestDelete(url,dataPost)
        .then(res=>{
            if(res.status==='success'){
                alert('Xóa thành công!!!')
                this.componentDidMount();
            }else{
                alert('Có lỗi xảy ra, vui lòng liên hệ quản trị viên');
            }
        })
        .catch(err=>{
            alert('Có lỗi xảy ra, vui lòng liên hệ quản trị viên');
        })
    }
	render() {
        let { listCategory, isLoading, resetRender }=this.state;
        let stateLocation=this.props.location.state;
        var i=0;
        let renderListCate=listCategory.map(e=>{
            i++;
            return (
                <tr key={e.id}>
                    <td>{i}</td>
                    <td>{e.name}</td>
                    {/* <td>{e.status}</td> */}
                    <th><span className={e.status===1?'label label-success':'label label-danger'}>{e.status===1?'Hiện':'Ẩn'}</span></th>
                    <td>
                        <Link to={`/editCategory/${e.id}`}><button type="button" className="btn btn-info btn-table-admin">Sửa <i className="fa fa-edit"></i></button></Link>
                        <button type="button" className="btn btn-danger btn-table-admin" onClick={()=>this.deleteCategory(e.id)}>Xóa <i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
        const renderLoading=(
            <tr>
                <th colSpan="4">Đang tải dữ liệu.......</th>
            </tr>
        )
        var msg=null;
        if(stateLocation!==undefined){
            msg=(
                <div className="box-header">
                    <div className={"alert alert-"+stateLocation.msgStatus+" alert-dismissible"}>
                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button
                        >
                        <h4><i className="icon fa fa-check" /> {stateLocation.msgTitle}</h4>{stateLocation.msgContent}
                    </div>
                </div>
            )
        }
        
		return (
            <div className="content-wrapper" data-render={resetRender}>
                <SectionHeader title="Danh sách loại" start="Admin" to="danh sách loại" />
                <section className="content">
                    <div className="row">
                        <div className="box">
                            {msg}
                            <div className="box-body">
                                <table id="example1" className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên loại</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoading?renderLoading:renderListCate}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
		);
	}
}
export default connect()(ListCategory);