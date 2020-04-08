const nodeMailer = require("nodemailer");

const transport = {
    
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"",
        pass:""
    }
}

module.exports = {
    enviar: (req, res)=>{
        
        //criar o transporter
        const transporter = nodeMailer.createTransport(transport);

        // criando email
        const email = {
            from:"",
            to: req.body.dest,
            subject:req.body.subj,
            text:req.body.msg,
        }

        // enviar email de fato

        transporter.sendMail(email, (error, info)=>{
            if(error){
                console.log(erro);
                console.log(info);
                res.send("deu xabu");
            } else {
                console.log(info);
                res.send("deu bom");
            }
        })
    }
}