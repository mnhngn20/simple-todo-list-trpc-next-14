import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSetting from "./_components/ProfileSetting";
import PasswordSetting from "./_components/PasswordSetting";

export default function Page() {
  return (
    <Tabs defaultValue="account" className="w-[720px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">My Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <ProfileSetting />
      </TabsContent>
      <TabsContent value="password">
        <PasswordSetting />
      </TabsContent>
    </Tabs>
  );
}
