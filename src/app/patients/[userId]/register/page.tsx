// IMPORTS -
import { getUser } from "@/actions/patient";
import { RegisterForm } from "@/components/forms/register-form";
import { OnboardingFormProvider } from "@/contexts/onboarding";
import { RegisterFormProvider } from "@/contexts/register";
import { SearchParamProps } from "@/types/common";
import Link from "next/link";

const Page = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-dvh">
      {/* TODO: OTP VERIFICATION */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <RegisterFormProvider>
            <RegisterForm user={user} />
          </RegisterFormProvider>
          {/* <div className="text-14-regular mt-12 flex justify-between">
            <p className="justify-items-end xl:text-left">
              &copy; 2024 Patient Sync
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
