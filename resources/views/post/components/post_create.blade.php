<div class="card">
    <div class="card-header">Create post</div>

    <div class="card-body">

        <form id="create_post" action="{{route('post.store')}}" method="post">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" name="title" class="form-control" id="title" placeholder="title" required>
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label for="tags">tags:</label>
                <input type="text" id="tags" name="tags" value="" data-role="tagsinput">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Send</button>
        </form>

    </div>
</div>

@push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
    <script src="{{asset('js/tagsinput.js')}}"></script>
@endpush
@push('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="{{asset('css/tagsinput.css')}}">
@endpush
