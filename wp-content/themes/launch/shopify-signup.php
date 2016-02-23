<?php
/*
Template Name: shopify-signup
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SPECIAL SHOPIFY DEAL</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- common css -->
    <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/main.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url')?>/css/custom.css">

    <!-- animation css -->
    <link rel="stylesheet" href="https://cdn.rawgit.com/daneden/animate.css/master/animate.min.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">

    <style>
        .footer{
            border-top: 1px solid #e9e9e9;
        }
        .header{
            border-bottom: 1px solid #e9e9e9;
            margin-bottom: 40px;
        }
    </style>
</head>

<body>
<div class="wrap">
    <div class="container">
        <div class="row content">
            <section class="col-sm-5 col-md-4 form_sec ">
                <div class="row">
                    <div class="col-xs-10 col-xs-offset-1 form_header">
                        <a href="/"></a>
                    </div>
                </div>
                <div class="row">
                    <form action="#" class="col-xs-12" id="deal-form">
                        <div class="row">
                            <div class="col-xs-10 col-xs-offset-1">
                                <div class="form-group">
                                    <label class="control-label">Title</label>
                                    <select name="title" class="form-control">
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Ms.">Ms.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-10 col-xs-offset-1">
                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input data-validation="length alphanumeric" data-validation-length="min3" type="text" name="name" class="form-control ">
                                </div>
                            </div>
                            <div class="col-xs-10 col-xs-offset-1">
                                <div class="form-group">
                                    <label class="control-label">Surname</label>
                                    <input type="text" name="surname" class="form-control required">
                                </div>
                            </div>
                            <div class="col-xs-10 col-xs-offset-1">
                                <div class="form-group">
                                    <label class="control-label">E-Mail</label>
                                    <input data-validation="email" type="text" name="email" class="form-control required">
                                </div>
                            </div>
                            <div class="col-xs-10 col-xs-offset-1">
                                <div class="form-group">
                                    <label class="control-label">Phone</label>
                                    <input type="text" name="phone" class="form-control required">
                                </div>
                            </div>
                            <div class="col-xs-10 col-xs-offset-1">
                                <div class="form-group">
                                    <label class="control-label">Company</label>
                                    <input type="text" name="company" class="form-control required">
                                </div>
                            </div>
                            <div class="col-xs-10 col-xs-offset-1 mb-25">
                                <div class="form-group">
                                    <label class="control-label">Shopify URL</label>
                                    <input data-validation="url" type="text" name="url" class="form-control required" placeholder="http://">
                                </div>
                            </div>
                            <div class="col-xs-10 col-xs-offset-1 mb-25">
                                <button class="btn btn-success btn-block">Submit</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 text-center">
                                <label class="small-text">
                                    <input type="checkbox" name="agree" data-validation="checkbox_group" data-validation-qty="min1" data-validation-error-msg="You must agree with terms and conditions and privacy policy to proceed">
                                    I agree with the <a href="http://www.ekomi-us.com/us/terms-and-conditions/" target="_blank">terms and conditions</a>  and <a href="http://www.ekomi-us.com/us/privacy/" target="_blank">privacy  policy</a> of eKomi
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section class=" hidden-xs col-sm-7 col-md-offset-1 con_sec text-center">
                <h1 class="">Shopify <br>customer?</h1>
                <div class="price_sticker"></div>
                <p class="text-uppercase">
                    <span><i class="fa fa-check-square-o"></i> Sign up NOW!</span>
                    <span><i class="fa fa-certificate"></i> limited offer!</span>
                </p>
                <div class="shopify"></div>
            </section>
        </div>
    </div>
</div>

<!-- <div style="display:none;"> -->

<div class="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, non!
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalSuccess"  role="dialog" aria-labelledby="modalSuccessLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                Thanks for signing up. A customer support representative will contact you within 24 hours.
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalError"  role="dialog" aria-labelledby="modalErrorLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                Server Error. Please, try again later.
            </div>
        </div>
    </div>
</div>
<!-- </div> -->

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.2.81/jquery.form-validator.min.js"></script>
<script src="<?php bloginfo('template_url')?>/js/owl.carousel.js"></script>
<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
<script src="<?php bloginfo('template_url')?>/js/prefixfree.js"></script>
<script src="<?php bloginfo('template_url')?>/js/bootstrap.min.js"></script>


<script>
    $(function() {

        // $.validate();

        var footerToBottom = function(){
            var footer = $('.footer');
            if($('.wrap').height() < window.innerHeight){
                $('.footer').css({
                    'position':'fixed',
                    'bottom':'0',
                    'left':'0',
                    'right':'0'
                });
            }
        };
        footerToBottom();

        $.validate({
            form : '#deal-form',
            modules:'html5',
            onError : function($form) {
                console.log('Validation of form '+$form.attr('id')+' failed!');
            },
            onSuccess : function($form) {
                console.log('The form '+$form.attr('id')+' is valid!');
                var data = $($form).serialize();
                $.ajax({
                    url: '<?php bloginfo('template_url')?>/scripts/send-mail.php',
                    type: 'POST',
                    data: data
                })
                    .done(function() {
                        console.log("success");
                        $('#modalSuccess').modal('show');
                    })
                    .fail(function() {
                        console.log("error");
                        $('#modalError').modal('show');
                    })
                    .always(function() {
                        console.log("complete");
                    });
                return false; // Will stop the submission of the form

            },
            onValidate : function($form) {

            },
            onElementValidate : function(valid, $el, $form, errorMess) {
                console.log('Input ' +$el.attr('name')+ ' is ' + ( valid ? 'VALID':'NOT VALID') );
            }
        });
    });
</script>


</body>
</html>