import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
} from "lucide-react";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div className="fixed bg-black text-white w-full min-h-[132px] bottom-0 h-20 flex items-center justify-between border-b border-border">
      <div className="mx-auto p-4 max-w-[1440px] w-full">
        <div className="w-full grid grid-cols-3 items-center gap-16">
          <div className="grid grid-cols-6">
            <FacebookIcon size={20} />
            <LinkedinIcon size={20} />
            <GithubIcon size={20} />
            <InstagramIcon size={20} />
            <YoutubeIcon size={20} />
            <TwitterIcon size={20} />
          </div>
          <div className="flex flex-col items-center justify-center">
            Created by Mnhngn20
            <span>© 2023 Minh Nguyen. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
