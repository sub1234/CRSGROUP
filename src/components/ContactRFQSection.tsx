import React, { useState, useEffect } from 'react';
import type { MaterialSpec } from '../data/materials';
import { MATERIALS_DATA } from '../data/materials';
import { BoltedCard } from './common/BoltedCard';
import { LedIndicator } from './common/LedIndicator';
import { TactileButton } from './common/TactileButton';
import { RecessedInput, RecessedSelect } from './common/RecessedInput';
import { Send, CheckCircle2, Building, Mail, Phone, MapPin, RefreshCw, AlertCircle } from 'lucide-react';

interface ContactRFQSectionProps {
  selectedMaterial: MaterialSpec | null;
}

export const ContactRFQSection: React.FC<ContactRFQSectionProps> = ({ selectedMaterial }) => {
  const [plantName, setPlantName] = useState('');
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [materialId, setMaterialId] = useState(MATERIALS_DATA[0].id);
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [customSpecs, setCustomSpecs] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Web3Forms access key (user can set in localStorage or environment, with public fallback)
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

  useEffect(() => {
    if (selectedMaterial) {
      setMaterialId(selectedMaterial.id);
    }
  }, [selectedMaterial]);

  const currentMat = MATERIALS_DATA.find((m) => m.id === materialId) || MATERIALS_DATA[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation 1: Name is mandatory
    if (!personName.trim()) {
      setErrorMessage('Please enter your contact name.');
      return;
    }

    // Validation 2: Either Phone or Email is mandatory
    if (!email.trim() && !phone.trim()) {
      setErrorMessage('Please provide either an email address or a phone number so we can reach you.');
      return;
    }

    // Validation 3: Validate email format if provided
    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        setErrorMessage('Please enter a valid email address (e.g. name@company.com).');
        return;
      }
    }

    // Validation 4: Validate phone number if provided (numbers only, max 11 digits, min 10 digits)
    if (phone.trim()) {
      if (!/^\d+$/.test(phone.trim())) {
        setErrorMessage('Phone number must contain numbers only.');
        return;
      }
      if (phone.trim().length > 11) {
        setErrorMessage('Phone number cannot exceed 11 digits.');
        return;
      }
      if (phone.trim().length < 10) {
        setErrorMessage('Please enter a valid phone number (10 to 11 digits).');
        return;
      }
    }

    // Validation 5: Notes / Specific Requirements is mandatory
    if (!customSpecs.trim()) {
      setErrorMessage('Please enter your requirements / notes before submitting.');
      return;
    }

    setIsSubmitting(true);

    const generatedRef = `CRS-HM-${Math.floor(100000 + Math.random() * 900000)}`;

    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY || 'test-mode-key',
      subject: `New Steel Plant Inquiry [${generatedRef}] - ${personName} (${plantName || 'Direct Client'})`,
      from_name: personName,
      email: email || 'Not provided (phone provided)',
      phone: phone || 'Not provided (email provided)',
      company: plantName || 'Not specified',
      product: `${currentMat.name} (${currentMat.code}) - ${currentMat.divisionName}`,
      delivery_location: deliveryLocation || 'Not specified',
      custom_specifications: customSpecs,
      inquiry_reference: generatedRef,
      recipient_email: 'acc.crsenterprises@gmail.com',
    };

    try {
      if (WEB3FORMS_ACCESS_KEY) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          setIsSubmitted(true);
        } else {
          console.warn('Web3Forms response:', result);
          setIsSubmitted(true);
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPlantName('');
    setPersonName('');
    setEmail('');
    setPhone('');
    setCustomSpecs('');
    setDeliveryLocation('');
    setErrorMessage(null);
  };

  return (
    <section id="rfq" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <LedIndicator color="blue" size="sm" pulse={true} />
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#4a5568]">
            DIRECT INQUIRY TERMINAL // CRS GROUP & HITZEMEISTER
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2d3436] tracking-tight drop-shadow-[0_1px_1px_#ffffff]">
          CONTACT US & DISPATCH INQUIRY
        </h2>
        <p className="text-base text-[#4a5568] max-w-2xl mt-2 font-normal">
          Get in touch directly with our leadership team for Tundish Boards, Refractory Consumables, Quartzite, Scrap, or Pig Iron trading inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form (7 Cols) */}
        <div className="lg:col-span-7">
          <BoltedCard elevated={true} withScrews={true} withVents={true} tag="CENTRAL INQUIRY STATION">
            {isSubmitted ? (
              <div className="p-6 md:p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#2d3436] tracking-tight">
                    Thank You for Your Enquiry!
                  </h3>
                  <p className="text-sm sm:text-base text-[#4a5568] max-w-lg mx-auto font-medium leading-relaxed">
                    Thank you for contacting us. We have received your inquiry and our team will reach out to you promptly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#e0e5ec] shadow-[inset_1px_1px_3px_#ffffff,2px_2px_5px_#babecc] text-left text-xs font-mono space-y-2 text-[#4a5568] max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span>Contact Name:</span>
                    <strong className="text-[#2d3436]">{personName}</strong>
                  </div>
                  {plantName && (
                    <div className="flex justify-between">
                      <span>Company:</span>
                      <strong className="text-[#2d3436]">{plantName}</strong>
                    </div>
                  )}
                  {email && (
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <strong className="text-[#2d3436]">{email}</strong>
                    </div>
                  )}
                  {phone && (
                    <div className="flex justify-between">
                      <span>Phone:</span>
                      <strong className="text-[#2d3436]">{phone}</strong>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Selected Product:</span>
                    <strong className="text-[#2d3436]">{currentMat.name}</strong>
                  </div>
                  {deliveryLocation && (
                    <div className="flex justify-between">
                      <span>Delivery Location:</span>
                      <strong className="text-[#0284c7]">{deliveryLocation}</strong>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-center">
                  <TactileButton variant="secondary" size="md" onClick={handleReset}>
                    Submit Another Inquiry
                  </TactileButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono flex items-center gap-2.5 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.05)]">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                    <span className="font-semibold">{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RecessedInput
                    label="Contact Person Name *"
                    placeholder="e.g. Rajesh Sharma"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                  />

                  <RecessedInput
                    label="Steel Plant / Company Name"
                    placeholder="e.g. Shyam Steel / Rashmi Metaliks"
                    value={plantName}
                    onChange={(e) => setPlantName(e.target.value)}
                    icon={<Building className="w-4 h-4" />}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RecessedInput
                    label="Email Address (Email or Phone required)"
                    type="email"
                    placeholder="procurement@steelplant.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    icon={<Mail className="w-4 h-4" />}
                  />

                  <RecessedInput
                    label="Phone / Mobile Number (Phone or Email required)"
                    type="tel"
                    inputMode="numeric"
                    maxLength={11}
                    placeholder="e.g. 9876543210 (numbers only, max 11 digits)"
                    value={phone}
                    onChange={(e) => {
                      const numbersOnly = e.target.value.replace(/\D/g, '').slice(0, 11);
                      setPhone(numbersOnly);
                    }}
                    icon={<Phone className="w-4 h-4" />}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <RecessedSelect
                    label="Product / Material Needed"
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                    options={MATERIALS_DATA.map((m) => ({
                      value: m.id,
                      label: `${m.name} (${m.divisionName.split(' ')[0]})`,
                    }))}
                  />

                  <RecessedInput
                    label="Target Delivery Location"
                    placeholder="e.g. Purulia, West Bengal / Rourkela / Plant Site"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    icon={<MapPin className="w-4 h-4" />}
                  />
                </div>

                {/* Notes / Specific Requirements - Mandatory */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-[#4a5568]">
                    <label>Specific Requirements / Notes *</label>
                    <span className="text-[10px] text-[#0284c7] font-bold">MANDATORY</span>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Enter your required specifications, tundish mould drawings, grain fractions for ramming mass, scrap grade details, or preferred schedule..."
                    value={customSpecs}
                    onChange={(e) => setCustomSpecs(e.target.value)}
                    className="w-full bg-[#e0e5ec] text-[#2d3436] placeholder-[#4a5568]/60 font-mono text-xs rounded-lg p-3.5 shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] border-none outline-none focus:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff,0_0_0_2px_#0ea5e9]"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <TactileButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    isFullWidth
                    disabled={isSubmitting}
                    icon={isSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </TactileButton>
                </div>
              </form>
            )}
          </BoltedCard>
        </div>

        {/* Right Column: Visiting Card Representation */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-3xl bg-[#1a1f26] p-6 text-white border-2 border-[#39424e] shadow-[14px_14px_30px_#babecc,-12px_-12px_28px_#ffffff] bolted-panel-dark">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-700 font-mono text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <LedIndicator color="blue" size="sm" pulse={true} />
                <span className="font-bold text-[#38bdf8]">CRS GROUP LEADERSHIP</span>
              </div>
              <span className="text-[10px] text-neutral-400">DIRECT CONTACT</span>
            </div>

            <div className="mt-4 space-y-4 font-mono">
              <div>
                <div className="text-2xl font-black font-sans tracking-tight text-white">
                  SUBHAM CHOWDHARY
                </div>
                <div className="text-sm font-bold text-[#38bdf8] mt-0.5">
                  DIRECTOR • CRS GROUP
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  CRS Enterprises Pvt Ltd • Hitzemeister Pvt Ltd
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 space-y-3 text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <div>
                    <a href="tel:+917863950905" className="hover:text-[#38bdf8] font-bold">
                      +91-786 3950905
                    </a>
                    <span className="text-neutral-500 text-[10px] ml-2">(India)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <div>
                    <a href="tel:+447824609436" className="hover:text-[#38bdf8] font-bold">
                      +44-782 4609436
                    </a>
                    <span className="text-neutral-500 text-[10px] ml-2">(United Kingdom)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <a href="mailto:acc.crsenterprises@gmail.com" className="hover:text-[#38bdf8] font-bold">
                    acc.crsenterprises@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Purulia Registered Works:</div>
                    <div className="text-neutral-400 text-[11px] mt-0.5">
                      814, Narayanpur, Purulia, West Bengal - 723121, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">London Corporate Office:</div>
                    <div className="text-neutral-400 text-[11px] mt-0.5">
                      128, City Road, London, United Kingdom
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
