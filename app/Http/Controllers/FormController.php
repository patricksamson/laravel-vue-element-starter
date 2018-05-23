<?php

namespace Starter\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function getForm()
    {
        return view('starter');
    }

    public function postForm(Request $request)
    {
        Validator::make($request->all(), [
            'testinput' => 'required|unique:posts|max:255',
            'testdate' => 'required',
        ])->validate();

        return 'success!';
    }
}
