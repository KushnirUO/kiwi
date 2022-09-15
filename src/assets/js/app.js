$(function (){
    $('#subscribeForm').validate(
        {
            rules:{
                email:{
                    required: true,
                    email: true,
                    minlength:3
                }
            },
            messages:{
                email:'Enter correct Email'
            },
            submitHandler: function(form) {
                Fancybox.show([{src: "#dialog-content", type: "inline"}]);

            }

        }
    )
})
