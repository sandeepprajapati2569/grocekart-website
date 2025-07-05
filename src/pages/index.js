import MetaData from "@/components/metadata-component/MetaData";
import HomePage from "@/components/pagecomponents/Homepage";

export default function Home() {
  return (
    <div>
      <MetaData pageName="/" title={`Home - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
      <HomePage />
    </div>
  );
}
