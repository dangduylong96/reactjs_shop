<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    $arr=[1,2,3];
    return json_encode($arr);
});
Route::post('login','adminUserController@login');
Route::get('checkToken','adminUserController@checkToken');
/**Admin */
Route::group(['prefix' => 'admin','middleware'=>'adminMiddleware'], function() {
    Route::get('getDetailAdmin','adminUserController@getDetailAdmin');
    //Category
    Route::get('listCategory','CategoryController@listCategory');
    Route::get('getCateById','CategoryController@getCateById');
    Route::post('addCategory','CategoryController@addCategory');
    Route::put('editCategory','CategoryController@editCategory');
    Route::delete('deleteCategory','CategoryController@deleteCategory');
});
