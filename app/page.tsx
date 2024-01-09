import MainLayout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export default async function Page() {
  return (
    <MainLayout showFooter>
      <div className="grid grid-cols-12 gap-24 h-full items-center">
        <div className="col-span-6 flex flex-col">
          <span className="text-[54px] font-bold mb-4">
            The standard Lorem Ipsum passage used since the 1500s
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
          <div className="flex items-center mt-10 relative">
            <Input
              placeholder="Search anything"
              className="p-4 pr-[74px] w-full"
            />
            <Button className="absolute right-0">
              <SearchIcon />
            </Button>
          </div>
          <div className="grid grid-cols-3 mt-16 gap-8 text-sm">
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Perspiciatis
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Omnis iste natus
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Voluptatem
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Doloremque
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Totam rem aperiam
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Exercitationem
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Exercitationem
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Exercitationem
            </span>
            <span className="flex items-center gap-2">
              <StarIcon width={16} fill="black" />
              Exercitationem
            </span>
          </div>
        </div>
        <div className="col-span-6">
          <Image
            src="/images/main-bg.png"
            width={400}
            height={300}
            className="w-full"
            alt="todo-list"
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>
    </MainLayout>
  );
}
