import RegisterForm from "./_components/RegisterForm";

export default function Register() {
  return (
    <div className="h-full grid grid-cols-5 p-4">
      <div className="col-span-3">a</div>
      <div className="col-span-2">
        <RegisterForm />
      </div>
    </div>
  );
}
