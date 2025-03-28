import { useMemo, useRef } from 'react'
import { FormProvider, useForm, type FieldValues } from 'react-hook-form'

import NextForm, { type FormProps } from 'next/form'

type Props = Omit<FormProps, 'onSubmit'>

export function Form<TFieldValues extends FieldValues>({
  action,
  children,
}: Props) {
  const ref = useRef<HTMLFormElement>(null)
  const methods = useForm<TFieldValues>({
    mode: 'onBlur',
  })

  const onSubmit = useMemo(
    // eslint-disable-next-line react-compiler/react-compiler
    () => methods.handleSubmit(() => ref.current?.submit()), //TODO: Fix
    [methods, ref],
  )

  return (
    <FormProvider {...methods}>
      <NextForm ref={ref} action={action} onSubmit={onSubmit} noValidate>
        {children}
      </NextForm>
    </FormProvider>
  )
}
