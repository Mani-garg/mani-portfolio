const db = require("../config/db");
const nodemailer = require("nodemailer");

exports.submitMessage = async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received form data:", { name, email, message });

  if (!name || !email || !message) {
    console.log("❌ Missing fields");
    return res.status(400).json({ error: "All fields are required" });
  }

  const insertQuery = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(insertQuery, [name, email, message], async (err, result) => {
    if (err) {
      console.error("❌ MySQL insert failed:", err);
      return res.status(500).json({ error: "Database insert failed" });
    }

    console.log("✅ Inserted into DB:", result.insertId);

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Message from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("✅ Email sent!");

      return res.json({ success: true, insertedId: result.insertId });
    } catch (mailErr) {
      console.error("❌ Email failed:", mailErr);
      return res.status(500).json({ error: "Message saved, but email failed to send." });
    }
  });
};
