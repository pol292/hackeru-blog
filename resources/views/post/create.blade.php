@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                @include('post.components.post_create')
            </div>
        </div>
    </div>
@endsection
