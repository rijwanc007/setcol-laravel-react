<?php

namespace App\Http\Controllers\Frontend;

use App\Mail\subscriber;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\contact_us_mail;
use Illuminate\Support\Facades\Mail;

class DashboardController extends Controller
{
    public function dashboard(){
        return view('dashboard');
    }
    public function webApplication(){
        return view('dashboard');
    }
    public function mobileApplication(){
        return view('dashboard');
    }
    public function softwareTesting(){
        return view('dashboard');
    }
    public function graphicsSolution(){
        return view('dashboard');
    }
    public function seoDigitalMarketing(){
        return view('dashboard');
    }
    public function bulkSMS(){
        return view('dashboard');
    }
    public function customSoftware(){
        return view('dashboard');
    }
    public function cloudBasedSoftware(){
        return view('dashboard');
    }
    public function eCommerce(){
        return view('dashboard');
    }
    public function erp(){
        return view('dashboard');
    }
    public function desktopApplication(){
        return view('dashboard');
    }
    public function cms(){
        return view('dashboard');
    }
    public function readMoreReview(){
        return view('dashboard');
    }
    public function career(){
        return view('dashboard');
    }
    public function contactUs(){
        return view('dashboard');
    }
    public function contactInformation(Request $request){
        $name = $request->name;
        $email = $request->email;
        $comment = $request->message;
        Mail::to('emailverfication0007@gmail.com')->send(new contact_us_mail($name,$email,$comment));
        return response()->json($request->all());
    }
    public function subscriber(Request $request){
        $email = $request->subscriber;
        Mail::to('emailverfication0007@gmail.com')->send(new subscriber($email));
        return response()->json($request->all());
    }
}
