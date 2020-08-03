const sgMail=require('@sendgrid/mail')
const sendgridAPIKey=process.env.EMAIL_API


sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to:'rt56223@gmail.com',
    from:'rt56223@gmail.com',
    subject:'This is my first creation',
    text:'I hope this one gets to you'
})


const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'rt56223@gmail.com',
        subject:'Welcome to the Task App',
        text:`Welcome ${email} to the app, Let me know about`,
        //html:''
    })
}

const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'rt56223@gmail.com',
        subject:'Welcome to the Task App',
        text:`Sorry for you, Hope you will come back ${email}`
    })
}


module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}