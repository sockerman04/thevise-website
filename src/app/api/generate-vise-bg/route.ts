import { NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

const outputDir = path.join(process.cwd(), 'public')
const outputPath = path.join(outputDir, 'vise-header-bg.png')

export async function GET() {
  try {
    const zai = await ZAI.create()

    const response = await zai.images.generations.create({
      prompt: 'A professional mechanical bench vise for woodworking workshop, heavy duty steel vise clamped to workbench, polished metal surfaces, industrial design, clean workshop background, soft ambient lighting, high quality photography, detailed mechanical components',
      size: '1440x864'
    })

    if (!response.data || !response.data[0] || !response.data[0].base64) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      )
    }

    const imageBase64 = response.data[0].base64
    const buffer = Buffer.from(imageBase64, 'base64')

    // Ensure directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Write image to public folder
    fs.writeFileSync(outputPath, buffer)

    console.log('✓ Generated vise header background image')

    return NextResponse.json({
      success: true,
      path: '/vise-header-bg.png',
      prompt: 'Mechanical vise device'
    })

  } catch (error: any) {
    console.error('Error generating image:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to generate image' },
      { status: 500 }
    )
  }
}
