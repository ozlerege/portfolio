import Image from "next/image";

export default function SchoolLogo({ school, logo }) {
  return (
    <div className="w-24 h-24 flex-shrink-0 bg-white rounded-lg flex items-center justify-center p-2">
      <div className="relative w-full h-full">
        <Image
          src={logo}
          alt={`${school} logo`}
          width={96}
          height={96}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
