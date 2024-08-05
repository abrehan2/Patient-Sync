'use client'

// IMPORTS -
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useMemo } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { registerSchema, registerSchemaKeys, registerSchemaType } from '@/schemas/register'
import { ReactChildren } from '@/types/common'

export const RegisterFormProvider = ({ children }: ReactChildren) => {
  const formHook = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      [registerSchemaKeys.FULL_NAME]: '',
      [registerSchemaKeys.EMAIL]: '',
      [registerSchemaKeys.PHONE_NUMBER]: '',
      [registerSchemaKeys.BIRTH]: '',
      [registerSchemaKeys.GENDER]: undefined,
      [registerSchemaKeys.ADDRESS]: '',
      [registerSchemaKeys.OCCUPATION]: '',
      [registerSchemaKeys.PRIMARY_PHYSICIAN]: '',
      [registerSchemaKeys.ALLERGIES]: '',
      [registerSchemaKeys.CURRENT_MEDICATION]: '',
      [registerSchemaKeys.IDENTIFICATION_TYPE]: undefined,
      [registerSchemaKeys.IDENTIFICATION_NUMBER]: '',
      [registerSchemaKeys.IDENTIFICATION_DOCUMENT]: undefined,
    },
    mode: 'onChange',
  })

  return <FormProvider {...formHook}>{children}</FormProvider>
}

export const useRegisterForm = () => {
  const formHook = useFormContext<registerSchemaType>()

  return useMemo(() => ({ formHook }), [formHook])
}
