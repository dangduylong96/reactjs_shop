<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use File;
class productController extends Controller
{
    protected function listProduct(Request $request){
        $listProduct=Product::orderBy('id','desc')->get();
        $result=[
            'status'=>'success',
            'message'=>'Lấy dữ liệu thành công!!!',
            'data'=>$listProduct
        ];
        return response(json_encode($result), 200);
    }
    protected function getProductById(Request $request){
        $id=$request->id;
        $product=Product::findorFail($id);
        $result=[
            'status'=>'success',
            'message'=>'Lấy dữ liệu thành công!!!',
            'data'=>$product
        ];
        return response(json_encode($result), 200);
    }
    protected function addProduct(Request $request){
        $request->validate([
            'txtNameProduct' => 'required',
            'valueCategory' => 'required|exists:category,id',
            'txtPrice' => 'required',
            'txtdesc' => 'required',
            'valueStatus' => 'required|in:0,1',
            'file'=>'mimes:jpeg,jpg,png,gif|max:10000'
        ],[
            'txtNameProduct.required'=>'Tên sản phẩm không được bỏ trống',
            'valueCategory.required'=>'Chưa chọn loại sản phẩm',
            'txtPrice.required'=>'Giá không được bỏ trống',
            'txtdesc.required'=>'Mô tả không được bỏ trống',
            'valueStatus.required'=>'Chưa chọn trạng thái',
            'valueStatus.in'=>'Trạng thái không hợp lệ'
        ]);
        $product=new Product;
        if ($request->hasFile('file')){
            $file=$request->file('file');
            $image_name=str_random(10).$file->getClientOriginalName();
            while(File::exists('public/images/product/'.$image_name)){
                $image_name=str_random(10).$file->getClientOriginalName();
            }
            //upload files
            $file->move('public/images/product',$image_name);
            $product->img=$image_name;
        }else{
            $product->img='not_found_image.jpg';
        }
        $product->name=$request->txtNameProduct;
        $product->id_category=$request->valueCategory;
        $product->price=$request->txtPrice;
        $product->desc=$request->txtdesc;
        $product->status=$request->valueStatus;
        $product->save();
        $result=[
            'status'=>'success',
            'message'=>'Thêm thành công!!!',
            'data'=>[]
        ];
        return response(json_encode($result), 200);
    }
    protected function editProduct(Request $request){
        $request->validate([
            'txtNameProduct' => 'required',
            'valueCategory' => 'required|exists:category,id',
            'txtPrice' => 'required',
            'txtdesc' => 'required',
            'valueStatus' => 'required|in:0,1',
            // 'file'=>'mimes:jpeg,jpg,png,gif|max:10000'
        ],[
            'txtNameProduct.required'=>'Tên sản phẩm không được bỏ trống',
            'valueCategory.required'=>'Chưa chọn loại sản phẩm',
            'txtPrice.required'=>'Giá không được bỏ trống',
            'txtdesc.required'=>'Mô tả không được bỏ trống',
            'valueStatus.required'=>'Chưa chọn trạng thái',
            'valueStatus.in'=>'Trạng thái không hợp lệ'
        ]);
        if($request->hasFile('file')){
            $request->validate([
                'file'=>'mimes:jpeg,jpg,png,gif|max:10000'
            ]);
        }
        $id=$request->id;
        $product=Product::findorFail($id);
        if ($request->hasFile('file')){
            $file=$request->file('file');
            $image_name=str_random(10).$file->getClientOriginalName();
            while(File::exists('public/images/product/'.$image_name)){
                $image_name=str_random(10).$file->getClientOriginalName();
            }
            //upload files
            $file->move('public/images/product',$image_name);
            $product->img=$image_name;
        }
        $product->name=$request->txtNameProduct;
        $product->id_category=$request->valueCategory;
        $product->price=$request->txtPrice;
        $product->desc=$request->txtdesc;
        $product->status=$request->valueStatus;
        $product->save();
        $result=[
            'status'=>'success',
            'message'=>'Cập nhập thành công!!!',
            'data'=>[]
        ];
        return response(json_encode($result), 200);
    }
    protected function deleteProduct(Request $request){
        $id=$request->id;
        $cate=Product::findorFail($id);
        $cate->delete();
        $result=[
            'status'=>'success',
            'message'=>'Xóa dữ liệu thành công!!!',
            'data'=>[]
        ];
        return response(json_encode($result), 200);
    }
}
