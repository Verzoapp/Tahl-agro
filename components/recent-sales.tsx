import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback className=" text-gray-700">O</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium text-gray-700 leading-none">
            Olivia Martin
          </p>
          <p className="text-sm text-muted-foreground">09123445532</p>
        </div>
        <div className="ml-auto text-sm font-medium text-gray-700 leading-none">
          Farm cleared
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarFallback className=" text-gray-700">J</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium text-gray-700 leading-none">
            Jackson Lee
          </p>
          <p className="text-sm text-muted-foreground">09123445532</p>
        </div>
        <div className="ml-auto text-sm font-medium text-gray-700 leading-none">
          Crop watered
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className=" text-gray-700">I</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium text-gray-700 leading-none">
            Isabella Nguyen
          </p>
          <p className="text-sm text-gray-500">09023456789</p>
        </div>
        <div className="ml-auto text-sm font-medium text-gray-700 leading-none">
          Crops planted
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className=" text-gray-700">W</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium text-gray-700 leading-none">
            William Kim
          </p>
          <p className="text-sm text-muted-foreground">09123445532</p>
        </div>
        <div className="ml-auto text-sm font-medium text-gray-700 leading-none">
          Farm cleared
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback className=" text-gray-700">SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium text-gray-700 leading-none">
            Sofia Davis
          </p>
          <p className="text-sm text-muted-foreground">08022334455</p>
        </div>
        <div className="ml-auto text-sm font-medium text-gray-700 leading-none">
          Fertilizer application
        </div>
      </div>
    </div>
  );
}
