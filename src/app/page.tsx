// IMPORTS -
import { OnboardingForm } from '@/components/forms/patient-form'
import { OnboardingFormProvider } from '@/contexts/onboarding'

export default function Home() {
  return (
    <div className="flex h-dvh">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <OnboardingFormProvider>
            <OnboardingForm />
          </OnboardingFormProvider>
          <p className="copyright py-12">&copy; 2024 Patient Sync</p>
        </div>
      </section>
    </div>
  )
}
