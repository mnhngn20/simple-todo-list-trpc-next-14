type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div className="fixed bg-primary text-white w-full min-h-[100px] bottom-0 h-20 flex items-center justify-between border-b border-border">
      <div className="mx-auto p-4 max-w-[1440px] w-full">
        <div className="w-full grid grid-cols-3 items-center gap-16">
          <div className="grid grid-cols-6"></div>
          <div className="flex flex-col text-sm items-center justify-center">
            Created by Mnhngn20
            <span>© 2023 Minh Nguyen. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
