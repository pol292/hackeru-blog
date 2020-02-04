@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Posts</div>

                    <div class="card-body">


                    </div>
                </div>
            </div>
            <div class="col-md-4">
                @include('post.components.post_create')
            </div>
        </div>
    </div>
@endsection
