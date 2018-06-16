import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestGet, requestDelete } from '../../api/apiRequest';
import SEVER_CONFIG from '../../config/severConfig';
import SectionHeader from '../layout/sectionHeader';

class ListProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            listProduct: [],
            isLoading: true,
            resetRender: true,
            keyWord: '',
            listSearch: []
        }
    }
    componentDidMount() {
        const token=localStorage.getItem('_token');
        const url=`${SEVER_CONFIG.url}/listProduct?token=${token}`;
        requestGet(url)
        .then(res=>{
            this.setState({
                listProduct: res.data,
                isLoading: false
            })
        })
    }
    deleteProduct(id){
        const token=localStorage.getItem('_token');
        let dataPost={
            token: token,
            id: id
        };
        const url=`${SEVER_CONFIG.url}/deleteProduct`;
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
    searchProduct=(event)=>{
        let target=event.target;
        let value=target.value;
        this.setState({
            keyWord: value
        },()=>{
            let { keyWord, listProduct}=this.state;
            if(keyWord!==''){
                console.log('có giá trị');
                let resultListProduct=listProduct.filter((item)=>{
                    return item.name.toLowerCase().indexOf(keyWord) !==-1
                })
                this.setState({
                    listSearch: resultListProduct
                })
            } else{
                console.log('không có giá trị');
                this.setState({
                    listSearch: listProduct
                })
            }
        })
        
        
    }
	render() {
        const url=SEVER_CONFIG.baseUrl;
        let { listProduct, isLoading, resetRender, listSearch }=this.state;
        let stateLocation=this.props.location.state;
        var i=0;
        let dataListProduct=listProduct;
        if(listSearch.length>0){
            dataListProduct=listSearch
        }
        let renderListCate=dataListProduct.map(e=>{
            i++;
            return (
                <tr key={e.id}>
                    <td>{i}</td>
                    <td>{e.name}</td>
                    <td><img src={url+'/public/images/product/'+e.img} alt="" width="80" height="80" /></td>
                    <td>{e.price}</td>
                    {/* <td>{e.status}</td> */}
                    <th><span className={e.status===1?'label label-success':'label label-danger'}>{e.status===1?'Hiện':'Ẩn'}</span></th>
                    <td>
                        <Link to={`/editProduct/${e.id}`}><button type="button" className="btn btn-info btn-table-admin">Sửa <i className="fa fa-edit"></i></button></Link>
                        <button type="button" className="btn btn-danger btn-table-admin" onClick={()=>this.deleteProduct(e.id)}>Xóa <i className="fa fa-trash"></i></button>
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
                                            <th>Hình ảnh</th>
                                            <th>Giá</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td colSpan="6">
                                            <input name="keyWord" type="text" className="form-control" placeholder="Tìm kiếm tên sản phẩm" value={this.state.keyWord} onChange={this.searchProduct}/>
                                        </td>
                                    </tr>
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
export default connect()(ListProduct);