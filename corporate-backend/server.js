// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from 'resend';
import nodemailer from 'nodemailer';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send({ message: "Backend is running!" });
});

//home page
app.get('/api/home', (req, res) => {
  res.json({
    title: "Welcome to Caja y Empaques Arely",
    description: "En Cajas y Empaques Arely nos especializamos en la fabricación de cajas de cartón a la medida exacta que tu negocio necesita. Creamos soluciones personalizadas, con o sin impresión, en cartón sencillo o doble corrugado, adaptándonos por completo a tus requerimientos. Nuestro lema lo dice todo: Tus ideas, nuestras cajas.",
  });
});

// About page test API
app.get("/api/about", (req, res) => {
  res.send({
    title: "About Caja y Empaques Arely",
    description: "En Cajas y Empaques Arely nos especializamos en la fabricación de cajas de cartón a la medida exacta que tu negocio necesita. Creamos soluciones personalizadas, con o sin impresión, en cartón sencillo o doble corrugado, adaptándonos por completo a tus requerimientos. Nuestro lema lo dice todo: Tus ideas, nuestras cajas.Contamos con una infraestructura moderna y maquinaria de alto rendimiento, como flexo, pegadora y suajadora, que nos permite producir desde tirajes pequeños hasta grandes volúmenes con la mejor calidad y puntualidad. Además, contamos con transporte propio para llevar tu pedido directamente a tus instalaciones, sin complicaciones.En Cajas y Empaques Arely, convertimos tus necesidades en soluciones prácticas y profesionales, para que tu producto llegue siempre bien presentado y protegido."
  });
});

//products page
app.get('/api/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Custom Corrugated Box",
      description: "Durable corrugated packaging with customizable sizes.",
    },
    {
      id: 2,
      name: "Branded Packaging",
      description: "High-quality printed boxes with your brand logo and colors.",
    },
    {
      id: 3,
      name: "Heavy-Duty Shipping Box",
      description: "Designed for extra protection during transportation.",
    }
  ]);
});

//sustainability page
app.get('/api/sustainability', (req, res) => {
  res.json({
    title: "Our Commitment to Sustainability",
    description: "At Caja y Empaques Arely, we believe in responsible manufacturing. Our two factories in San Jose El Jaral use energy-efficient equipment and recycle over 80% of production waste. We work with suppliers who share our commitment to sustainability and ensure that our packaging materials are recyclable and eco‑friendly. Our goal is to deliver high‑quality boxes while minimizing our environmental footprint for a greener Mexico."
  });
});

//careers page
app.get('/api/careers', (req, res) => {
  res.json({
    title: "Careers at Caja y Empaques Arely",
    description: "Join our growing team at Caja y Empaques Arely, a leader in sustainable packaging solutions across Mexico. Based in San Jose El Jaral, Atizapan De Zaragoza, we operate two manufacturing plants and a printing facility and offer opportunities in production, quality control, sales, logistics, and administration. We value teamwork, innovation, and dedication to customer satisfaction.",
    openings: [
      {
        id: 1,
        role: "Production Line Operator",
        location: "San Jose El Jaral, Atizapan De Zaragoza",
        type: "Full-time"
      },
      {
        id: 2,
        role: "Sales Executive",
        location: "Remote / Mexico",
        type: "Full-time"
      }
    ]
  });
});

//contact page
app.get('/api/contact', (req, res) => {
  res.json({
    title: "Contact Caja y Empaques Arely",
    address: "San Jose El Jaral, Atizapan De Zaragoza, 52924, Mexico",
    phone: "+52-55-1234-5678",
    email: "contacto@cajaempaquesarely.com",
    description: "We serve clients all across Mexico from our two manufacturing factories in San Jose El Jaral."
  });
});

//email
//const resend = new Resend(process.env.RESEND_API_KEY);

// app.post('/api/send-quotation', async (req, res) => {
//   const { name, email, company, details } = req.body;

//   try {
//     // await resend.emails.send({
//     //   from: 'Quotation <no-reply@yourdomain.com>',
//     //   to: process.env.QUOTATION_RECEIVER, // Your receiving email, set in .env
//     //   subject: 'New Quotation Request',
//     //   html: `
//     //     <h2>New Quotation Request</h2>
//     //     <p><strong>Name:</strong> ${name}</p>
//     //     <p><strong>Email:</strong> ${email}</p>
//     //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
//     //     <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
//     //   `,
//     // });
//     await resend.emails.send({
//   from: 'cool.shiva262@gmail.com', // Use your verified login email for testing
//   to: process.env.QUOTATION_RECEIVER,
//   subject: 'New Quotation Request',
//   html: `
//     <h2>New Quotation Request</h2>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Company:</strong> ${company || 'N/A'}</p>
//     <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
//   `,
// });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending quotation email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// app.post('/api/send-quotation', async (req, res) => {
//   const { name, email, company, details } = req.body;

