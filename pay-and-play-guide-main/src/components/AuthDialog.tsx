import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { tr, useLang } from "@/contexts/LanguageContext";

export const AuthDialog = ({
  open,
  onOpenChange,
  initial = "login",
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  initial?: "login" | "signup";
}) => {
  const { lang } = useLang();
  const [tab, setTab] = useState(initial);

  const handle = (kind: string) => async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("🔥 HANDLE TRIGGERED", kind); 

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  console.log("username:", formData.get("username"));
  console.log("password:", formData.get("password"));

  const url =
  kind === "login"
    ? "http://127.0.0.1:5000/api/login"
    : "http://127.0.0.1:5000/api/signup";
    
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  const data = await res.json();

  if (data.message) {
    toast({
      title: data.message,
    });
    onOpenChange(false);
  } else {
    toast({
      title: "Error",
      description: data.error || "Something went wrong",
    });
  }
};
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-3xl border-accent/10">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{tr("brand", lang)}</DialogTitle>
          <DialogDescription>Learn India's digital life — in your language.</DialogDescription>
        </DialogHeader>
        <Tabs value={tab} onValueChange={(v) => setTab(v as "login" | "signup")} className="mt-2">
          <TabsList className="grid w-full grid-cols-2 rounded-full bg-secondary/60">
            <TabsTrigger value="login" className="rounded-full">{tr("login", lang)}</TabsTrigger>
            <TabsTrigger value="signup" className="rounded-full">{tr("signup", lang)}</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-5">
            <form onSubmit={handle("login")} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-l">Email or phone</Label>
                <Input name="email" id="email-l" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pass-l">Password</Label>
                <Input name="password" id="pass-l" required type="password" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                {tr("login", lang)}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="mt-5">
            <form onSubmit={handle("signup")} className="space-y-4">

              <div className="space-y-2">
               <Label htmlFor="email-s">Email or phone</Label>
               <Input name="username" id="email-s" required placeholder="you@example.com" />
              </div>

    <div className="space-y-2">
      <Label htmlFor="pass-s">Create password</Label>
      <Input name="password" id="pass-s" required type="password" placeholder="At least 6 characters" />
    </div>

    <Button type="submit" variant="hero" size="lg" className="w-full">
      {tr("signup", lang)}
    </Button>

  </form>
</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
