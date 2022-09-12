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
            }
        }
    )
})
