'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Activity,
  Shield,
  Target,
  Zap,
  Users,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  Brain,
  AlertTriangle
} from 'lucide-react'
import { useEffect, useRef } from 'react'

// ✅ Content file (Step 2)
import home from '../content/pages/home.json'

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'fade-in', 'duration-1000')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Home Button */}
            <a
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img src="/logo.png" alt="The Vise - Headache Relief Device" className="h-16 w-auto" />
            </a>

            {/* Right side - Navigation Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 hidden sm:flex"
                onClick={() => {
                  const section = document.getElementById('how-it-works')
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                {home.nav.howItWorksLabel}
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => {
                  const section = document.getElementById('contact')
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                {home.nav.contactLabel}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
        {/* Background Image */}
        <img
          src={home.hero.bgImage}
          alt="The Vise Device Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white to-teal-100/30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white border-0 px-4 py-1.5 text-sm font-medium">
              {home.hero.badge}
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {home.hero.titleTop}
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
                {home.hero.titleGradient}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {home.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => {
                  const section = document.getElementById('how-it-works')
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <Activity className="mr-2 h-5 w-5" />
                {home.hero.primaryCta}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-full"
                onClick={() => {
                  const section = document.getElementById('contact')
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                {home.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - The Burden */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-700 hover:bg-gray-200 border-0">
              {home.burden.badge}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {home.burden.heading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {home.burden.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.burden.stats.map((s, i) => (
              <Card
                key={i}
                className={`border-l-4 ${
                  i % 2 === 0 ? 'border-l-emerald-500' : 'border-l-teal-500'
                } hover:shadow-lg transition-shadow duration-300`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-4xl font-bold ${
                      i % 2 === 0 ? 'text-emerald-600' : 'text-teal-600'
                    }`}
                  >
                    {s.value}
                  </CardTitle>
                  <CardDescription className="text-base">{s.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-baseline gap-4">
              <AlertTriangle className="h-7 w-7 text-emerald-600 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {home.burden.consequence.title}
              </h3>
            </div>
            <div className="ml-11">
              <p className="text-gray-700 leading-relaxed mb-4">
                {home.burden.consequence.intro}
              </p>

              <ul className="space-y-3">
                {home.burden.consequence.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>{b.title}:</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                {home.burden.consequence.outro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (left as-is for now) */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 border-0 text-white">
              Introducing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Meet The Vise</h2>
            <p className="text-xl mb-12 text-emerald-50 leading-relaxed">
              A revolutionary headgear device that applies precision compression points to relieve
              headaches naturally. Developed by a chiropractic expert specializing in cranial manipulation.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Natural & Safe</h3>
                <p className="text-emerald-50 leading-relaxed">
                  Non-pharmacological approach with zero side effects or addiction risk.
                  Relief without compromise.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Precision Targeted</h3>
                <p className="text-emerald-50 leading-relaxed">
                  Adjustable pressure pads slide along the frame to target specific headache
                  locations with clinical precision.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Control</h3>
                <p className="text-emerald-50 leading-relaxed">
                  Twistable pads let users increase or decrease tension based on their
                  preferences for immediate, personalized relief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (left as-is for now) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0">
              Key Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Designed for Maximum Relief
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect engineered to provide targeted, effective headache relief
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Universal Fit Frame</CardTitle>
                <CardDescription className="text-base mt-2">
                  Two conjoining bars create an adjustable frame that rests comfortably on
                  any head size. The hinge point allows customization for optimal fit and positioning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Slideable Pressure Pads</CardTitle>
                <CardDescription className="text-base mt-2">
                  Modifiable pads can be positioned anywhere along the frame to target
                  specific areas—frontal, temporal, cervical, or wherever pain strikes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Twistable Tension Control</CardTitle>
                <CardDescription className="text-base mt-2">
                  Manually adjustable pressure lets users find their perfect relief level.
                  Increase or decrease tension based on individual needs and preferences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Multi-Headache Support</CardTitle>
                <CardDescription className="text-base mt-2">
                  Addresses chronic migraines, tension headaches, cluster headaches,
                  cervicogenic headaches, and even sinus headaches with one device.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works (left as-is for now) */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200 border-0">
              Methodology
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How The Vise Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clinically inspired. Home applied. Relief on demand.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="mb-16">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Apply the Headgear</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Place the lightweight frame on your head. The universal design ensures a comfortable
                    fit for all head sizes and shapes. The sagittal bar provides stability while allowing
                    precise positioning of pressure points.
                  </p>
                </div>
              </div>
              <div className="ml-18 mt-6">
                <img
                  src="/the-vise-1.png"
                  alt="The Vise headgear being applied"
                  className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-16">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Position Pressure Pads</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Slide the pressure pads along the frame to target your specific headache location.
                    Frontal for sinus pressure, temporal for tension headaches, or cervical for
                    cervicogenic pain—customize to your symptoms.
                  </p>
                </div>
              </div>
              <div className="ml-18 mt-6">
                <img
                  src="/the-vise-2.png"
                  alt="Adjustable pressure pads on The Vise device"
                  className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-16">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Adjust to Your Preference</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Twist the pads to increase or decrease tension. Find your optimal pressure level
                    for relief. The vise-like effect creates counter-pressure, mimicking the therapeutic
                    techniques used in chiropractic settings.
                  </p>
                </div>
              </div>
              <div className="ml-18 mt-6">
                <img
                  src="/the-vise-3.png"
                  alt="Twistable pressure pads on The Vise for customized relief"
                  className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Experience Relief</h3>
                <p className="text-gray-700 leading-relaxed">
                  Feel tension melt away as targeted compression reduces pain intensity.
                  No waiting for medication to kick in—immediate, controllable relief that you
                  can repeat as needed, anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved (left as-is for now) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200 border-0">
              The Problem
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Breaking the Cycle of Pain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current solutions create more problems than they solve. The Vise offers a new path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900 mb-4">Current Approaches</CardTitle>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-gray-700">Prescription pain relievers with addiction risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-gray-700">Side effects: drowsiness, nausea, cognitive fog</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-gray-700">Rebound headaches from overuse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-gray-700">Dependency on ongoing medication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-gray-700">Expensive, recurring costs</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-900 mb-4">The Vise Advantage</CardTitle>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">100% natural, drug-free relief</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zero side effects, no addiction risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Immediate relief on demand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">One-time purchase, lasting solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clinically inspired techniques at home</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Patent & Credibility (left as-is for now) */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border-0">
              <FileText className="w-4 h-4 mr-2" />
              Verified Innovation
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Built on Expertise</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl">Patent Pending, Product Conviction</CardTitle>
                  <CardDescription className="text-gray-300 text-base mt-2">
                    The Vise&apos;s innovative design is protected by pending patents, ensuring
                    proprietary technology and market exclusivity.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl">Developed by a Certified Extremities Chiropractor</CardTitle>
                  <CardDescription className="text-gray-300 text-base mt-2">
                    Years of experience, refinement, and specialized training catered to a range of headache patients.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Market Potential</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                The Vise has the potential to become the top non-pharmacological headache relief
                alternative on the market. With a massive addressable market of chronic headache
                sufferers seeking safer solutions, the investment opportunity is exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0">
              {home.contact.badge}
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {home.contact.heading}
            </h2>

            <p className="text-xl text-gray-600 mb-12">{home.contact.subheading}</p>

            <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-3xl">{home.contact.title}</CardTitle>
                <CardDescription className="text-xl text-gray-600 mt-4">
                  {home.contact.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <span className="text-3xl font-bold text-gray-900">{home.contact.phone}</span>
                </div>

                <Separator className="max-w-xs mx-auto" />

                <div className="flex items-center justify-center gap-3">
                  <img src="/logo.png" alt="The Vise" className="h-12 w-auto mb-2" />
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">{home.contact.email}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{home.footer.title}</h3>
              <p className="text-gray-400 leading-relaxed">{home.footer.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {home.contact.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {home.contact.email}
                </li>
              </ul>
              <div className="mt-4">
                <Badge className="bg-emerald-600/20 text-emerald-400 border-0">Patent Pending</Badge>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">{home.footer.copyright}</p>
            <p className="text-gray-400 text-sm">{home.footer.credit}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
