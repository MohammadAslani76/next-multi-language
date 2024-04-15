
import SelectLanguage from "@/app/components/SelectLanguage";
import TextComponent from "@/app/components/TextComponent";

export default function Home({params : {lang}}) {

    return (
        <main className="min-h-screen p-12">
            <div className="flex items-center justify-between gap-3 flex-wrap">
                <TextComponent lang={lang}/>
                <SelectLanguage/>
            </div>
        </main>
    );
}
