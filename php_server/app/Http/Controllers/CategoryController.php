<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
class CategoryController extends Controller
{
    protected function listCategory(){
        $listCategory=Category::orderBy('id','desc')->get();
        $result=[
            'status'=>'success',
            'message'=>'Lấy dữ liệu thành công!!!',
            'data'=>$listCategory
        ];
        return response(json_encode($result), 200);
    }
    protected function getCateById(Request $request){
        $id=$request->id;
        $cate=Category::findorFail($id);
        $result=[
            'status'=>'success',
            'message'=>'Lấy dữ liệu thành công!!!',
            'data'=>$cate
        ];
        return response(json_encode($result), 200);
    }
    protected function addCategory(Request $request){
        $request->validate([
            'txtNameCate' => 'required|unique:category,name',
            'valueStatus' => 'required|in:0,1'
        ],[
            'txtNameCate.required'=>'Tên loại không được bỏ trống',
            'txtNameCate.unique'=>'Tên loại đã tồn tại',
            'valueStatus.required'=>'Chưa chọn trạng thái',
            'valueStatus.in'=>'Trạng thái không hợp lệ'
        ]);
        $nameCate=$request->txtNameCate;
        $statusCate=$request->valueStatus;
        $newCate=new Category;
        $newCate->name=$nameCate;
        $newCate->status=$statusCate;
        $newCate->save();
        $result=[
            'status'=>'success',
            'message'=>'Thêm thành công!!!',
            'data'=>[]
        ];
        return response(json_encode($result), 200);
    }
    protected function editCategory(Request $request){
        $idCate=$request->id;
        $request->validate([
            'txtNameCate' => 'required|unique:category,name,'.$idCate,
            'valueStatus' => 'required|in:0,1'
        ],[
            'txtNameCate.required'=>'Tên loại không được bỏ trống',
            'txtNameCate.unique'=>'Tên loại đã tồn tại',
            'valueStatus.required'=>'Chưa chọn trạng thái',
            'valueStatus.in'=>'Trạng thái không hợp lệ'
        ]);
        $nameCate=$request->txtNameCate;
        $statusCate=$request->valueStatus;
        $updateCate=Category::findorFail($idCate);
        $updateCate->name=$nameCate;
        $updateCate->status=$statusCate;
        $updateCate->save();
        $result=[
            'status'=>'success',
            'message'=>'Cập nhập thành công!!!',
            'data'=>[]
        ];
        return response(json_encode($result), 200);
    }
    protected function deleteCategory(Request $request){
        $id=$request->id;
        $cate=Category::findorFail($id);
        $cate->delete();
        $result=[
            'status'=>'success',
            'message'=>'Xóa dữ liệu thành công!!!',
            'data'=>[]
        ];
        return response(json_encode($result), 200);
    }
}
