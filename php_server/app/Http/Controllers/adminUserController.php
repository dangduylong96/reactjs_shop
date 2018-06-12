<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use JWTAuth;
use JWTFactory;
class adminUserController extends Controller
{
    protected function login(Request $request){
        $txtemail=$request->txtemail;
        $txtpassword=$request->txtpassword;
        if(Auth::attempt(['email' => $txtemail, 'password' => $txtpassword, 'type'=>0])){
            $detailAdmin=Auth::user();
            $customClaims=[
                'id'=>$detailAdmin->id,
                'name'=>$detailAdmin->name,
                'email'=>$detailAdmin->email
            ];
            $token = JWTAuth::customClaims($customClaims)->fromUser($detailAdmin);
            $result=[
                'status'=>'success',
                'message'=>'Đăng nhập thành công',
                'data'=>[
                    '_token'=>$token
                ]
            ];
        }else{
            $result=[
                'status'=>'warning',
                'message'=>'Tài khoản hoặc mk không chính xác',
                'data'=>[]
            ];
        }
        return response(json_encode($result), 200);
    }
    protected function checkToken(Request $request){
        try {

            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
    
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
    
            return response()->json(['token_expired'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
    
            return response()->json(['token_invalid'], $e->getStatusCode());
    
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
    
            return response()->json(['token_absent'], $e->getStatusCode());
    
        }
        $type=Auth::user()->type;
        if($type!==0){
            return response()->json('Tài khoản của bạn k phải là admin',200);
        }
        $result=[
            'status'=>'success',
            'message'=>'Token chính xác',
            'data'=>[]
        ];
        return response(json_encode($result), 200);
    }
    protected function getDetailAdmin(){
        $admin=Auth::user();
        $data=[
            'userName'=>$admin->name
        ];
        $result=[
            'status'=>'success',
            'message'=>'Token chính xác',
            'data'=>$data
        ];
        return response(json_encode($result), 200);
    }
}
