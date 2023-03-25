import { MainLayout } from "../components/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <MainLayout>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={"vercelLogo"}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <h1>Home</h1>
      <div>
        <Link href={"/about"}>About</Link>
      </div>

      <div className={"grid"}></div>
    </MainLayout>
  );
}
