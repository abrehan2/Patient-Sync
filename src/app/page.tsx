// IMPORTS -
import { OnboardingForm } from "@/components/forms/patient-form";
import { OnboardingFormProvider } from "@/contexts/onboarding";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full max-h-screen">
      {/* TODO: OTP VERIFICATION */}
      <section className="remove-scrollbar h-screen container my-auto">
        <div className="sub-container max-w-[496px]">
          <OnboardingFormProvider>
            <OnboardingForm />
          </OnboardingFormProvider>
          <div className="text-14-regular mt-12 flex justify-between">
            <p className="justify-items-end xl:text-left">
              &copy; 2024 Patient Sync
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
