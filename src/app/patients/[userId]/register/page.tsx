// IMPORTS -
import { getUser } from '@/actions/patient'
import { RegisterForm } from '@/components/forms/register-form'
import { RegisterFormProvider } from '@/contexts/register'
import { SearchParamProps } from '@/types/common'

const Page = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)

  return (
    <div className="flex h-dvh">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[500px]">
          <RegisterFormProvider>
            <RegisterForm user={user} />
          </RegisterFormProvider>
          <p className="copyright py-12">&copy; 2024 Patient Sync</p>
        </div>
      </section>
    </div>
  )
}

export default Page
