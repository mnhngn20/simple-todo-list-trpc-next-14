import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSetting from "./_components/ProfileSetting";

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
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, {`you'll`} be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">a</CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
