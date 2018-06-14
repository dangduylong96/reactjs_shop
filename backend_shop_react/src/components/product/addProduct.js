import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AddProduct extends Component {
	render() {
		return (
           <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>sản phẩm</h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                        <li className="active">Thêm sản phẩm</li>
                    </ol>
                </section>
                {/* Main content */}
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
                                            <input name="name" type="text" className="form-control" id="name" placeholder="Tên sản phẩm" defaultValue="{{old('name','')}}" required />
                                            <span className="error">{'{'}{'{'}$errors-&gt;first('name'){'}'}{'}'}</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Loại</label>
                                            <div className="col-sm-10">
                                            <select name="category" className="form-control select2" style={{width: '100%'}}>
                                                <option value="0">Loại 1</option>
                                            </select>
                                            <span className="error">Lỗi</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Giá</label>
                                            <div className="col-sm-10">
                                            <input name="price" type="text" className="form-control" id="price" placeholder="Giá sản phẩm" defaultValue="{{old('price','')}}" required step="0.01" />
                                            <span className="error">Lỗi</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Hình</label>
                                            <div className="col-sm-10">
                                            <input name="image" type="file" id="imgInp" />
                                            <span className="error">Lỗi</span>
                                            <br />
                                            <img id="blah" src="{{url('/public/images/admin/')}}" alt="Hình ảnh sản phẩm" width="122px" height="133px" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Mô tả</label>
                                            <div className="col-sm-10">
                                            <textarea id="desc" name="desc" className="form-control" rows={10} placeholder="Sơ lược về bài đăng" required defaultValue={"{{old('desc')}}"} />
                                            <span className="error">Lỗi</span>
                                            </div>
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Sales (%)</label>
                                            <div className="col-sm-10">
                                            <input id="sale" name="sale" type="text" className="form-control" placeholder="Giảm giá.VD: 10% thì nhập 0.1" defaultValue="{{old('sale','')}}" step="0.01" />
                                            <span className="error">Lỗi</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Trạng thái</label>
                                            <div className="col-sm-10">
                                            <select name="status" className="form-control select2" style={{width: '100%'}}>
                                                <option value={1}>Hiện</option>
                                                <option value={0}>Ẩn</option>
                                            </select>
                                            <span className="error">Lỗi</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-success btn-block">Thêm</button>
                                    </div>
                                    {/* /.box-footer */}
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