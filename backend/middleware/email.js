const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const sendAdminNotification = async (data) => {
  await transporter.sendMail({
    from: `"Jinat Education" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Inquiry: ${data.subject} — ${data.campus}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="background:#065f46;padding:24px;color:white">
          <h2 style="margin:0">New Inquiry Received</h2>
          <p style="margin:4px 0 0;opacity:0.8">Jinat Global Education City</p>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            ${[['Name', data.name], ['Email', data.email], ['Phone', data.phone || 'N/A'], ['Campus', data.campus], ['Subject', data.subject]].map(([k, v]) => `
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#374151;width:120px">${k}</td>
              <td style="padding:8px 0;color:#6b7280">${v}</td>
            </tr>`).join('')}
          </table>
          <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px">
            <p style="font-weight:600;color:#374151;margin:0 0 8px">Message:</p>
            <p style="color:#6b7280;margin:0;line-height:1.6">${data.message}</p>
          </div>
        </div>
        <div style="padding:16px 24px;background:#f3f4f6;text-align:center;font-size:12px;color:#9ca3af">
          © ${new Date().getFullYear()} Jinat Jubo Unnayon Sangstha · Reg. No: 124
        </div>
      </div>
    `,
  })
}

const sendUserConfirmation = async (data) => {
  await transporter.sendMail({
    from: `"Jinat Global Education" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: 'We received your inquiry — Jinat Global Education City',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="background:#065f46;padding:24px;color:white">
          <h2 style="margin:0">Thank You, ${data.name}!</h2>
          <p style="margin:4px 0 0;opacity:0.8">Your inquiry has been received.</p>
        </div>
        <div style="padding:24px">
          <p style="color:#374151;line-height:1.6">
            We have received your inquiry regarding <strong>${data.subject}</strong> for the <strong>${data.campus}</strong> campus.
            Our team will get back to you within <strong>24 hours</strong>.
          </p>
          <p style="color:#374151;line-height:1.6">
            If you need immediate assistance, please call our hotline: <strong>+880 1700-000003</strong>
          </p>
        </div>
        <div style="padding:16px 24px;background:#f3f4f6;text-align:center;font-size:12px;color:#9ca3af">
          © ${new Date().getFullYear()} Jinat Jubo Unnayon Sangstha · Reg. No: 124
        </div>
      </div>
    `,
  })
}

module.exports = { sendAdminNotification, sendUserConfirmation }
