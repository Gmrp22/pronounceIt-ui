import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/forms/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">PronounceIt</CardTitle>
          <CardDescription>
            Inicia sesión para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
