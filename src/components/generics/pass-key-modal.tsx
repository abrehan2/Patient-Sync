"use client";

// IMPORTS -
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { config } from "@/config/config";
import { keys } from "@/constants/key";
import { decryptKey, encryptKey } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

// PARTIALS -
const adminKey =
  typeof window !== "undefined"
    ? window.localStorage.getItem(keys.ADMIN_PASS_KEY)
    : null;

export const PassKeyModal = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [passKey, setPassKey] = useState("");
  const [error, setError] = useState("");
  const path = usePathname();

  useEffect(() => {
    const accessKey = adminKey && decryptKey(adminKey);

    if (path) {
      if (accessKey === config.ADMIN_PASS_KEY) {
        setOpen(false);
        router.push("/admin");
      } else {
        setOpen(true);
      }
    }
  }, [path, router]);

  const closeModal = () => {
    setOpen(false);
    router.push("/");
  };

  const passKeyHandler = (value: string) => {
    setPassKey(value);
  };

  const validatePassKey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (passKey === config.ADMIN_PASS_KEY) {
      const encryptedKey = encryptKey(passKey);
      localStorage.setItem(keys.ADMIN_PASS_KEY, encryptedKey);
      setOpen(false);
    } else {
      setError("Invalid pass key. Please try again.");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Admin Verification
            <RxCross2 onClick={() => closeModal()} className="cursor-pointer" />
          </AlertDialogTitle>
          <AlertDialogDescription className="font-normal text-red-500">
            To access the dashboard, kindly enter your pass key.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          <InputOTP
            maxLength={6}
            value={passKey}
            onChange={(value) => passKeyHandler(value)}
          >
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validatePassKey(e)}
            className="shad-primary-btn w-full"
          >
            Verify
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
