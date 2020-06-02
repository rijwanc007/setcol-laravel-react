<?php



Route::get('/','Frontend\DashboardController@dashboard');
Route::get('/web_application','Frontend\DashboardController@webApplication');
Route::get('/mobile_application','Frontend\DashboardController@mobileApplication');
Route::get('/software_testing','Frontend\DashboardController@softwareTesting');
Route::get('/graphics_solution','Frontend\DashboardController@graphicsSolution');
Route::get('/seo_digital_marketing','Frontend\DashboardController@seoDigitalMarketing');
Route::get('/bulk_sms','Frontend\DashboardController@bulkSMS');
Route::get('/custom_software','Frontend\DashboardController@customSoftware');
Route::get('/cloud_based_software','Frontend\DashboardController@cloudBasedSoftware');
Route::get('/e_commerce','Frontend\DashboardController@eCommerce');
Route::get('/erp','Frontend\DashboardController@erp');
Route::get('/desktop_application','Frontend\DashboardController@desktopApplication');
Route::get('/cms','Frontend\DashboardController@cms');
Route::get('/read_more_review','Frontend\DashboardController@readMoreReview');
Route::get('/career','Frontend\DashboardController@career');
Route::get('/contact_us','Frontend\DashboardController@contactUs');
