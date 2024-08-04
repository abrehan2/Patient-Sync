// IMPORTS -
import { OnboardingForm } from "@/components/forms/patient-form";
import { PassKeyModal } from "@/components/generics/pass-key-modal";
import { OnboardingFormProvider } from "@/contexts/onboarding";
import { SearchParamProps } from "@/types/common";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = !!searchParams.admin;

  return (
    <div className="flex h-dvh">
      {isAdmin && <PassKeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <OnboardingFormProvider>
            <OnboardingForm />
          </OnboardingFormProvider>
          <div className="text-14-regular py-12 flex justify-between">
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

// 1:23:29
