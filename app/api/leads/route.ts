import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, plan } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // 1. Store in Supabase
    const { data, error: dbError } = await supabase
      .from('leads')
      .insert([
        { 
          name, 
          email, 
          phone, 
          plan: plan || 'Not Specified',
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (dbError) {
      console.error('FULL Database Error:', JSON.stringify(dbError, null, 2));
      return NextResponse.json({ error: 'Failed to save lead', details: dbError.message }, { status: 500 });
    }

    // 2. Send Email Notification via Resend
    try {
      const emailResponse = await resend.emails.send({
        from: 'Gym Leads <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL || 'admin@example.com',
        subject: `🔥 New Lead: ${name}`,
        html: `
          <h2>You have a new gym lead!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interested Plan:</strong> ${plan || 'Not Specified'}</p>
          <br/>
          <p>Sent from your FuelFit Website.</p>
        `,
      });
      console.log('Email Sent Successfully:', emailResponse);
    } catch (emailError) {
      console.error('Email Notification Error:', emailError);
    }

    // 3. Send to Google Sheets (Optional Webhook)
    try {
      const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, plan }),
        });
        console.log('Google Sheet updated successfully');
      }
    } catch (sheetError) {
      console.error('Google Sheet Error:', sheetError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
