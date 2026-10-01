import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get('name')?.toString()?.trim() || '';
    const phone = formData.get('phone')?.toString()?.trim() || '';
    const email = formData.get('email')?.toString()?.trim() || '';
    const city = formData.get('city')?.toString()?.trim() || '';
    const area = formData.get('area')?.toString()?.trim() || '';

    if (!name || !phone || !email || !city || !area) {
      return NextResponse.json(
        { error: 'All required fields must be provided.' },
        { status: 400 }
      );
    }

    const application = await prisma.application.create({
      data: {
        name,
        phone,
        email,
        city,
        area,
        status: 'pending',
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Application received successfully',
      id: application.id,
    });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
