import RegisterForm from "@/components/pages/register/register-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
      <div>
        <Image src="/logo.png" width="80" height="30" alt="logo" />
      </div>
      <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        <RegisterForm />
      </div>
    </div>
  );
}
