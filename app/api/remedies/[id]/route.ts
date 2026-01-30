// app/api/remedies/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET single remedy by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in Next.js 15+
    const { id } = await params;

    console.log('📦 Fetching remedy with ID:', id);

    const remedy = await prisma.remedy.findUnique({
      where: { id },
    });

    if (!remedy) {
      return NextResponse.json(
        { error: 'Remedy not found' },
        { status: 404 }
      );
    }

    console.log('✅ Remedy found:', remedy.title);
    return NextResponse.json(remedy);
  } catch (error) {
    console.error('❌ Error fetching remedy:', error);
    return NextResponse.json(
      { error: 'Failed to fetch remedy' },
      { status: 500 }
    );
  }
}

// PUT/PATCH - Update remedy
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    console.log('🔄 Updating remedy:', id);

    const updatedRemedy = await prisma.remedy.update({
      where: { id },
      data: body,
    });

    console.log('✅ Remedy updated:', updatedRemedy.title);
    return NextResponse.json(updatedRemedy);
  } catch (error) {
    console.error('❌ Error updating remedy:', error);
    return NextResponse.json(
      { error: 'Failed to update remedy' },
      { status: 500 }
    );
  }
}

// DELETE remedy
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    console.log('🗑️ Deleting remedy:', id);

    await prisma.remedy.delete({
      where: { id },
    });

    console.log('✅ Remedy deleted successfully');
    return NextResponse.json({ message: 'Remedy deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting remedy:', error);
    return NextResponse.json(
      { error: 'Failed to delete remedy' },
      { status: 500 }
    );
  }
}