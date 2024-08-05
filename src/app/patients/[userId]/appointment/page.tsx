// IMPORTS -
import { getPatient } from '@/actions/patient'
import { AppointmentForm } from '@/components/forms/appointment-form'
import { appointmentStatus } from '@/constants/form'
import { AppointmentFormProvider } from '@/contexts/appointment'
import { SearchParamProps } from '@/types/common'

const Page = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId)

  return (
    <div className="flex h-dvh">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <AppointmentFormProvider>
            <AppointmentForm
              userId={userId}
              type={appointmentStatus.CREATE}
              patientId={patient.$id}
            />
          </AppointmentFormProvider>
          <p className="copyright py-12">&copy; 2024 Patient Sync</p>
        </div>
      </section>
    </div>
  )
}

export default Page
