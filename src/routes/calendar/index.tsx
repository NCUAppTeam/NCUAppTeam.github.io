import { createFileRoute } from '@tanstack/react-router'
import { AuthGuard } from '../../utils/auth'

export const Route = createFileRoute('/calendar/')({
  beforeLoad: AuthGuard,
  component: CalendarIndex,
})

function CalendarIndex() {
  return (
    <>
      <div>Hello /calendar/!</div>
    </>
  )
}
