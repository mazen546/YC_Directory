import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export function errorToast(title: string, message: string) {
  return toast.error(message, {
    unstyled: true,
    position: "top-center",
    icon: title,
    closeButton: true,
    classNames: {
      toast:
        "bg-red-400 text-white flex flex-col items-start justify-start gap-1 p-3 !rounded-lg md:w-full !min-w-[400px]",
      icon: "text-white text-xl flex font-bold items-center justify-center",
      description: "text-white text-2xl",
      closeButton:
        "ml-auto cursor-pointer hover:!bg-transparent [&>svg]:size-[16px]",
    },
  });
}
export function successToast(title: string, message: string) {
  return toast.success(message, {
    unstyled: true,
    position: "top-center",
    icon: title,
    closeButton: true,
    classNames: {
      toast:
        "bg-green-400 text-white flex flex-col items-start justify-start gap-1 p-3 !rounded-lg md:w-full !min-w-[400px]",
      icon: "text-white text-xl flex font-bold items-center justify-center",
      description: "text-white text-2xl",
      closeButton:
        "ml-auto cursor-pointer hover:!bg-transparent [&>svg]:size-[16px]",
    },
  });
}