//   // Debug logs
//   console.log('--- Incoming Quotation Request ---');
//   console.log('From:', 'cool.shiva262@gmail.com');
//   console.log('To:', process.env.QUOTATION_RECEIVER);
//   console.log('Resend API Key present:', !!process.env.RESEND_API_KEY);
//   console.log('Request Data:', { name, email, company, details });

//   try {
//     const response = await resend.emails.send({
//       from: 'cool.shiva262@gmail.com',
//       to: process.env.QUOTATION_RECEIVER,
//       subject: 'New Quotation Request',
//       html: `
//         <h2>New Quotation Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Company:</strong> ${company || 'N/A'}</p>
//         <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
//       `,
//     });
//     console.log('Resend API Response:', response); // Log response from Resend
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending quotation email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

//import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'yourgmail@gmail.com',       // your Gmail address
//     pass: 'your-app-password'          // Google App Password (see below)
//   }
// });

// app.post('/api/send-quotation', async (req, res) => {
//   const { name, email, company, details } = req.body;
//   try {
//     await transporter.sendMail({
//       from: 'yourgmail@gmail.com',
//       to: process.env.QUOTATION_RECEIVER,
//       subject: 'New Quotation Request',
//       html: `
//         <h2>New Quotation Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Company:</strong> ${company || 'N/A'}</p>
//         <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
//       `,
//     });
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// Setup Nodemailer transporter with Gmail and App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,      // Your Gmail address, e.g. "cool.shiva262@gmail.com"
    pass: process.env.GMAIL_APP_PASS,  // Your Google App Password
  },
});

// Optional: Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error with transporter configuration:', error);
  } else {
    console.log('Nodemailer transporter is ready');
  }
});

// API endpoint to handle quotation requests
// app.post('/api/send-quotation', async (req, res) => {
//   const { name, email, company, details } = req.body;

//   console.log('--- Incoming Quotation Request ---');
//   console.log('Request Body:', { name, email, company, details });

//   // Construct email message
//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: process.env.QUOTATION_RECEIVER, // Receiver email address
//     subject: 'New Quotation Request',
//     html: `
//       <h2>New Quotation Request</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Company:</strong> ${company || 'N/A'}</p>
//       <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
//     `,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully:', info.messageId);
//     res.status(200).json({ success: true, messageId: info.messageId });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, error: 'Failed to send email' });
//   }
// });

  app.post('/api/send-quotation', async (req, res) => {
  const { name, email, company,mobile, details } = req.body;

  console.log('--- Incoming Quotation Request ---');
  console.log('Request Body:', { name, email, company, mobile, details });

  // 1. Email to your business
  const adminMailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.QUOTATION_RECEIVER,
    subject: 'New Quotation Request',
    html: `
      <h2>New Quotation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
    `
  };

  console.log({ name, email, company, mobile, details });

  // 2. Acknowledgement email to the user
  const userAckMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'We have received your quotation request!',
    html: `
      <h2>Thank you, ${name}!</h2>
      <p>We received your quotation request and our team will contact you soon.</p>
      <hr>
      <b>Your request details:</b>
      <ul>
        <li><b>Company:</b> ${company || 'N/A'}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Mobile:</b> ${mobile}</li>
        <li><b>Details:</b> ${details.replace(/\n/g, '<br>')}</li>
      </ul>
      <p>If you have any questions, reply to this email or contact us directly.</p>
      <p><b>Caja y Empaques Arely</b></p>
    `
  };

  try {
    // Send business notification:
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('Business notification sent:', adminInfo.messageId);

    // Send acknowledgment to the user:
    const userInfo = await transporter.sendMail(userAckMailOptions);
    console.log('User acknowledgement sent:', userInfo.messageId);

    res.status(200).json({
      success: true,
      adminMessageId: adminInfo.messageId,
      userMessageId: userInfo.messageId
    });
  } catch (error) {
    console.error('Error sending email(s):', error);
    res.status(500).json({ success: false, error: 'Failed to send email(s)' });
  }
});

// Test endpoint
app.get('/', (req, res) => {
  res.send({ message: 'Backend is running!' });
});

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0'; // listen on all interfaces
app.listen(PORT, HOST, () => console.log(`✅ Server running on http://${HOST}:${PORT}`));
// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

