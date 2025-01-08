'use client'

import { useEffect, useState } from 'react'

export default function Error({ error }: { error: Error }) {
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setErrorMessage(error.message)
  }, [error])

  return (
    <div>
      <h2>{errorMessage}</h2>
    </div>
  )
}
