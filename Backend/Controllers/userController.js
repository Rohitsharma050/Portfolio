import dotenv from "dotenv"
import { Resend } from "resend"

dotenv.config()
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is missing")
}

const resend = new Resend( process.env.RESEND_API_KEY)
export const sendEmail = async ({name,email,message})=>{
  await  resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to:[process.env.TO_EMAIL],
        subject:"New Portfolio Contact message",
        html:
        `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Portfolio Message</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:30px 15px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <tr>
              <td style="background:#111827; padding:20px 24px;">
                <h2 style="margin:0; color:#ffffff; font-size:20px;">
                  📩 New Message from Portfolio
                </h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 12px; color:#374151; font-size:15px;">
                  You’ve received a new message via your portfolio contact form.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                  <tr>
                    <td style="padding:10px 0; font-size:14px; color:#6b7280;">
                      <strong style="color:#111827;">Name:</strong><br />
                      ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; font-size:14px; color:#6b7280;">
                      <strong style="color:#111827;">Email:</strong><br />
                      ${email}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0; font-size:14px; color:#6b7280;">
                      <strong style="color:#111827;">Message:</strong><br />
                      <div style="margin-top:6px; padding:12px; background:#f9fafb; border-left:4px solid #111827; border-radius:4px; color:#374151;">
                        ${message}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f3f4f6; padding:16px 24px; text-align:center;">
                <p style="margin:0; font-size:12px; color:#6b7280;">
                  This message was sent from your portfolio website.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
    })
}
export const sendMessage = async(req,res)=>{

    try {
        const {name,email,message} = req.body
        if(!name || !email || !message)
        {
            return res.json({
                success:false,
                message:"All fields are required"
            })
        }
        await sendEmail({name,email,message})
        res.json({
            success:true,
            message:"Message sent successfully"
        })
    } catch (error) {
        console.error(error)
        res.json({
      success: false,
      message: "Email failed to send"
    })

    }

}